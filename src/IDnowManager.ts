import { NativeModules, Platform } from 'react-native';

import { LinkingError } from './errors/LinkingError';
import { UnsupportedPlatformError } from './errors/UnsupportedPlatformError';
import type {
    IIdentificationResult,
    INativeModules,
    IReactNativeIdnowVideoidentNativeModule,
} from './interfaces/INativeModules';
import type { IIosSettings } from './interfaces/iosSettings/IIosSettings';
import { prepareSettings } from './prepareSettings';

export const IDnowManager = {
    /**
     * Start the video ident process
     * @param settings
     */
    startVideoIdent: async (settings: IIosSettings): Promise<IIdentificationResult> => {
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
                throw new UnsupportedPlatformError();
        }
    },
};
