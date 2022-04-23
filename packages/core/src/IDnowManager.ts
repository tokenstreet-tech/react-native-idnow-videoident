import { NativeModules, Platform } from 'react-native';

import { LinkingError } from './model/errors/LinkingError';
import { UnsupportedPlatformError } from './model/errors/UnsupportedPlatformError';
import type {
    IIdentificationResult,
    INativeModules,
    IReactNativeIdnowVideoidentNativeModule,
} from './model/interfaces/INativeModules';
import type { ISettings } from './model/interfaces/ISettings';
import { processSettings } from './processSettings';

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
                    nativeClient.startVideoIdent(processSettings(settings), reject, resolve);
                });
            default:
                throw new UnsupportedPlatformError();
        }
    },
};
