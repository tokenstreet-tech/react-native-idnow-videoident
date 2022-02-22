import type { ColorValue, ProcessedColorValue } from 'react-native';

import type { ConnectionTypeEnum } from '../enums/ConnectionTypeEnum';
import type { EnvironmentEnum } from '../enums/EnvironmentEnum';
import type { IAndroidSettings } from './android/IAndroidSettings';
import type { IAppearance } from './IAppearance';
import type { IIosSettings } from './ios/IIosSettings';

/**
 * The complete documentation of the interfaces is copied directly from the READMEs or the header files
 * of the respective repositories
 * https://github.com/idnow/de.idnow.ios
 * https://github.com/idnow/de.idnow.android
 */
export interface ISettings<TColor extends ColorValue | ProcessedColorValue = ColorValue>
    extends IIosSettings,
        IAndroidSettings {
    // -----------------------------------------------------------------------------------
    //									Basic Properties
    // -----------------------------------------------------------------------------------

    /**
     * iOS README:
     * A token that will be used for instantiating a photo or video identification.
     *
     * Android README:
     * Set the transactionToken, for example from a TextField
     */
    transactionToken: string;

    // -----------------------------------------------------------------------------------
    //									Server Properties (optional)
    // -----------------------------------------------------------------------------------
    /**
     * iOS header file:
     * Optional: The environment that should be used for the identification (DEV, TEST, LIVE, Custom)
     * The default value is `IDnowEnvironmentNotDefined`.
     * Then the used environment is based on the prefix of the transaction token
     * (DEV -> DEV, TST -> Test, TS1 -> Test1, TS2 -> Test2, TS3 -> Test3, else -> Live).
     * You can use the special IDnowEnvironmentCustom to define a custom IDnow installation.
     * If this is done, you need to set the apiHost and websocketHost.
     *
     *
     * iOS README:
     * Optional: The environment that should be used for the identification (DEV, TEST, LIVE)
     * The default value is IDnowEnvironmentNotDefined.
     *
     * The used environment will then base on the prefix of the transaction token
     * (DEV -> DEV, TST -> Test, else -> Live)
     *
     * You can use the special IDnowEnvironmentCustom to define a custom IDnow installation.
     * If this is done, you need to set the apiHost and websocketHost.
     *
     * Android README:
     * Optionally set against which environment the app has to test.
     * Possibilities are DEV, TEST, LIVE, with LIVE being the default.
     *
     * You can force one of the environments to use. Default is to determine this by the token used.
     */
    environment?: EnvironmentEnum;

    /**
     * iOS header file:
     * The connection type to use to talk the backend
     *
     * iOS README:
     * The connection type to use to talk the backend. (Websocket (default) or long polling)
     *
     * Android README:
     * You can set the connection type to use: websockets.
     */
    connectionType?: ConnectionTypeEnum;

    // -----------------------------------------------------------------------------------
    //									Appearance
    // -----------------------------------------------------------------------------------
    /**
     * Appearance
     */
    appearance?: IAppearance<TColor>;
}
