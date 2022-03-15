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

    callFromHighCallVolumeActivity?: boolean;

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

    checkScreenBoxPhoneNumberRequired?: boolean;

    checkScreenBoxDocumentRequired?: boolean;

    checkScreenBoxEMailRequired?: boolean;

    checkScreenBoxConsentRequired?: boolean;

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
