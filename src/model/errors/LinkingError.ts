import { Platform } from 'react-native';

export class LinkingError extends Error {
    private static readonly defaultMessage: string = `The package '@tokenstreet/react-native-idnow-videoident' doesn't seem to be linked. Make sure: \n\n${Platform.select(
        { default: '', ios: "- You have run 'pod install'\n" },
    )}- You rebuilt the app after installing the package\n- You are not using Expo managed workflow\n`;

    public constructor(message: string = LinkingError.defaultMessage) {
        super(message);
    }
}
