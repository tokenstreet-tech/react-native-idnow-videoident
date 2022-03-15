# @tokenstreet/react-native-idnow-videoident

React Native IDnow VideoIdent bindings for the [iOS](https://github.com/idnow/de.idnow.ios) and [Android](https://github.com/idnow/de.idnow.android) SDK.

Many thanks to [Nuri](https://nuri.com/) for their work on the package [react-native-idnow](https://github.com/bitwala/react-native-idnow). The first draft was heavily inspired by it.
However, almost the entire code has been rewritten since then, so there are now many differences:

## Features

-   All configuration options of the SDKs are possible from the JavaScript side (except `customBackButtonItem`, `customCancelButton` & `customAgentView` for iOS, and the [colors for Android](https://github.com/tokenstreet-tech/react-native-idnow-videoident/issues/139))
-   Latest dependencies of the IDnow [iOS](https://github.com/idnow/de.idnow.ios) and [Android](https://github.com/idnow/de.idnow.android) SDKs (secured by Dependabot)
-   No need to manually include native files
-   Published as CommonJS & ESmodules, with type definitions
-   Strong type system (not a single `any`)

## Requirements

### iOS

-   `Deployment Target`: iOS 8.0 or later

### Android

-   `minSdkVersion`: 21 (Android 5.0 Lollipop)
-   `targetSdkVersion`: 30 (Android 11.0 Red Velvet Cake)

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

3. Add the following permissions to your `AndroidManifest.xml` (click [here](https://github.com/idnow/de.idnow.android#androidmanifest) for more details):

    ```xml
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.FLASHLIGHT" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.BLUETOOTH"/>
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
    ```

4. Unfortunately, it is not yet possible to customise the colours for Android via JavaScript. To edit them, please follow the [official guide](https://github.com/idnow/de.idnow.android#colors).

## Usage

```js
import { IDnowManager } from '@tokenstreet/react-native-idnow-videoident';

const { resultCode } = await IDnowManager.startVideoIdent({ transactionToken: 'YOUR_TRANSACTION_TOKEN' });
console.log(resultCode);
```

All configuration options are documented in the [TypeScript interfaces](src/model/interfaces/ISettings.ts) and [an example](example/src/createFullSettings.ts) is also available.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
