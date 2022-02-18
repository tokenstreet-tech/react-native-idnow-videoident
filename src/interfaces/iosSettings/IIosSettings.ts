import type { IIosAppearance } from './iosAppearance/IIosAppearance';

enum IosEnvironmentEnum {
    IDnowEnvironmentNotDefined = 'IDnowEnvironmentNotDefined',
    IDnowEnvironmentDev = 'IDnowEnvironmentDev',
    IDnowEnvironmentDev0 = 'IDnowEnvironmentDev0',
    IDnowEnvironmentDev1 = 'IDnowEnvironmentDev1',
    IDnowEnvironmentDev2 = 'IDnowEnvironmentDev2',
    IDnowEnvironmentDev3 = 'IDnowEnvironmentDev3',
    IDnowEnvironmentDev4 = 'IDnowEnvironmentDev4',
    IDnowEnvironmentDev5 = 'IDnowEnvironmentDev5',
    IDnowEnvironmentTest = 'IDnowEnvironmentTest',
    IDnowEnvironmentTest1 = 'IDnowEnvironmentTest1',
    IDnowEnvironmentTest2 = 'IDnowEnvironmentTest2',
    IDnowEnvironmentTest3 = 'IDnowEnvironmentTest3',
    IDnowEnvironmentLive = 'IDnowEnvironmentLive',
    IDnowEnvironmentIntrum = 'IDnowEnvironmentIntrum',
    IDnowEnvironmentIntrumTest = 'IDnowEnvironmentIntrumTest',
    IDnowEnvironmentCustom = 'IDnowEnvironmentCustom',
}

enum UIModalPresentationStyleEnum {
    UIModalPresentationPageSheet = 'UIModalPresentationPageSheet',
    UIModalPresentationFormSheet = 'UIModalPresentationFormSheet',
    UIModalPresentationCurrentContext = 'UIModalPresentationCurrentContext',
    UIModalPresentationCustom = 'UIModalPresentationCustom',
    UIModalPresentationOverFullScreen = 'UIModalPresentationOverFullScreen',
    UIModalPresentationOverCurrentContext = 'UIModalPresentationOverCurrentContext',
    UIModalPresentationPopover = 'UIModalPresentationPopover',
    UIModalPresentationBlurOverFullScreen = 'UIModalPresentationBlurOverFullScreen',
    UIModalPresentationNone = 'UIModalPresentationNone',
    UIModalPresentationAutomatic = 'UIModalPresentationAutomatic',
}

/**
 *  The type of connection used to get events from the backend
 */
enum IDnowConnectionTypeEnum {
    /**
     * Use websockets using SocketRocket (default)
     */
    IDnowConnectionTypeWebsocket = 'IDnowConnectionTypeWebsocket',
    /**
     * IDnowConnectionTypeLongPolling
     */
    IDnowConnectionTypeLongPolling = 'IDnowConnectionTypeLongPolling',
}

/**
 * The settings that should be used for the identification process provided by IDnow.
 */
export interface IIosSettings {
    /**
     * Your company id provided by IDnow.
     */
    companyID?: string;

    /**
     * Not documented property.
     * The default value of this property is true.
     */
    ignoreCompanyID?: boolean;

    /**
     * Optional: The environment that should be used for the identification (DEV, TEST, LIVE)
     * The default value is IDnowEnvironmentNotDefined.
     *
     * The used environment will then base on the prefix of the transaction token
     * (DEV -> DEV, TST -> Test, else -> Live)
     *
     * You can use the special IDnowEnvironmentCustom to define a custom IDnow installation.
     * If this is done, you need to set the apiHost and websocketHost.
     */
    environment?: IosEnvironmentEnum;

    /**
     * Optional: If set to false, the Error-Success-Screen provided by the SDK will not be displayed.
     * The default value of this property is true.
     */
    showErrorSuccessScreen?: boolean;

    /**
     * Optional: If set to false, the video overview check screen will not be shown before starting a video identification.
     * The default value of this property is true.
     */
    showVideoOverviewCheck?: boolean;

    /**
     * Optional: If set to true, the UI for the identification will always be displayed modal.
     * By default, the value of this property is false and the identification UI will be pushed on an existing navigation controller if possible.
     */
    forceModalPresentation?: boolean;

    /**
     * Optional: Specifies the presentation style for the modal ident view controller.
     * E.g. Can be set to UIModalPresentationCurrentContext to allow presenting ident view controller within a popover on an iPad.
     */
    modalPresentationStyle?: UIModalPresentationStyleEnum;

    /**
     * The target server url for REST calls if custom server is used.
     */
    apiHost?: string;

    /**
     * The target server url for websocket calls if custom server is used.
     */
    websocketHost?: string;

    /**
     * The connection type to use to talk the backend. (Websocket (default) or long polling)
     */
    connectionType?: IDnowConnectionTypeEnum;

    /**
     * Appearance
     */
    appearance?: IIosAppearance;
}
