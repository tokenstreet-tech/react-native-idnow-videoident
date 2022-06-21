import { NativeModules, Platform } from 'react-native';

import type { IIdentificationResult } from './model/common';
import { LinkingError } from './model/errors/LinkingError';
import { UnsupportedPlatformError } from './model/errors/UnsupportedPlatformError';
import type { ICallbacks } from './model/interfaces/ICallbacks';
import type { INativeModules, IReactNativeIdnowVideoidentNativeModule } from './model/interfaces/INativeModules';
import type { ISettings } from './model/interfaces/ISettings';
import { processSettings } from './processSettings';

export const IDnowManager = {
    /**
     * Start the video ident process
     * @param settings
     * @param onSuccess
     * @param onError
     */
    startVideoIdent: async (
        settings: ISettings,
        { onSuccess, onError }: ICallbacks = {}
    ): Promise<IIdentificationResult> => {
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
                    nativeClient.startVideoIdent(
                        processSettings(settings),
                        (result) => {
                            if (onSuccess) onSuccess(result);
                            resolve(result);
                        },
                        (errorResult) => {
                            if (onError) onError(errorResult);
                            reject(errorResult);
                        }
                    );
                });
            default:
                throw new UnsupportedPlatformError();
        }
    },
};
