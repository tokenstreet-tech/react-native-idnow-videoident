import type { ResultCodeEnum } from '@tokenstreet/react-native-idnow-videoident';

export interface IIdentificationResult {
    resultCode: ResultCodeEnum;
}

export interface IIdentificationErrorResult extends IIdentificationResult {
    errorMessage?: string;
}

export type TOnError = (identificationErrorResult: IIdentificationErrorResult) => void;
export type TOnSuccess = (identificationResult: IIdentificationResult) => void;
