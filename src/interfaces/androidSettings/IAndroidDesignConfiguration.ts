import type { ColorValue, ProcessedColorValue } from 'react-native';

import type { IAndroidColors } from './IAndroidColors';
import type { IAndroidVideoIdentPlusColors } from './IAndroidVideoIdentPlusColors';

export interface IAndroidDesignConfiguration<TColor extends ColorValue | ProcessedColorValue> {
    colors?: IAndroidColors<TColor> | IAndroidVideoIdentPlusColors<TColor>;
}
