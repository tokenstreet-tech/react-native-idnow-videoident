import type { IBranding } from './branding/IBranding';

/**
 * The settings that should be used for the identification process provided by IDnow.
 */
export interface ISettings {
    /**
     * A token that will be used for instantiating a photo or video identification.
     */
    transactionToken: string;

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
    environment?: any;

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
    modalPresentationStyle?: any;

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
    connectionType?: any;

    /**
     * Branding
     */
    branding?: IBranding;
}
