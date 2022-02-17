import { Platform } from 'react-native';

export class UnsupportedPlatformError extends Error {
    private static readonly defaultMessage: string = `Platform ${Platform.OS} is not supported`;

    public constructor(message: string = UnsupportedPlatformError.defaultMessage) {
        super(message);
    }
}
