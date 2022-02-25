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

        instance.initialize(
            currentActivity,
            settings.hasKey("companyId") ? settings.getString("companyId") : "",
            settings.getString("language")
        );

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
        if (settings.hasKey("showVideoOverviewCheck")) IDnowSDK.setShowVideoOverviewCheck(
            settings.getBoolean("showVideoOverviewCheck"),
            reactApplicationContext
        );
        if (settings.hasKey("callFromHighCallVolumeActivity")) IDnowSDK.setCallFromHighCallVolumeActivity(
            settings.getBoolean("callFromHighCallVolumeActivity"),
            reactApplicationContext
        );
        if (settings.hasKey("showErrorSuccessScreen")) IDnowSDK.setShowErrorSuccessScreen(
            settings.getBoolean("showErrorSuccessScreen"),
            reactApplicationContext
        );
        IDnowSDK.setNameForActionBar(settings.getString("nameForActionBar"), reactApplicationContext);
        if (
            settings.hasKey("calledFromIDnowApp") & settings.getBoolean("calledFromIDnowApp")
        ) IDnowSDK.calledFromIDnowApp(reactApplicationContext);
        if (settings.hasKey("allowInvalidCertificates")) IDnowSDK.setAllowInvalidCertificates(
            settings.getBoolean("allowInvalidCertificates")
        );
        if (settings.hasKey("allowHttpConnections")) IDnowSDK.setAllowHttpConnections(
            settings.getBoolean("allowHttpConnections")
        );
        if (settings.hasKey("checkScreenLinesLong")) IDnowSDK.setCheckScreenLinesLong(
            settings.getBoolean("checkScreenLinesLong")
        );
        if (settings.hasKey("checkBoxOrientationRight")) IDnowSDK.setCheckBoxOrientationRight(
            settings.getBoolean("checkBoxOrientationRight")
        );
        if (settings.hasKey("checkScreenBoxPhoneNumberRequired")) IDnowSDK.setCheckScreenBoxPhoneNumberRequired(
            settings.getBoolean("checkScreenBoxPhoneNumberRequired")
        );
        if (settings.hasKey("checkScreenBoxDocumentRequired")) IDnowSDK.setCheckScreenBoxDocumentRequired(
            settings.getBoolean("checkScreenBoxDocumentRequired")
        );
        if (settings.hasKey("checkScreenBoxEMailRequired")) IDnowSDK.setCheckScreenBoxEMailRequired(
            settings.getBoolean("checkScreenBoxEMailRequired")
        );
        if (settings.hasKey("checkScreenBoxConsentRequired")) IDnowSDK.setCheckScreenBoxConsentRequired(
            settings.getBoolean("checkScreenBoxConsentRequired")
        );
        if (settings.hasKey("customiseCallQualityCheckScreen")) IDnowSDK.setCustomiseCallQualityCheckScreen(
            settings.getBoolean("customiseCallQualityCheckScreen")
        );
        if (settings.hasKey("showTokenDuringCheckScreen")) IDnowSDK.setShowTokenDuringCheckScreen(
            settings.getBoolean("showTokenDuringCheckScreen")
        );
        if (
            settings.hasKey("squareCheckboxForm") & settings.getBoolean("squareCheckboxForm")
        ) IDnowSDK.setSquareCheckboxForm();
        if (settings.hasKey("agbInOneLine")) IDnowSDK.setAGBInOneLine(settings.getBoolean("agbInOneLine"));
        if (settings.hasKey("checkboxesOrientationTop")) IDnowSDK.setCheckboxesOrientationTop(
            settings.getBoolean("checkboxesOrientationTop")
        );
        if (
            settings.hasKey("doNotShowCompanyImageInResultActivity") &
            settings.getBoolean("doNotShowCompanyImageInResultActivity")
        ) IDnowSDK.doNotShowCompanyImageInResultActivity();
        if (settings.hasKey("headerBolded")) IDnowSDK.setHeaderBolded(settings.getBoolean("headerBolded"));
        if (settings.hasKey("fullSizeModalSmsWindow")) IDnowSDK.setFullSizeModalSmsWindow(
            settings.getBoolean("fullSizeModalSmsWindow")
        );
        if (settings.hasKey("transparentBackgroundModalSmsWindow")) IDnowSDK.setTransparentBackgroundModalSmsWindow(
            settings.getBoolean("transparentBackgroundModalSmsWindow")
        );
        if (settings.hasKey("whiteAgentThumbnailBackground")) IDnowSDK.setWhiteAgentThumbnailBackground(
            settings.getBoolean("whiteAgentThumbnailBackground")
        );
        IDnowSDK.setPhoneNo(settings.getString("phoneNo"));
        if (settings.hasKey("showDialogsWithIcon")) IDnowSDK.setShowDialogsWithIcon(
            settings.getBoolean("showDialogsWithIcon"),
            reactApplicationContext
        );
        IDnowSDK.setFirebaseToken(settings.getString("firebaseToken"));
        if (settings.hasKey("showRatingDialog")) IDnowSDK.setShowRatingDialog(settings.getBoolean("showRatingDialog"));
        if (settings.hasKey("forcedWaitingList")) IDnowSDK.setForcedWaitingList(
            settings.getBoolean("forcedWaitingList")
        );
        if (settings.hasKey("startCallIssued")) instance.setStartCallIssued(settings.getBoolean("startCallIssued"));
        if (settings.hasKey("overrideEntryActivity")) IDnowSDK.setOverrideEntryActivity(
            settings.getBoolean("overrideEntryActivity")
        );
        if (settings.hasKey("appGoogleRating")) IDnowSDK.setApp_GoogleRating(settings.getBoolean("appGoogleRating"));
        if (settings.hasKey("newBrand")) IDnowSDK.setNewBrand(settings.getBoolean("newBrand"));

        // -----------------------------------------------------------------------------------
        //									Custom server
        // -----------------------------------------------------------------------------------
        IDnowSDK.setApiHost(settings.getString("apiHost"), reactApplicationContext);
        IDnowSDK.setWebHost(settings.getString("webHost"), reactApplicationContext);
        IDnowSDK.setWebsocketHost(settings.getString("websocketHost"), reactApplicationContext);
        IDnowSDK.setVideoHost(settings.getString("videoHost"), reactApplicationContext);
        IDnowSDK.setStunHost(settings.getString("stunHost"), reactApplicationContext);
        if (settings.hasKey("stunPort")) IDnowSDK.setStunPort(settings.getInt("stunPort"), reactApplicationContext);

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
