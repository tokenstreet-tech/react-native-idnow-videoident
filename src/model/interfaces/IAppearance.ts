import type { ColorValue, ProcessedColorValue } from 'react-native';

import type { IColors } from './IColors';
import type { IIosAppearance } from './ios/IIosAppearance';

export interface IAppearance<TColor extends ColorValue | ProcessedColorValue> extends IIosAppearance {
    // -----------------------------------------------------------------------------------
    //									Colors
    // -----------------------------------------------------------------------------------
    colors?: IColors<TColor>;
}
