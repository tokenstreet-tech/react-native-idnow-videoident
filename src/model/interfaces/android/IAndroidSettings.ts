import type { AndroidLanguageEnum } from '../../enums/android/AndroidLanguageEnum';

export interface IAndroidSettings {
    language?: AndroidLanguageEnum;

    locale?: AndroidLanguageEnum;

    newLocale?: AndroidLanguageEnum;

    /**
     * README:
     * You can disable logging of the SDK by using
     */
    disableLogging?: boolean;

    /**
     * README:
     * You can decide whether to let the user confirm the legal points.
     */
    showVideoOverviewCheck?: boolean;

    callFromHighCallVolumeActivity?: boolean;

    /**
     * README:
     * Same goes to the success screen. If none is shown, the app sends the results right back.
     * The defaults for the both parameters are "true";
     */
    showErrorSuccessScreen?: boolean;

    nameForActionBar?: string;

    /**
     * Deprecated: Supported by the SDK version 3.22.1 or before
     *
     * README:
     * Set the custom certificate provider
     */
    // certificateProvider?: any;

    calledFromIDnowApp?: boolean;

    allowInvalidCertificates?: boolean;

    allowHttpConnections?: boolean;

    checkScreenLinesLong?: boolean;

    checkBoxOrientationRight?: boolean;

    checkScreenBoxPhoneNumberRequired?: boolean;

    checkScreenBoxDocumentRequired?: boolean;

    checkScreenBoxEMailRequired?: boolean;

    checkScreenBoxConsentRequired?: boolean;

    customiseCallQualityCheckScreen?: boolean;

    showTokenDuringCheckScreen?: boolean;

    squareCheckboxForm?: boolean;

    agbInOneLine?: boolean;

    checkboxesOrientationTop?: boolean;

    doNotShowCompanyImageInResultActivity?: boolean;

    headerBolded?: boolean;

    fullSizeModalSmsWindow?: boolean;

    transparentBackgroundModalSmsWindow?: boolean;

    whiteAgentThumbnailBackground?: boolean;

    phoneNo?: string;

    /**
     * Not implemented
     */
    // checkScreenActivity?: any;

    showDialogsWithIcon?: boolean;

    firebaseToken?: string;

    showRatingDialog?: boolean;

    forcedWaitingList?: boolean;

    startCallIssued?: boolean;

    /**
     * Not implemented
     */
    // callingActivity?: any;

    overrideEntryActivity?: boolean;

    appGoogleRating?: boolean;

    // -----------------------------------------------------------------------------------
    //									Custom server
    // -----------------------------------------------------------------------------------
    /**
     * You can set to use your own servers.
     * When this setting is enabled, apiHost, webHost and websocketHost must also be set.
     *
     * Environment must be set to EnvironmentEnum.CUSTOM
     * IDnowSDK.setEnvironment(IDnowSDK.Server.CUSTOM);
     */

    /**
     * README:
     * @example https://api.yourserver.com
     */
    apiHost?: string;

    /**
     * README:
     * @example https://www.yourserver.com
     */
    webHost?: string;

    /**
     * README:
     * @example https://websocket.yourserver.com
     */
    websocketHost?: string;

    /**
     * README:
     * @example https://video.yourserver.com
     */
    videoHost?: string;

    /**
     * README:
     * @example video.yourserver.com
     */
    stunHost?: string;

    /**
     * README:
     * @example 3478
     */
    stunPort?: number;
}
