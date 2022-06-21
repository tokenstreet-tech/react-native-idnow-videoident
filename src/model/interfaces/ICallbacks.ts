import type { TOnError, TOnSuccess } from '../common';

export interface ICallbacks {
    onSuccess?: TOnSuccess;
    onError?: TOnError;
}
