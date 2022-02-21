import type { ColorValue, ProcessedColorValue } from 'react-native';
import { processColor } from 'react-native';

import type { IIosColors } from './interfaces/iosSettings/IIosColors';
import type { ISettings } from './interfaces/ISettings';

const defaultSettings: Omit<ISettings, 'transactionToken'> = {
    ignoreCompanyID: true,
};

/**
 * Enriches the settings with the default values and processes all color values
 * @param settings
 */
export const processSettings = (settings: ISettings): ISettings<ProcessedColorValue> => {
    const colors = settings.appearance?.colors ?? {};

    const processedColors: IIosColors<ProcessedColorValue> = {};
    Object.keys(colors).forEach((key) => {
        const colorKey = key as keyof IIosColors<ColorValue>;
        const processedColor = processColor(colors[colorKey]);
        processedColors[colorKey] = processedColor === null ? undefined : processedColor;
    });

    return {
        ...defaultSettings,
        ...settings,
        appearance: {
            ...settings.appearance,
            colors: processedColors,
        },
    };
};
