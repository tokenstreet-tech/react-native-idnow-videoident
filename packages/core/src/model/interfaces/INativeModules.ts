import type { ISettings } from '@tokenstreet/react-native-idnow-videoident';
import type { ProcessedColorValue } from 'react-native';

import type { ResultCodeEnum } from '../enums/ResultCodeEnum';

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
