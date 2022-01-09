import { NativeModules, Platform, processColor } from 'react-native';

import type { ISettings } from './interfaces/ISettings';

export const defaultOptions: ISettings = {
    companyID: '',
    showVideoOverviewCheck: true,
    showErrorSuccessScreen: false,
    transactionToken: 'TST-XXXXX',
    // ignoreCompanyID: true,
    // showIdentTokenOnCheckScreen: false,
    forceModalPresentation: false,
    // environment: 'LIVE', no need to force to use a specific env; Default is to determine this by the token used
    // apiHost: null,
    // webHost: null,
    // websocketHost: null,
    // videoHost: null,
    // stunHost: null,
    // stunPort: null,

    branding: {
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

const prepareOptions = (options: ISettings) => {
    // TODO refactor
    const appearanceOptions = {
        ...defaultOptions.branding,
        ...options.branding,
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

export const IDnowManager = {
    /**
     * Note: Promise will not resolve if the result is ABORTED
     * @param options
     * @param onSuccess
     * @param onError
     */
    startVideoIdent: async (
        options: ISettings,
        onSuccess?: () => Promise<void> | void,
        onError?: (error: any) => Promise<void> | void
    ): Promise<boolean | undefined> => {
        const nativeClient = NativeModules.ReactNativeIdnowVideoident
            ? NativeModules.ReactNativeIdnowVideoident
            : new Proxy(
                  {},
                  {
                      get() {
                          throw new Error(LINKING_ERROR);
                      },
                  }
              );
        if (Platform.OS === 'ios') {
            return new Promise((resolve, reject) => {
                nativeClient.startVideoIdent(
                    prepareOptions(options),
                    async (err?: { success: boolean; message?: any; canceledByUser: boolean }, resp?: any) => {
                        if (resp?.success) {
                            if (onSuccess) {
                                await onSuccess();
                            }
                            resolve(resp);
                        }
                        const errorMessage =
                            typeof err?.message === 'string' ? err.message : JSON.stringify(err?.message);
                        if (onError) {
                            await onError(errorMessage);
                        }
                        reject(err ?? new Error('Internal error'));
                    }
                );
            });
        } else if (Platform.OS === 'android') {
            return nativeClient.startVideoIdent(prepareOptions(options));
        }
        return undefined;
    },
};
