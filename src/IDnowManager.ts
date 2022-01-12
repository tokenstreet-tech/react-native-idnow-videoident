import { NativeModules, Platform } from 'react-native';

import type {
    IIdentificationResult,
    INativeModules,
    IReactNativeIdnowVideoidentNativeModule,
} from './interfaces/INativeModules';
import type { ISettings } from './interfaces/ISettings';
import { prepareSettings } from './prepareSettings';

const LINKING_ERROR =
    `The package '@tokenstreet/react-native-idnow-videoident' doesn't seem to be linked. Make sure: \n\n${Platform.select(
        { ios: "- You have run 'pod install'\n", default: '' }
    )}- You rebuilt the app after installing the package\n` + `- You are not using Expo managed workflow\n`;

export const IDnowManager = {
    /**
     * Note: Promise will not resolve if the result is ABORTED
     * @param settings
     */
    startVideoIdent: async (settings: ISettings): Promise<IIdentificationResult> => {
        const nativeClient: IReactNativeIdnowVideoidentNativeModule = (NativeModules as INativeModules)
            .ReactNativeIdnowVideoident
            ? NativeModules.ReactNativeIdnowVideoident
            : new Proxy(
                  {},
                  {
                      get() {
                          throw new Error(LINKING_ERROR);
                      },
                  }
              );

        switch (Platform.OS) {
            case 'android':
            case 'ios':
                return new Promise<IIdentificationResult>((resolve, reject) => {
                    nativeClient.startVideoIdent(prepareSettings(settings), reject, resolve);
                });
            default:
                throw new Error(`Platform ${Platform.OS} is not supported`);
        }
    },
};
