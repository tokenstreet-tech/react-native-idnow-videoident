# react-native-idnow-videoident

React Native IDnow VideoIdent bindings for iOS and Android platforms

## Installation

1. Install `react-native-idnow-videoident`:

    ```sh
    npm install react-native-idnow-videoident
    ```

2. Add the following line to your iOS Podfile:

    ```ruby
    use_frameworks! linkage: :static
    ```

3. Install the iOS dependencies:

    ```sh
    pod install
    ```

## Usage

```js
import IdnowVideoident from 'react-native-idnow-videoident';

// ...

const result = await IdnowVideoident.multiply(3, 7);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
