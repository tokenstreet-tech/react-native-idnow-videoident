# @tokenstreet/react-native-idnow-videoident

React Native IDnow VideoIdent bindings for iOS and Android platforms

## Installation

1. Install `@tokenstreet/react-native-idnow-videoident`:

    ```sh
    npm install @tokenstreet/react-native-idnow-videoident
    ```

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

## Usage

```js
import { IDnowManager } from '@tokenstreet/react-native-idnow-videoident';

const { resultCode } = await IDnowManager.startVideoIdent({ transactionToken: 'TST-KJCXN' });
console.log(resultCode);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
