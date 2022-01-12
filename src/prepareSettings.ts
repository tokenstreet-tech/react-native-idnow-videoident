import { processColor } from 'react-native';

import type { ISettings } from './interfaces/ISettings';

const defaultSettings: ISettings = {
    companyID: '',
    showVideoOverviewCheck: true,
    showErrorSuccessScreen: false,
    transactionToken: 'TST-XXXXX',
    ignoreCompanyID: true,
    // showIdentTokenOnCheckScreen: false,

    forceModalPresentation: false,
    // environment: 'LIVE', no need to force to use a specific env; Default is to determine this by the token used
    // apiHost: null,
    // webHost: null,
    // websocketHost: null,
    // videoHost: null,
    // stunHost: null,
    // stunPort: null,

    appearance: {
        // Adjust colors
        primaryBrandColor: '#1D4477', // primaryBlue
        successColor: '#1ABC9C', // successGreen
        failureColor: '#EE4555', // warningRed
        proceedButtonBackgroundColor: '#1D4477', // primaryBlue
        proceedButtonTextColor: '#FFFFFF', // whitestWhite
        photoIdentRetakeButtonBackgroundColor: '#1D4477', // primaryBlue
        photoIdentRetakeButtonTextColor: '#FFFFFF', // whitestWhite
        // defaultTextColor: '#000',
        // textFieldColor: 'grey',

        // Adjust statusbar
        enableStatusBarStyleLightContent: false,

        // Adjust fonts
        fontNameRegular: 'HelveticaNeue',
        fontNameLight: 'HelveticaNeue-Ligth',
        fontNameMedium: 'HelveticaNeue-Bold',
    },
};

export const prepareSettings = (options: ISettings) => {
    // TODO refactor
    const appearanceOptions = {
        ...defaultSettings.appearance,
        ...options.appearance,
    };
    return {
        ...defaultSettings,
        ...options,
        appearance: {
            ...appearanceOptions,
            defaultTextColor: processColor(appearanceOptions.defaultTextColor),
            primaryBrandColor: processColor(appearanceOptions.primaryBrandColor),
            proceedButtonBackgroundColor: processColor(appearanceOptions.proceedButtonBackgroundColor),
            proceedButtonTextColor: processColor(appearanceOptions.proceedButtonTextColor),
            photoIdentRetakeButtonBackgroundColor: processColor(
                appearanceOptions.photoIdentRetakeButtonBackgroundColor
            ),
            photoIdentRetakeButtonTextColor: processColor(appearanceOptions.photoIdentRetakeButtonTextColor),
            textFieldColor: processColor(appearanceOptions.textFieldColor),
            failureColor: processColor(appearanceOptions.failureColor),
            successColor: processColor(appearanceOptions.successColor),
        },
    };
};
