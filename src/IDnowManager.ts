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

const LINKING_ERROR =
    `The package '@tokenstreet/react-native-idnow-videoident' doesn't seem to be linked. Make sure: \n\n${Platform.select(
        { ios: "- You have run 'pod install'\n", default: '' }
    )}- You rebuilt the app after installing the package\n` + `- You are not using Expo managed workflow\n`;

const reactNativeIdnowVideoident = async (): Promise<any> => {
    if (Platform.OS === 'ios') {
        return NativeModules.IDnowViewManager
            ? NativeModules.IDnowViewManager
            : new Proxy(
                  {},
                  {
                      get() {
                          throw new Error(LINKING_ERROR);
                      },
                  }
              );
    } else if (Platform.OS === 'android') {
        return NativeModules.ReactNativeIdnowVideoident
            ? NativeModules.ReactNativeIdnowVideoident
            : new Proxy(
                  {},
                  {
                      get() {
                          throw new Error(LINKING_ERROR);
                      },
                  }
              );
    }
};

export const IDnowManager = {
    startVideoIdent: async (options: IOptions): Promise<any> => {
        const nativeClient = await reactNativeIdnowVideoident();
        if (Platform.OS === 'ios') {
            return new Promise((resolve, reject) => {
                nativeClient.startVideoIdent(prepareOptions(options), (...args: Array<any>) => {
                    const [err, resp] = args;
                    if (resp && resp.success) {
                        resolve(resp);
                    }
                    reject(err || new Error('Internal error'));
                });
            });
        } else if (Platform.OS === 'android') {
            return nativeClient.startVideoIdent(prepareOptions(options));
        }
    },
};
