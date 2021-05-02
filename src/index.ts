import { NativeModules } from 'react-native';
import type { ISettings } from './interfaces/ISettings';

export const init = async (
    settings: ISettings,
    callback: (params: { canceledByUser: boolean; message: string; success: boolean }) => void
): Promise<boolean> => {
    return NativeModules.IdnowVideoident.init(settings, callback);
};
export default init;
