import type { ProcessedColorValue } from 'react-native';

import type { TOnError, TOnSuccess } from '../common';
import type { ISettings } from './ISettings';

export interface IReactNativeIdnowVideoidentNativeModule {
    startVideoIdent: (settings: ISettings<ProcessedColorValue>, onSuccess: TOnSuccess, onError: TOnError) => void;
}

export interface INativeModules {
    ReactNativeIdnowVideoident?: IReactNativeIdnowVideoidentNativeModule;
}
