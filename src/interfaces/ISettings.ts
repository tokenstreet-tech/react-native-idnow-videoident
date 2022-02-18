import type { IAndroidSettings } from './androidSettings/IAndroidSettings';
import type { IIosSettings } from './iosSettings/IIosSettings';

/**
 * The complete documentation of the interfaces is copied directly from the READMEs of the respective repositories
 * https://github.com/idnow/de.idnow.ios
 * https://github.com/idnow/de.idnow.android
 */
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
