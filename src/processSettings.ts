import type { ColorValue, ProcessedColorValue } from 'react-native';
import { processColor } from 'react-native';

import type { IIosAppearance } from './interfaces/iosSettings/IosAppearance';
import type { ISettings } from './interfaces/ISettings';

const defaultSettings: Omit<ISettings, 'transactionToken'> = {
    ignoreCompanyID: true,
};

/**
 * Enriches the settings with the default values and processes all color values
 * @param settings
 */
export const processSettings = (settings: ISettings): ISettings<ProcessedColorValue> => {
    const { appearance = {} } = settings;

    const processedColors: IIosAppearance<ProcessedColorValue> = {};
    Object.keys(appearance).forEach((key) => {
        const colorKey = key as keyof IIosAppearance<ColorValue>;
        const processedColor = processColor(appearance[colorKey]);
        processedColors[colorKey] = processedColor === null ? undefined : processedColor;
    });

    return {
        ...defaultSettings,
        ...settings,
        appearance: processedColors,
    };
};
