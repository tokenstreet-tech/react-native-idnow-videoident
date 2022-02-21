import type { ColorValue, ProcessedColorValue } from 'react-native';
import { processColor } from 'react-native';

import type { IIosColors } from './interfaces/iosSettings/IIosColors';
import type { ISettings } from './interfaces/ISettings';

export const processSettings = (settings: ISettings): ISettings<ProcessedColorValue> => {
    const { colors = {} } = settings;

    const processedColors: IIosColors<ProcessedColorValue> = {};
    Object.keys(colors).forEach((key) => {
        const colorKey = key as keyof IIosColors<ColorValue>;
        const processedColor = processColor(colors[colorKey]);
        processedColors[colorKey] = processedColor === null ? undefined : processedColor;
    });

    return {
        ...settings,
        colors: processedColors,
    };
};
