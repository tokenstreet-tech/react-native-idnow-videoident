import type { IosUIModalPresentationStyleEnum } from '../../enums/ios/IosUIModalPresentationStyleEnum';

/**
 * The settings that should be used for the identification process provided by IDnow.
 */
export interface IIosSettings {
    // -----------------------------------------------------------------------------------
    //									Basic Properties
    // -----------------------------------------------------------------------------------
    /**
     * Header file:
     * The company id provided by IDnow.
     *
     * README:
     * Your company id provided by IDnow.
     */
    companyID?: string;

    // -----------------------------------------------------------------------------------
    //									Extended Properties (optional)
    // -----------------------------------------------------------------------------------
    /**
     * Header file:
     * If this is set to YES the ident token will be visible on the check screen page
     * as well. The default value of this property is `NO`.
     */
    showIdentTokenOnCheckScreen?: boolean;

    /**
     * Header file:
     * If set to `false`, the Error-Success-Screen provided by the SDK will not be shown.
     * The default value of this property is `true`.
     *
     * README:
     * Optional: If set to false, the Error-Success-Screen provided by the SDK will not be displayed.
     * The default value of this property is true.
     */
    showErrorSuccessScreen?: boolean;

    /**
     * Header file:
     * If set to `false`, the video overview check screen will not be shown before starting a video identification.
     * The default value of this property is `true`.
     *
     * README:
     * Optional: If set to false, the video overview check screen will not be shown before starting a video identification.
     * The default value of this property is true.
     */
    showVideoOverviewCheck?: boolean;

    /**
     * Header file:
     * If set to `true`, the UI for the identification will always be displayed modal.
     * By default the value of this property is `false` and the identification UI
     * will be pushed on an existing navigation controller if possible.
     *
     * README:
     * Optional: If set to true, the UI for the identification will always be displayed modal.
     * By default, the value of this property is false and the identification UI will be pushed on an existing navigation controller if possible.
     */
    forceModalPresentation?: boolean;

    /**
     * Header file:
     * If set to `YES`, a failed / canceled / finished identification will be forced to display the result screen.
     */
    forceErrorSuccessScreen?: boolean;

    /**
     * Header file:
     * Specifies the presentation style for the modal ident viewcontroller.
     * E.g. Can be set to `UIModalPresentationCurrentContext` to allow presenting ident view controller within a popover on an iPad.
     *
     * README:
     * Optional: Specifies the presentation style for the modal ident view controller.
     * E.g. Can be set to UIModalPresentationCurrentContext to allow presenting ident view controller within a popover on an iPad.
     */
    modalPresentationStyle?: IosUIModalPresentationStyleEnum;

    /**
     * Header file:
     * Sets a certificate provider for custom DTLS certificates used by the WebRTC connection.
     * The certificate provider can be used to provide a custom DTLS certificate (featureCertificate == YES) and/or to check the
     * SHA fingerprint of the server certificate (featureFingerprint == YES)
     */
    certificateProvider?: any;

    /**
     * Header file:
     * The device token is needed to uniquely identify the device. Its used to send push notifications.
     */
    pushDeviceToken?: string;

    /**
     * Header file:
     * If you use Sentry with your app, set sentryDSN to https://login:secret@<sentry-fqdn>/<project>
     */
    sentryDSN?: string;

    /**
     * Header file:
     * The name the resulting app should use in the UINavigation bar
     */
    productName?: string;

    /**
     * Header file:
     * If true the first api request will take the token instead of the companyid into account.
     */
    ignoreCompanyID?: boolean;

    /**
     * Header file:
     * The current logger instance that implement IDNLogClient interface.
     * Responsible for log events to a External logger
     */
    externalLogger?: any;

    /**
     * Header file:
     * Waiting screen
     * Paging time interval
     * 10s by default, equal with animated video duration
     */
    automaticPagingTimeInterval?: number;

    // -----------------------------------------------------------------------------------
    //                                    Localization
    // -----------------------------------------------------------------------------------
    /**
     * This sets the user interface language. Allowed values are: en (English), de (German), fr (French),
     * es (Spanish), it (Italian), pt (Portugese), et (Estonian), hr (Croatian), hu (Hungarian), ka (Georgian), ko(Korean), lt(Lithuanian), lv (Latvian), nl (Dutch), pl (Polish),  ru (Russian), zh (Chinese).
     */
    userInterfaceLanguage?: string;

    // -----------------------------------------------------------------------------------
    //									Server Properties (optional)
    // -----------------------------------------------------------------------------------

    /**
     * Header file:
     * If set to `true`, the SDK will accept invalid (e.g. self signed certificates).
     * Please note that iOS might still reject the certs if you dont also set
     * NSAllowsArbitraryLoads in NSAppTransportSecurity and also NSTemporaryExceptionAllowsInsecureHTTPLoads
     * in NSExceptionDomains for your domains
     */
    allowInvalidCertificates?: boolean;

    /**
     * Header file:
     * The target server url for REST calls if custom server is used
     *
     * README:
     * The target server url for REST calls if custom server is used.
     */
    apiHost?: string;

    /**
     * Header file:
     * The target server url for websocket calls if custom server is used
     *
     * README:
     * The target server url for websocket calls if custom server is used.
     */
    websocketHost?: string;

    /**
     * Header file:
     * The target server url for video rest calls if custom server is used
     */
    videoHost?: string;

    /**
     * Header file:
     * The target server for stun calls if custom server is used
     */
    stunHost?: string;

    /**
     * Header file:
     * The target port for stun calls if custom server is used
     */
    stunPort?: number;
}
