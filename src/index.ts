import { NativeModules } from 'react-native';
import type { ISettings } from './interfaces/ISettings';

export const start = async (
    settings: ISettings,
    callback?: (params: { canceledByUser: boolean; message: string; success: boolean }) => void
): Promise<boolean> => {
    return NativeModules.IdnowVideoident.start(settings, callback);
};
export default start;
