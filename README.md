# @tokenstreet/react-native-idnow-videoident

React Native IDnow VideoIdent bindings for the [iOS](https://github.com/idnow/de.idnow.ios) and [Android](https://github.com/idnow/de.idnow.android) SDK.

Many thanks to [Nuri](https://nuri.com/de/) for their work on the package [react-native-idnow](https://github.com/bitwala/react-native-idnow). The first draft was heavily inspired by it.
However, almost the entire code has been rewritten since then, so there are now many differences:

## Features

-   All configuration options of the SDK are possible from JavaScript (Except `customBackButtonItem`, `customCancelButton` & `customAgentView` for iOS)
-   Latest dependencies of the IDnow iOS and Android SDKs (Secured by Dependabot)
-   No need to manually include native files
-   Published as CommonJS & ESmodules, with type definitions
-   Strong type system (Not a single any)

## Installation

1. Install `@tokenstreet/react-native-idnow-videoident`:

    ```sh
    yarn add @tokenstreet/react-native-idnow-videoident
    ```

    or

    ```sh
    npm install @tokenstreet/react-native-idnow-videoident
    ```

### iOS

2. Add the following line to your iOS Podfile:

    ```ruby
    use_frameworks! linkage: :static
    ```

3. Install the iOS dependencies:

    ```sh
    pod install
    ```

4. Add the following properties to your `Info.plist`:

    ```xml
    <key>NSMicrophoneUsageDescription</key>
    <string>Allow microphone access for video identification</string>
    <key>NSCameraUsageDescription</key>
    <string>Allow camera access for video identification</string>
    ```

### Android

2. Add the IDnow maven url to your top-level `build.gradle`:

    ```gradle
    allprojects {
        repositories {
            ...
            maven { url "https://raw.githubusercontent.com/idnow/de.idnow.android/master" }
        }
    }
    ```

## Usage

```js
import { IDnowManager } from '@tokenstreet/react-native-idnow-videoident';

const { resultCode } = await IDnowManager.startVideoIdent({ transactionToken: 'TST-KJCXN' });
console.log(resultCode);
```

## Native SDKs

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
