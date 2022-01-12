package com.tokenstreetreactnativeidnowvideoident;

import android.app.Activity;
import android.content.Intent;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.bridge.ReadableMap;

// IDnow
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

    // private IDnowSDK.Server getServer(String environment) {
    //     final HashMap<String, IDnowSDK.Server> environmentServerMap = new HashMap();

    //     environmentServerMap.put("DEV", IDnowSDK.Server.DEV);
    //     environmentServerMap.put("DEV2", IDnowSDK.Server.DEV2);
    //     environmentServerMap.put("TEST", IDnowSDK.Server.TEST);
    //     environmentServerMap.put("TEST1", IDnowSDK.Server.TEST1);
    //     environmentServerMap.put("TEST2", IDnowSDK.Server.TEST2);
    //     environmentServerMap.put("TEST3", IDnowSDK.Server.TEST3);
    //     environmentServerMap.put("LIVE", IDnowSDK.Server.LIVE);
    //     environmentServerMap.put("CUSTOM", IDnowSDK.Server.CUSTOM);
    //     environmentServerMap.put("INT", IDnowSDK.Server.INT);
    //     environmentServerMap.put("DV3", IDnowSDK.Server.DV3);
    //     environmentServerMap.put("DV4", IDnowSDK.Server.DV4);

    //     return environmentServerMap.get(environment);
    // }

    @ReactMethod
    public void startVideoIdent(final ReadableMap options, Callback failureCallback, Callback successCallback) {
        Activity currentActivity = getCurrentActivity();
        globalFailureCallback = failureCallback;
        globalSuccessCallback = successCallback;

        try {
            IDnowSDK.getInstance().initialize(currentActivity, options.getString("companyID"));
            IDnowSDK.setShowVideoOverviewCheck(options.getBoolean("showVideoOverviewCheck"), reactContext);
            IDnowSDK.setShowErrorSuccessScreen(options.getBoolean("showErrorSuccessScreen"), reactContext);

            // String environment = options.getString("environment");

            // IDnowSDK.setEnvironment(this.getServer(environment)); // no need to force to use a specific env; Default is to determine this by the token used

            // if (environment.equals("CUSTOM")) {
            //     IDnowSDK.setEnvironment(IDnowSDK.Server.CUSTOM);
            //     IDnowSDK.setApiHost(options.getString("apiHost"), reactContext); // require if env is "CUSTOM"
            //     IDnowSDK.setWebHost(options.getString("webHost"), reactContext); // require if env is "CUSTOM"
            //     IDnowSDK.setWebsocketHost(options.getString("websocketHost"), reactContext); // require if env is "CUSTOM"

            //     if (options.hasKey("videoHost")) {
            //         IDnowSDK.setVideoHost(options.getString("videoHost"), reactContext);
            //     }
            //     if (options.hasKey("stunHost")) {
            //         IDnowSDK.setStunHost(options.getString("stunHost"), reactContext);
            //     }
            //     if (options.hasKey("stunPort")) {
            //         IDnowSDK.setStunPort(options.getInt("stunPort"), reactContext);
            //     }
            // }

            IDnowSDK.setTransactionToken(options.getString("transactionToken"), reactContext);

            IDnowSDK.getInstance().start(IDnowSDK.getTransactionToken(reactContext));
        } catch (Exception e) {
            WritableMap params = Arguments.createMap();
            params.putString("resultCode", "INTERNAL_ERROR");
            params.putString("errorMessage", e.getMessage());
            globalFailureCallback.invoke(params);
        }
    }
}
