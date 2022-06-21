/*
 * Copyright © 2022 tokenstreet GmbH.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.tokenstreetreactnativeidnowvideoident;

import android.app.Activity;
import android.content.Intent;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;
import de.idnow.sdk.IDnowSDK;

@ReactModule(name = ReactNativeIdnowVideoidentModule.NAME)
public class ReactNativeIdnowVideoidentModule extends ReactContextBaseJavaModule {

    public static final String NAME = "ReactNativeIdnowVideoident";
    private final ReactApplicationContext reactContext;
    private Callback globalErrorCallback;
    private Callback globalSuccessCallback;

    public ReactNativeIdnowVideoidentModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(
            new BaseActivityEventListener() {
                @Override
                public void onActivityResult(
                    @Nullable Activity activity,
                    int requestCode,
                    int resultCode,
                    @Nullable Intent data
                ) {
                    if (requestCode == IDnowSDK.REQUEST_ID_NOW_SDK) {
                        resultCallback(resultCode, null);
                    }
                }
            }
        );
        this.reactContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    private void resultCallback(int resultCode, @Nullable Exception e) {
        WritableMap params = Arguments.createMap();
        String resultCodeKey = "resultCode";
        String errorMessageKey = "errorMessage";
        switch (resultCode) {
            case IDnowSDK.RESULT_CODE_FAILED:
                params.putString(resultCodeKey, "FAILED");
                if (e != null) params.putString(errorMessageKey, e.getMessage());
                globalErrorCallback.invoke(params);
                break;
            case IDnowSDK.RESULT_CODE_SUCCESS:
                params.putString(resultCodeKey, "SUCCESS");
                globalSuccessCallback.invoke(params);
                break;
            case IDnowSDK.RESULT_CODE_CANCEL:
                params.putString(resultCodeKey, "CANCEL");
                if (e != null) params.putString(errorMessageKey, e.getMessage());
                globalErrorCallback.invoke(params);
                break;
            case IDnowSDK.RESULT_CODE_WRONG_IDENT:
            case IDnowSDK.RESULT_CODE_FALLBACK_VID:
            case 11: // 11 -> IDnowSDK.RESULT_CODE_FAILED_DEVICE_ROOTED
            case IDnowSDK.RESULT_CODE_INTERNAL:
            default:
                params.putString(resultCodeKey, "INTERNAL_ERROR");
                if (e != null) params.putString(errorMessageKey, e.getMessage());
                globalErrorCallback.invoke(params);
        }
    }

    @ReactMethod
    public void startVideoIdent(
        @NonNull final ReadableMap settings,
        @NonNull Callback successCallback
        @NonNull Callback errorCallback,
    ) {
        globalErrorCallback = errorCallback;
        globalSuccessCallback = successCallback;

        Activity currentActivity = getCurrentActivity();

        try {
            IDnowSDK instance = ReactNativeIdnowSDK.initializeWithSettings(currentActivity, settings, reactContext);
            instance.start(IDnowSDK.getTransactionToken(reactContext));
        } catch (Exception e) {
            resultCallback(IDnowSDK.RESULT_CODE_INTERNAL, e);
        }
    }
}
