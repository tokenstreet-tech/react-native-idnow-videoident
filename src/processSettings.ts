import type { ColorValue, ProcessedColorValue } from 'react-native';
import { Image, processColor } from 'react-native';

import { ConnectionTypeEnum } from './model/enums/ConnectionTypeEnum';
import type { IIosColors } from './model/interfaces/ios/IIosColors';
import type { ISettings } from './model/interfaces/ISettings';

const defaultSettings: Omit<ISettings, 'transactionToken'> = {
    allowHttpConnections: false,
    allowInvalidCertificates: false,
    appGoogleRating: false,
    appearance: {
        newBranding: true,
    },
    calledFromIDnowApp: false,
    connectionType: ConnectionTypeEnum.WEBSOCKET,
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

    const titleBackgroundImage = settings.appearance?.titleBackgroundImage ?? {};
    const processedTitleBackgroundImage = Image.resolveAssetSource(titleBackgroundImage);

    return {
        ...defaultSettings,
        ...settings,
        /**
         * Android expects at this point that the appearance object is present.
         * It can be an empty object, but it should be present.
         */
        appearance: {
            ...defaultSettings.appearance,
            ...settings.appearance,
            colors: processedColors,
            // resolveAssetSource can be null
            // TODO: Create a Pull Request for it
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            titleBackgroundImage: processedTitleBackgroundImage ?? undefined,
        },
    };
};
