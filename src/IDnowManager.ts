import { NativeModules, Platform } from 'react-native';

import { LinkingError } from './errors/LinkingError';
import type {
    IIdentificationResult,
    INativeModules,
    IReactNativeIdnowVideoidentNativeModule,
} from './interfaces/INativeModules';
import type { ISettings } from './interfaces/ISettings';
import { prepareSettings } from './prepareSettings';

export const IDnowManager = {
    /**
     * Start the video ident process
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
                          throw new LinkingError();
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
