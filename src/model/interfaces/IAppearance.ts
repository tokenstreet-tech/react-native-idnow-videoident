import type { ColorValue, ProcessedColorValue } from 'react-native';

import type { IColors } from './IColors';
import type { IIosAppearance } from './ios/IIosAppearance';

export interface IAppearance<TColor extends ColorValue | ProcessedColorValue> extends IIosAppearance {
    /**
     * iOS header file (usedNewBrand):
     * If set to `true`, the new IDNow branding will be used
     * By default the value of this property is `true`
     *
     * Android README (newBrand):
     * You can set the new branding
     */
    newBranding?: boolean;

    // -----------------------------------------------------------------------------------
    //									Colors
    // -----------------------------------------------------------------------------------
    colors?: IColors<TColor>;
}
