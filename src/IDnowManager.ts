import { NativeModules, Platform, processColor } from 'react-native';

import type { IOptions } from './types/common';

export const defaultOptions: IOptions = {
    companyId: '',
    showVideoOverviewCheck: true,
    showErrorSuccessScreen: false,
    transactionToken: 'TST-XXXXX',
    ignoreCompanyID: true,
    showIdentTokenOnCheckScreen: false,
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

const prepareOptions = (options: IOptions) => {
    // TODO refactor
    const appearanceOptions = {
        ...defaultOptions.appearance,
        ...options.appearance,
    };
    return {
        ...defaultOptions,
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

export const IDnowManager = {
    startVideoIdent: async (options: IOptions): Promise<any> => {
        if (Platform.OS === 'ios') {
            return new Promise((resolve, reject) => {
                NativeModules.IDnowViewManager.startVideoIdent(prepareOptions(options), (...args: Array<any>) => {
                    const [err, resp] = args;
                    if (resp && resp.success) {
                        resolve(resp);
                    }
                    reject(err || new Error('Internal error'));
                });
            });
        } else if (Platform.OS === 'android') {
            return NativeModules.ReactNativeIdnowVideoident.startVideoIdent(prepareOptions(options));
        }
    },
};
