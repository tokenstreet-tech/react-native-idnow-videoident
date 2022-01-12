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
        settings: any,
        errorCallback: (identificationErrorResult: IIdentificationErrorResult) => void,
        successCallback: (identificationResult: IIdentificationResult) => void
    ) => any;
}

export interface INativeModules {
    ReactNativeIdnowVideoident?: IReactNativeIdnowVideoidentNativeModule;
}
