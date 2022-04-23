import type { ProcessedColorValue } from 'react-native';

import type { ResultCodeEnum } from '../enums/ResultCodeEnum';
import type { ISettings } from './ISettings';

export interface IIdentificationResult {
    resultCode: ResultCodeEnum;
}
export interface IIdentificationErrorResult extends IIdentificationResult {
    errorMessage?: string;
}

export interface IReactNativeIdnowVideoidentNativeModule {
    startVideoIdent: (
        settings: ISettings<ProcessedColorValue>,
        errorCallback: (identificationErrorResult: IIdentificationErrorResult) => void,
        successCallback: (identificationResult: IIdentificationResult) => void
    ) => void;
}

export interface INativeModules {
    ReactNativeIdnowVideoident?: IReactNativeIdnowVideoidentNativeModule;
}
