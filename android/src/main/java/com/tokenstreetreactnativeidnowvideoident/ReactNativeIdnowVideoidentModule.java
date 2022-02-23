package com.tokenstreetreactnativeidnowvideoident;

import android.app.Activity;
import android.content.Intent;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.ActivityEventListener;
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
    private Callback globalFailureCallback;
    private Callback globalSuccessCallback;

    public ReactNativeIdnowVideoidentModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(idnowActivityEventListener);
        this.reactContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    private final ActivityEventListener idnowActivityEventListener = new BaseActivityEventListener() {
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
            if (requestCode == IDnowSDK.REQUEST_ID_NOW_SDK) {
                resultCallback(resultCode, null);
            }
        }
    };

    private void resultCallback(Integer resultCode, Exception e) {
        WritableMap params = Arguments.createMap();
        String resultCodeKey = "resultCode";
        String errorMessageKey = "errorMessage";
        switch (resultCode) {
            case IDnowSDK.RESULT_CODE_SUCCESS:
                params.putString(resultCodeKey, "SUCCESS");
                globalSuccessCallback.invoke(params);
                break;
            case IDnowSDK.RESULT_CODE_CANCEL:
                params.putString(resultCodeKey, "CANCEL");
                params.putString(errorMessageKey, e.getMessage());
                globalFailureCallback.invoke(params);
                break;
            case IDnowSDK.RESULT_CODE_FAILED:
                params.putString(resultCodeKey, "FAILED");
                params.putString(errorMessageKey, e.getMessage());
                globalFailureCallback.invoke(params);
                break;
            default:
                params.putString(resultCodeKey, "INTERNAL_ERROR");
                params.putString(errorMessageKey, e.getMessage());
                globalFailureCallback.invoke(params);
        }
    }

    @ReactMethod
    public void startVideoIdent(final ReadableMap settings, Callback failureCallback, Callback successCallback) {
        globalFailureCallback = failureCallback;
        globalSuccessCallback = successCallback;

        Activity currentActivity = getCurrentActivity();

        try {
            IDnowSDK instance = ReactNativeIDnowSDK.initializeWithSettings(settings, currentActivity, reactContext);
            instance.start(IDnowSDK.getTransactionToken(reactContext));
        } catch (Exception e) {
            resultCallback(null, e);
        }
    }
}
