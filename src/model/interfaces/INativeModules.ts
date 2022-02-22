import type { ISettings } from '@tokenstreet/react-native-idnow-videoident';
import type { ProcessedColorValue } from 'react-native';

enum ResultCodeEnum {
    SUCCESS = 'SUCCESS',
    CANCEL = 'CANCEL',
    FAILED = 'FAILED',
    INTERNAL_ERROR = 'INTERNAL_ERROR',
}

export interface IIdentificationResult {
    resultCode: ResultCodeEnum;
}
interface IIdentificationErrorResult extends IIdentificationResult {
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
