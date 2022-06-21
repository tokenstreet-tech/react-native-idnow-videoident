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
     * @param callbacks
     */
    startVideoIdent: async (settings: ISettings, callbacks?: ICallbacks): Promise<IIdentificationResult> => {
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
                            if (callbacks?.onSuccess) callbacks.onSuccess(result);
                            resolve(result);
                        },
                        (errorResult) => {
                            if (callbacks?.onError) callbacks.onError(errorResult);
                            reject(errorResult);
                        }
                    );
                });
            default:
                throw new UnsupportedPlatformError();
        }
    },
};
