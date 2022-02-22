import type { ColorValue, ProcessedColorValue } from 'react-native';
import { processColor } from 'react-native';

import type { IAndroidDesignConfiguration } from './model/androidSettings/IAndroidDesignConfiguration';
import type { IIosColors } from './model/iosSettings/IIosColors';
import type { ISettings } from './model/ISettings';

const defaultSettings: Omit<ISettings, 'transactionToken'> = {
    ignoreCompanyID: true,
};

/**
 * Enriches the settings with the default values and processes all color values
 * @param settings
 */
export const processSettings = (settings: ISettings): ISettings<ProcessedColorValue> => {
    const iosColors = settings.appearance?.colors ?? {};
    const processedIosColors: IIosColors<ProcessedColorValue> = {};
    Object.keys(iosColors).forEach((key) => {
        const colorKey = key as keyof IIosColors<ColorValue>;
        const processedColor = processColor(iosColors[colorKey]);
        processedIosColors[colorKey] = processedColor === null ? undefined : processedColor;
    });

    const androidColors = settings.designConfiguration?.colors ?? {};
    const processedAndroidColors: IAndroidDesignConfiguration<ProcessedColorValue>['colors'] = {};
    Object.keys(androidColors).forEach((key) => {
        const colorKey = key;
        const processedColor = processColor((androidColors as any)[colorKey]);
        (processedAndroidColors as any)[colorKey] = processedColor === null ? undefined : processedColor;
    });

    return {
        ...defaultSettings,
        ...settings,
        appearance: {
            ...settings.appearance,
            colors: processedIosColors,
        },
        designConfiguration: {
            ...settings.designConfiguration,
            colors: processedAndroidColors,
        },
    };
};
