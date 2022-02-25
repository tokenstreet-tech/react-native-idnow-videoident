/*
 * Copyright © 2022 tokenstreet GmbH.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.tokenstreetreactnativeidnowvideoident;

import android.app.Activity;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;
import de.idnow.sdk.IDnowSDK;
import java.util.HashMap;

public class ReactNativeIdnowSDK {

    @NonNull
    public static IDnowSDK initializeWithSettings(
        @NonNull Activity currentActivity,
        @NonNull final ReadableMap settings,
        @NonNull final ReactApplicationContext reactApplicationContext
    ) throws Exception {
        IDnowSDK instance = IDnowSDK.getInstance();
        String companyId = settings.getString("companyId");
        instance.initialize(currentActivity, companyId != null ? companyId : "", settings.getString("language"));

        // -----------------------------------------------------------------------------------
        //                                    General settings
        // -----------------------------------------------------------------------------------
        IDnowSDK.setTransactionToken(settings.getString("transactionToken"), reactApplicationContext);
        IDnowSDK.setEnvironment(ReactNativeIdnowSDK.getEnvironment(settings.getString("environment")));
        IDnowSDK.setConnectionType(
            ReactNativeIdnowSDK.getConnectionType(settings.getString("connectionType")),
            reactApplicationContext
        );

        // -----------------------------------------------------------------------------------
        //                                    Android Settings
        // -----------------------------------------------------------------------------------
        IDnowSDK.setLocale(reactApplicationContext, settings.getString("locale"));
        IDnowSDK.setNewLocale(reactApplicationContext, settings.getString("newLocale"));
        if (settings.getBoolean("disableLogging")) {
            IDnowSDK.disableLogging();
        } else {
            IDnowSDK.enableLogging();
        }
        IDnowSDK.setShowVideoOverviewCheck(settings.getBoolean("showVideoOverviewCheck"), reactApplicationContext);
        IDnowSDK.setCallFromHighCallVolumeActivity(
            settings.getBoolean("callFromHighCallVolumeActivity"),
            reactApplicationContext
        );
        IDnowSDK.setShowErrorSuccessScreen(settings.getBoolean("showErrorSuccessScreen"), reactApplicationContext);
        IDnowSDK.setNameForActionBar(settings.getString("nameForActionBar"), reactApplicationContext);
        if (settings.getBoolean("calledFromIDnowApp")) {
            IDnowSDK.calledFromIDnowApp(reactApplicationContext);
        }
        IDnowSDK.setAllowInvalidCertificates(settings.getBoolean("allowInvalidCertificates"));
        IDnowSDK.setAllowHttpConnections(settings.getBoolean("allowHttpConnections"));
        IDnowSDK.setCheckScreenLinesLong(settings.getBoolean("checkScreenLinesLong"));
        IDnowSDK.setCheckBoxOrientationRight(settings.getBoolean("checkBoxOrientationRight"));
        IDnowSDK.setCheckScreenBoxPhoneNumberRequired(settings.getBoolean("checkScreenBoxPhoneNumberRequired"));
        IDnowSDK.setCheckScreenBoxDocumentRequired(settings.getBoolean("checkScreenBoxDocumentRequired"));
        IDnowSDK.setCheckScreenBoxEMailRequired(settings.getBoolean("checkScreenBoxEMailRequired"));
        IDnowSDK.setCheckScreenBoxConsentRequired(settings.getBoolean("checkScreenBoxConsentRequired"));
        IDnowSDK.setCustomiseCallQualityCheckScreen(settings.getBoolean("customiseCallQualityCheckScreen"));
        IDnowSDK.setShowTokenDuringCheckScreen(settings.getBoolean("showTokenDuringCheckScreen"));
        if (settings.getBoolean("squareCheckboxForm")) {
            IDnowSDK.setSquareCheckboxForm();
        }
        IDnowSDK.setAGBInOneLine(settings.getBoolean("agbInOneLine"));
        IDnowSDK.setCheckboxesOrientationTop(settings.getBoolean("checkboxesOrientationTop"));
        if (settings.getBoolean("doNotShowCompanyImageInResultActivity")) {
            IDnowSDK.setSquareCheckboxForm();
        }
        IDnowSDK.setHeaderBolded(settings.getBoolean("headerBolded"));
        IDnowSDK.setFullSizeModalSmsWindow(settings.getBoolean("fullSizeModalSmsWindow"));
        IDnowSDK.setTransparentBackgroundModalSmsWindow(settings.getBoolean("transparentBackgroundModalSmsWindow"));
        IDnowSDK.setWhiteAgentThumbnailBackground(settings.getBoolean("whiteAgentThumbnailBackground"));
        IDnowSDK.setPhoneNo(settings.getString("phoneNo"));
        IDnowSDK.setShowDialogsWithIcon(settings.getBoolean("showDialogsWithIcon"), reactApplicationContext);
        IDnowSDK.setFirebaseToken(settings.getString("firebaseToken"));
        IDnowSDK.setShowRatingDialog(settings.getBoolean("showRatingDialog"));
        IDnowSDK.setForcedWaitingList(settings.getBoolean("forcedWaitingList"));
        instance.setStartCallIssued(settings.getBoolean("startCallIssued"));
        IDnowSDK.setOverrideEntryActivity(settings.getBoolean("overrideEntryActivity"));
        IDnowSDK.setApp_GoogleRating(settings.getBoolean("appGoogleRating"));
        IDnowSDK.setNewBrand(settings.getBoolean("newBrand"));

        // -----------------------------------------------------------------------------------
        //									Custom server
        // -----------------------------------------------------------------------------------
        IDnowSDK.setApiHost(settings.getString("apiHost"), reactApplicationContext);
        IDnowSDK.setWebHost(settings.getString("webHost"), reactApplicationContext);
        IDnowSDK.setWebsocketHost(settings.getString("websocketHost"), reactApplicationContext);
        IDnowSDK.setVideoHost(settings.getString("videoHost"), reactApplicationContext);
        IDnowSDK.setStunHost(settings.getString("stunHost"), reactApplicationContext);
        IDnowSDK.setStunPort(settings.getInt("stunPort"), reactApplicationContext);

        return instance;
    }

    @Nullable
    private static IDnowSDK.Server getEnvironment(@Nullable String environment) {
        final HashMap<String, IDnowSDK.Server> environmentMap = new HashMap<String, IDnowSDK.Server>();

        // -----------------------------------------------------------------------------------
        //                                    Dev
        // -----------------------------------------------------------------------------------
        environmentMap.put("DEV", IDnowSDK.Server.DEV);
        environmentMap.put("DEV_0", IDnowSDK.Server.DV0);
        environmentMap.put("DEV_1", IDnowSDK.Server.DV1);
        environmentMap.put("DEV_2", IDnowSDK.Server.DEV2);
        environmentMap.put("DEV_3", IDnowSDK.Server.DV3);
        environmentMap.put("DEV_4", IDnowSDK.Server.DV4);
        environmentMap.put("DEV_5", IDnowSDK.Server.DV5);

        // -----------------------------------------------------------------------------------
        //                                    Test
        // -----------------------------------------------------------------------------------
        environmentMap.put("TEST", IDnowSDK.Server.TEST);
        environmentMap.put("TEST_1", IDnowSDK.Server.TEST1);
        environmentMap.put("TEST_2", IDnowSDK.Server.TEST2);
        environmentMap.put("TEST_3", IDnowSDK.Server.TEST3);

        // -----------------------------------------------------------------------------------
        //                                    Staging
        // -----------------------------------------------------------------------------------
        environmentMap.put("STAGING_1", IDnowSDK.Server.SG1);

        // -----------------------------------------------------------------------------------
        //                                    Live
        // -----------------------------------------------------------------------------------
        environmentMap.put("LIVE", IDnowSDK.Server.LIVE);

        // -----------------------------------------------------------------------------------
        //                                    Intrum
        // -----------------------------------------------------------------------------------
        environmentMap.put("INTRUM", null);
        environmentMap.put("INTRUM_TEST", null);

        // -----------------------------------------------------------------------------------
        //                                    Other
        // -----------------------------------------------------------------------------------
        environmentMap.put("CUSTOM", IDnowSDK.Server.CUSTOM);
        environmentMap.put("INT", IDnowSDK.Server.INT);
        environmentMap.put("NOT_DEFINED", null);

        return environmentMap.get(environment);
    }

    @Nullable
    private static IDnowSDK.ConnectionType getConnectionType(@Nullable String connectionType) {
        final HashMap<String, IDnowSDK.ConnectionType> connectionTypeMap = new HashMap<String, IDnowSDK.ConnectionType>();

        connectionTypeMap.put("WEBSOCKET", IDnowSDK.ConnectionType.WEBSOCKET);
        connectionTypeMap.put("LONG_POLLING", IDnowSDK.ConnectionType.LONG_POLLING);

        return connectionTypeMap.get(connectionType);
    }
}
