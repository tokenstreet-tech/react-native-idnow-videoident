---
id: 'index'
title: '@tokenstreet/react-native-idnow-videoident'
slug: '/api/'
sidebar_label: 'Readme'
sidebar_position: 0
custom_edit_url: null
---

# @tokenstreet/react-native-idnow-videoident

React Native IDnow VideoIdent bindings for the [iOS](https://github.com/idnow/de.idnow.ios) and [Android](https://github.com/idnow/de.idnow.android) SDK.

[![npm version](https://badgen.net/npm/v/@tokenstreet/react-native-idnow-videoident)](https://www.npmjs.com/package/@tokenstreet/react-native-idnow-videoident)
[![downloads](https://badgen.net/npm/dm/@tokenstreet/react-native-idnow-videoident)](https://www.npmjs.com/package/@tokenstreet/react-native-idnow-videoident)
[![types](https://badgen.net/npm/types/@tokenstreet/react-native-idnow-videoident)](https://www.npmjs.com/package/@tokenstreet/react-native-idnow-videoident)
[![minzipped size](https://badgen.net/bundlephobia/minzip/@tokenstreet/react-native-idnow-videoident)](https://bundlephobia.com/result?p=@tokenstreet/react-native-idnow-videoident@latest)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/tokenstreet-tech/react-native-idnow-videoident/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)

Many thanks to [Nuri](https://nuri.com/) for their work on the package [react-native-idnow](https://github.com/bitwala/react-native-idnow). The first draft was heavily inspired by it.
However, almost the entire code has been rewritten since then, so there are now many differences:

## Features

-   All configuration options of the SDKs are possible from the JavaScript side (except `externalLogger`, `customBackButtonItem`, `customCancelButton` & `customAgentView` for iOS, and the [colors for Android](https://github.com/tokenstreet-tech/react-native-idnow-videoident/issues/139))
-   Latest dependencies of the IDnow [iOS](https://github.com/idnow/de.idnow.ios) and [Android](https://github.com/idnow/de.idnow.android) SDKs - Secured by Dependabot
-   No need to manually include native files
-   Published as CommonJS & ESmodules
-   Strong type declarations are included in this package - There isn't a single `any`

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

2. Add the following line to the target in your iOS Podfile:

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
            jcenter() {
                // JCenter is now read-only. Therefore, no new versions are published there any more.
                // We only fetch the necessary dependencies for IDnow from JCenter to avoid loading old dependencies.
                content {
                    includeModule("me.relex", "circleindicator")
                    includeModule("com.github.barteksc", "android-pdf-viewer")
                }
            }
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

`startVideoIdent` is asynchronous. For a successful identification the `resultCode` is returned directly. If the identification failed, an error is thrown with a `resultCode`. Also, an optional `errorMessage` can be included.

You have the possibility to integrate it with a `try...catch` block:

```ts
import type { IIdentificationErrorResult } from '@tokenstreet/react-native-idnow-videoident';
import { IDnowManager } from '@tokenstreet/react-native-idnow-videoident';

try {
    const { resultCode } = await IDnowManager.startVideoIdent({ transactionToken: 'YOUR_TRANSACTION_TOKEN' });
    console.log(resultCode);
} catch (error) {
    if (error !== null && typeof error === 'object' && 'resultCode' in error) {
        const identificationError = error as IIdentificationErrorResult;
        console.log(identificationError.resultCode);
        console.log(identificationError.errorMessage);
    }
}
```

It is also possible to work with `Promises` here:

```ts
import type { IIdentificationErrorResult } from '@tokenstreet/react-native-idnow-videoident';
import { IDnowManager } from '@tokenstreet/react-native-idnow-videoident';

IDnowManager.startVideoIdent({ transactionToken: 'YOUR_TRANSACTION_TOKEN' })
    .then(({ resultCode }) => console.log(resultCode))
    .catch((error) => {
        if (error !== null && typeof error === 'object' && 'resultCode' in error) {
            const identificationError = error as IIdentificationErrorResult;
            console.log(identificationError.resultCode);
            console.log(identificationError.errorMessage);
        }
    });
```

All configuration options are documented in the [TypeScript interfaces](https://tokenstreet-tech.github.io/react-native-idnow-videoident/docs/api/interfaces/ISettings) and [an example](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/main/example/src/createFullSettings.ts) is also available.

## Versioning

We do not follow [Semantic Versioning 2.0.0](https://semver.org/) until `v1` is landed. Breaking changes in minor updates are possible.

## Contributing

See the [contributing guide](https://tokenstreet-tech.github.io/react-native-idnow-videoident/docs/contributing) to learn how to contribute to the repository and the development workflow.

## License

MIT
