/*
 * Copyright © 2022 tokenstreet GmbH.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.tokenstreet.reactnativeidnowvideoident

import android.app.Activity
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
import de.idnow.sdk.IDnowSDK
import java.util.*

object ReactNativeIdnowSDK {
    @Throws(Exception::class)
    fun initializeWithSettings(
        currentActivity: Activity?,
        settings: ReadableMap,
        reactApplicationContext: ReactApplicationContext
    ): IDnowSDK {
        val appearance: ReadableMap = settings.getMap("appearance")!!

        val instance = IDnowSDK.getInstance()

        instance.initialize(
            currentActivity,
            if (settings.hasKey("companyId")) settings.getString("companyId") else "",
            settings.getString("language")
        )

        // -----------------------------------------------------------------------------------
        //                                    General settings
        // -----------------------------------------------------------------------------------
        IDnowSDK.setTransactionToken(settings.getString("transactionToken"))
        IDnowSDK.setEnvironment(getEnvironment(settings.getString("environment")))
        IDnowSDK.setConnectionType(
            getConnectionType(settings.getString("connectionType")),
            reactApplicationContext
        )

        // -----------------------------------------------------------------------------------
        //                                    Android Settings
        // -----------------------------------------------------------------------------------
        if (settings.hasKey("locale")) IDnowSDK.setLocale(
            reactApplicationContext,
            Objects.requireNonNull(settings.getString("locale"))
        )
        if (settings.hasKey("newLocale")) IDnowSDK.setNewLocale(
            reactApplicationContext,
            Objects.requireNonNull(settings.getString("newLocale"))
        )
        // Can be used when we have raised the Android SDK to version 5.1.12.
        // However, this version is currently causing problems:
        // Could not find de.authada.library:aal:4.15.2
        // if (appearance.hasKey("showIDnowLogo")) IDnowSDK.setShowIDnowLogo(appearance.getBoolean("showIDnowLogo"));
        if (settings.hasKey("disableLogging")) if (settings.getBoolean("disableLogging")) {
            IDnowSDK.disableLogging()
        } else {
            IDnowSDK.enableLogging()
        }
        if (appearance.hasKey("showVideoOverviewCheck")) IDnowSDK.setShowVideoOverviewCheck(
            appearance.getBoolean("showVideoOverviewCheck"),
            reactApplicationContext
        )
        if (settings.hasKey("callFromHighCallVolumeActivity")) IDnowSDK.setCallFromHighCallVolumeActivity(
            settings.getBoolean("callFromHighCallVolumeActivity"),
            reactApplicationContext
        )
        if (appearance.hasKey("showErrorSuccessScreen")) IDnowSDK.setShowErrorSuccessScreen(
            appearance.getBoolean("showErrorSuccessScreen"),
            reactApplicationContext
        )
        IDnowSDK.setNameForActionBar(
            appearance.getString("nameForActionBar"),
            reactApplicationContext
        )
        if (settings.hasKey("calledFromIDnowApp")) if (settings.getBoolean("calledFromIDnowApp")) IDnowSDK.calledFromIDnowApp(
            reactApplicationContext
        )
        if (settings.hasKey("allowInvalidCertificates")) IDnowSDK.setAllowInvalidCertificates(
            settings.getBoolean("allowInvalidCertificates")
        )
        if (settings.hasKey("allowHttpConnections")) IDnowSDK.setAllowHttpConnections(
            settings.getBoolean("allowHttpConnections")
        )
        if (settings.hasKey("checkScreenLinesLong")) IDnowSDK.setCheckScreenLinesLong(
            settings.getBoolean("checkScreenLinesLong")
        )
        if (appearance.hasKey("checkBoxOrientationRight")) IDnowSDK.setCheckBoxOrientationRight(
            appearance.getBoolean("checkBoxOrientationRight")
        )
        if (settings.hasKey("checkScreenBoxPhoneNumberRequired")) IDnowSDK.setCheckScreenBoxPhoneNumberRequired(
            settings.getBoolean("checkScreenBoxPhoneNumberRequired")
        )
        if (settings.hasKey("checkScreenBoxDocumentRequired")) IDnowSDK.setCheckScreenBoxDocumentRequired(
            settings.getBoolean("checkScreenBoxDocumentRequired")
        )
        if (settings.hasKey("checkScreenBoxEMailRequired")) IDnowSDK.setCheckScreenBoxEMailRequired(
            settings.getBoolean("checkScreenBoxEMailRequired")
        )
        if (settings.hasKey("checkScreenBoxConsentRequired")) IDnowSDK.setCheckScreenBoxConsentRequired(
            settings.getBoolean("checkScreenBoxConsentRequired")
        )
        if (appearance.hasKey("customiseCallQualityCheckScreen")) IDnowSDK.setCustomiseCallQualityCheckScreen(
            appearance.getBoolean("customiseCallQualityCheckScreen")
        )
        if (appearance.hasKey("showTokenDuringCheckScreen")) IDnowSDK.setShowTokenDuringCheckScreen(
            appearance.getBoolean("showTokenDuringCheckScreen")
        )
        if (appearance.hasKey("squareCheckboxForm")) if (appearance.getBoolean("squareCheckboxForm")) IDnowSDK.setSquareCheckboxForm()
        if (appearance.hasKey("agbInOneLine")) IDnowSDK.setAGBInOneLine(appearance.getBoolean("agbInOneLine"))
        if (appearance.hasKey("checkboxesOrientationTop")) IDnowSDK.setCheckboxesOrientationTop(
            appearance.getBoolean("checkboxesOrientationTop")
        )
        if (appearance.hasKey("doNotShowCompanyImageInResultActivity")) if (appearance.getBoolean("doNotShowCompanyImageInResultActivity")) IDnowSDK.doNotShowCompanyImageInResultActivity()
        if (appearance.hasKey("headerBolded")) IDnowSDK.setHeaderBolded(appearance.getBoolean("headerBolded"))
        if (appearance.hasKey("fullSizeModalSmsWindow")) IDnowSDK.setFullSizeModalSmsWindow(
            appearance.getBoolean("fullSizeModalSmsWindow")
        )
        if (appearance.hasKey("transparentBackgroundModalSmsWindow")) IDnowSDK.setTransparentBackgroundModalSmsWindow(
            appearance.getBoolean("transparentBackgroundModalSmsWindow")
        )
        if (appearance.hasKey("whiteAgentThumbnailBackground")) IDnowSDK.setWhiteAgentThumbnailBackground(
            appearance.getBoolean("whiteAgentThumbnailBackground")
        )
        IDnowSDK.setPhoneNo(settings.getString("phoneNo"))
        if (settings.hasKey("showDialogsWithIcon")) IDnowSDK.setShowDialogsWithIcon(
            settings.getBoolean("showDialogsWithIcon")
        )
        IDnowSDK.setFirebaseToken(settings.getString("firebaseToken"))
        if (settings.hasKey("showRatingDialog")) IDnowSDK.setShowRatingDialog(settings.getBoolean("showRatingDialog"))
        if (settings.hasKey("forcedWaitingList")) IDnowSDK.setForcedWaitingList(
            settings.getBoolean("forcedWaitingList")
        )
        if (settings.hasKey("startCallIssued")) instance.isStartCallIssued =
            settings.getBoolean("startCallIssued")
        if (settings.hasKey("overrideEntryActivity")) IDnowSDK.setOverrideEntryActivity(
            settings.getBoolean("overrideEntryActivity")
        )
        if (settings.hasKey("appGoogleRating")) IDnowSDK.setApp_GoogleRating(settings.getBoolean("appGoogleRating"))
        if (appearance.hasKey("newBranding")) IDnowSDK.setNewBrand(appearance.getBoolean("newBranding"))

        // -----------------------------------------------------------------------------------
        //									Custom server
        // -----------------------------------------------------------------------------------
        IDnowSDK.setApiHost(settings.getString("apiHost"), reactApplicationContext)
        IDnowSDK.setWebHost(settings.getString("webHost"), reactApplicationContext)
        IDnowSDK.setWebsocketHost(settings.getString("websocketHost"), reactApplicationContext)
        IDnowSDK.setVideoHost(settings.getString("videoHost"), reactApplicationContext)
        IDnowSDK.setStunHost(settings.getString("stunHost"), reactApplicationContext)
        if (settings.hasKey("stunPort")) IDnowSDK.setStunPort(
            settings.getInt("stunPort"),
            reactApplicationContext
        )
        return instance
    }

    private fun getEnvironment(environment: String?): IDnowSDK.Server? {
        val environmentMap = HashMap<String?, IDnowSDK.Server?>()

        // -----------------------------------------------------------------------------------
        //                                    Dev
        // -----------------------------------------------------------------------------------
        environmentMap["DEV"] = IDnowSDK.Server.DEV
        environmentMap["DEV_0"] = IDnowSDK.Server.DV0
        environmentMap["DEV_1"] = IDnowSDK.Server.DV1
        environmentMap["DEV_2"] = IDnowSDK.Server.DEV2
        environmentMap["DEV_3"] = IDnowSDK.Server.DV3
        environmentMap["DEV_4"] = IDnowSDK.Server.DV4
        environmentMap["DEV_5"] = IDnowSDK.Server.DV5
        environmentMap["DEV_6"] = null
        environmentMap["DEV_7"] = null
        environmentMap["DEV_8"] = null
        environmentMap["DEV_9"] = null

        // -----------------------------------------------------------------------------------
        //                                    Test
        // -----------------------------------------------------------------------------------
        environmentMap["TEST"] = IDnowSDK.Server.TEST
        environmentMap["TEST_1"] = IDnowSDK.Server.TEST1
        environmentMap["TEST_2"] = IDnowSDK.Server.TEST2
        environmentMap["TEST_3"] = IDnowSDK.Server.TEST3

        // -----------------------------------------------------------------------------------
        //                                    Staging
        // -----------------------------------------------------------------------------------
        environmentMap["STAGING_1"] = IDnowSDK.Server.SG1

        // -----------------------------------------------------------------------------------
        //                                    Live
        // -----------------------------------------------------------------------------------
        environmentMap["LIVE"] = IDnowSDK.Server.LIVE

        // -----------------------------------------------------------------------------------
        //                                    Intrum
        // -----------------------------------------------------------------------------------
        environmentMap["INTRUM"] = null
        environmentMap["INTRUM_TEST"] = null

        // -----------------------------------------------------------------------------------
        //                                    Other
        // -----------------------------------------------------------------------------------
        environmentMap["CUSTOM"] = IDnowSDK.Server.CUSTOM
        environmentMap["INT"] = IDnowSDK.Server.INT
        environmentMap["NOT_DEFINED"] = null

        return environmentMap[environment]
    }

    private fun getConnectionType(connectionType: String?): IDnowSDK.ConnectionType? {
        val connectionTypeMap = HashMap<String?, IDnowSDK.ConnectionType>()

        connectionTypeMap["WEBSOCKET"] = IDnowSDK.ConnectionType.WEBSOCKET
        connectionTypeMap["LONG_POLLING"] = IDnowSDK.ConnectionType.LONG_POLLING

        return connectionTypeMap[connectionType]
    }
}
