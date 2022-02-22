import type { ColorValue, ProcessedColorValue } from 'react-native';

import type { IAndroidColors } from './android/IAndroidColors';
import type { IIosColors } from './ios/IIosColors';

export interface IColors<TColor extends ColorValue | ProcessedColorValue>
    extends IIosColors<TColor>,
        IAndroidColors<TColor> {}
