import type { AndroidConnectionTypeEnum } from './enums/AndroidConnectionTypeEnum';
import type { AndroidEnvironmentEnum } from './enums/AndroidEnvironmentEnum';
import type { AndroidLanguageEnum } from './enums/AndroidLanguageEnum';

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

    /**
     * README:
     * Initialize with your activity which will handle the SDK callback and pass the id of your company.
     * IDnowSDK is a singleton class, so just call it with IDnowSDK.getInstance()
     */
    companyId?: string;

    nameForActionBar?: string;

    /**
     * README:
     * Set the custom certificate provider
     */
    certificateProvider?: any;

    /**
     * README:
     * You can set the connection type to use: websockets.
     */
    connectionType?: AndroidConnectionTypeEnum;

    calledFromIDnowApp?: boolean;

    /**
     * README:
     * Optionally set against which environment the app has to test.
     * Possibilities are DEV, TEST, LIVE, with LIVE being the default.
     *
     * You can force one of the environments to use. Default is to determine this by the token used.
     */
    environment?: AndroidEnvironmentEnum;

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

    checkScreenActivity?: any;

    showDialogsWithIcon?: boolean;

    firebaseToken?: string;

    showRatingDialog?: boolean;

    forcedWaitingList?: boolean;

    startCallIssued?: boolean;

    callingActivity?: any;

    overrideEntryActivity?: boolean;

    appGoogleRating?: boolean;

    /**
     * You can set the new branding
     */
    newBrand?: boolean;

    // -----------------------------------------------------------------------------------
    //									Custom server
    // -----------------------------------------------------------------------------------
    /**
     * You can set to use your own servers. When this setting is enabled, apiHost, webHost and websocketHost must also be set.
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
