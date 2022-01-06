import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
    `The package '@tokenstreet/react-native-idnow-videoident' doesn't seem to be linked. Make sure: \n\n${Platform.select(
        { ios: "- You have run 'pod install'\n", default: '' }
    )}- You rebuilt the app after installing the package\n` + `- You are not using Expo managed workflow\n`;

const ReactNativeIdnowVideoident = NativeModules.ReactNativeIdnowVideoident
    ? NativeModules.ReactNativeIdnowVideoident
    : new Proxy(
          {},
          {
              get() {
                  throw new Error(LINKING_ERROR);
              },
          }
      );

export async function multiply(a: number, b: number): Promise<number> {
    return ReactNativeIdnowVideoident.multiply(a, b);
}
