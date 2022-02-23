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
                WritableMap params = Arguments.createMap();
                switch (resultCode) {
                    case IDnowSDK.RESULT_CODE_SUCCESS:
                        params.putString("resultCode", "SUCCESS");
                        globalSuccessCallback.invoke(params);
                        break;
                    case IDnowSDK.RESULT_CODE_CANCEL:
                        params.putString("resultCode", "CANCEL");
                        globalFailureCallback.invoke(params);
                        break;
                    case IDnowSDK.RESULT_CODE_FAILED:
                        params.putString("resultCode", "FAILED");
                        globalFailureCallback.invoke(params);
                        break;
                    default:
                        params.putString("resultCode", "INTERNAL_ERROR");
                        globalFailureCallback.invoke(params);
                }
            }
        }
    };

    @ReactMethod
    public void startVideoIdent(final ReadableMap settings, Callback failureCallback, Callback successCallback) {
        globalFailureCallback = failureCallback;
        globalSuccessCallback = successCallback;

        Activity currentActivity = getCurrentActivity();
        IDnowSDK instance = ReactNativeIDnowSDK.getInstanceWithSettings(settings, currentActivity, reactContext);

        try {
            instance.start(IDnowSDK.getTransactionToken(reactContext));
        } catch (Exception e) {
            WritableMap params = Arguments.createMap();
            params.putString("resultCode", "INTERNAL_ERROR");
            params.putString("errorMessage", e.getMessage());
            globalFailureCallback.invoke(params);
        }
    }
}
