import type { IAndroidSettings } from './androidSettings/IAndroidSettings';
import type { IIosSettings } from './iosSettings/IIosSettings';

export interface ISettings extends IIosSettings, Omit<IAndroidSettings, 'connectionType' | 'environment'> {
    /**
     * iOS Docs:
     * A token that will be used for instantiating a photo or video identification.
     *
     * Android docs:
     * Set the transactionToken, for example from a TextField
     */
    transactionToken: string;
}
