import type { IAndroidCustomServer } from './IAndroidCustomServer';
import type { IAndroidDesignConfiguration } from './IAndroidDesignConfiguration';

enum AndroidEnvironmentEnum {
    DEV = 'DEV',
    TEST = 'TEST',
    LIVE = 'LIVE',
    CUSTOM = 'CUSTOM',
}

enum ConnectionTypeEnum {
    WEBSOCKET = 'WEBSOCKET',
}

export interface IAndroidSettings extends IAndroidCustomServer, IAndroidDesignConfiguration {
    /**
     * README:
     * Initialize with your activity which will handle the SDK callback and pass the id of your company.
     * IDnowSDK is a singleton class, so just call it with IDnowSDK.getInstance()
     */
    companyId?: string;

    /**
     * README:
     * You can decide whether to let the user confirm the legal points.
     */
    showVideoOverviewCheck?: boolean;

    /**
     * README:
     * Same goes to the success screen. If none is shown, the app sends the results right back.
     * The defaults for the both parameters are "true";
     */
    showErrorSuccessScreen?: boolean;

    /**
     * README:
     * Optionally set against which environment the app has to test.
     * Possibilities are DEV, TEST, LIVE, with LIVE being the default.
     *
     * You can force one of the environments to use. Default is to determine this by the token used.
     */
    environment?: AndroidEnvironmentEnum;

    /**
     * README:
     * Set the custom certificate provider
     */
    certificateProvider?: any;

    /**
     * README:
     * You can set the connection type to use: websockets.
     */
    connectionType?: ConnectionTypeEnum;

    /**
     * README:
     * You can disable logging of the SDK by using
     */
    disableLogging?: boolean;

    /**
     * You can set the new branding
     */
    newBrand?: boolean;
}
