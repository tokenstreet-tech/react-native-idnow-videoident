import type { ColorValue, ProcessedColorValue } from 'react-native';

import type { IAndroidSettings } from './android/IAndroidSettings';
import type { ConnectionTypeEnum } from './enums/ConnectionTypeEnum';
import type { IIosSettings } from './ios/IIosSettings';

/**
 * The complete documentation of the interfaces is copied directly from the READMEs or the header files
 * of the respective repositories
 * https://github.com/idnow/de.idnow.ios
 * https://github.com/idnow/de.idnow.android
 */
export interface ISettings<TColor extends ColorValue | ProcessedColorValue = ColorValue>
    extends IIosSettings<TColor>,
        Omit<IAndroidSettings<TColor>, 'environment'> {
    // -----------------------------------------------------------------------------------
    //									Basic Properties
    // -----------------------------------------------------------------------------------

    /**
     * iOS Docs:
     * A token that will be used for instantiating a photo or video identification.
     *
     * Android docs:
     * Set the transactionToken, for example from a TextField
     */
    transactionToken: string;

    // -----------------------------------------------------------------------------------
    //									Server Properties (optional)
    // -----------------------------------------------------------------------------------
    /**
     * iOS Header file:
     * The connection type to use to talk the backend
     *
     * iOS README:
     * The connection type to use to talk the backend. (Websocket (default) or long polling)
     *
     * Android README:
     * You can set the connection type to use: websockets.
     */
    connectionType?: ConnectionTypeEnum;
}
