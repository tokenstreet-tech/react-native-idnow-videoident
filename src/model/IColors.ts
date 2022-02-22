import type { ColorValue, ProcessedColorValue } from 'react-native';

import type { IAndroidVideoIdentColors } from './android/IAndroidVideoIdentColors';
import type { IAndroidVideoIdentPlusColors } from './android/IAndroidVideoIdentPlusColors';
import type { IIosColors } from './ios/IIosColors';

interface IVideoIdentColors<TColor extends ColorValue | ProcessedColorValue>
    extends IIosColors<TColor>,
        IAndroidVideoIdentColors<TColor> {}

interface IVideoIdentPlusColors<TColor extends ColorValue | ProcessedColorValue>
    extends IIosColors<TColor>,
        IAndroidVideoIdentPlusColors<TColor> {}

export type IColors<TColor extends ColorValue | ProcessedColorValue> =
    | IVideoIdentColors<TColor>
    | IVideoIdentPlusColors<TColor>;
