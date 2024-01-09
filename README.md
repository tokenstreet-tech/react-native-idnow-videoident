# @tokenstreet/react-native-idnow-videoident

React Native IDnow VideoIdent bindings for the [iOS](https://github.com/idnow/de.idnow.ios) and [Android](https://github.com/idnow/de.idnow.android) SDK.

## :warning: Deprecation Notice: `react-native-idnow-videoident` Library

**Important:** Due to the discontinuation of our use of the IDnow Video Ident service, we are no longer able to test or maintain the `react-native-idnow-videoident` library. Consequently, this library is now **deprecated** and will no longer receive updates or support.

Please consider migrating to alternative solutions to ensure ongoing functionality and support.

[![npm version](https://badgen.net/npm/v/@tokenstreet/react-native-idnow-videoident)](https://www.npmjs.com/package/@tokenstreet/react-native-idnow-videoident)
[![downloads](https://badgen.net/npm/dm/@tokenstreet/react-native-idnow-videoident)](https://www.npmjs.com/package/@tokenstreet/react-native-idnow-videoident)
[![types](https://badgen.net/npm/types/@tokenstreet/react-native-idnow-videoident)](https://www.npmjs.com/package/@tokenstreet/react-native-idnow-videoident)
[![minzipped size](https://badgen.net/bundlephobia/minzip/@tokenstreet/react-native-idnow-videoident)](https://bundlephobia.com/result?p=@tokenstreet/react-native-idnow-videoident@latest)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/tokenstreet-tech/react-native-idnow-videoident/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)

Many thanks to [Nuri](https://nuri.com/) for the work on the package [react-native-idnow](https://github.com/bitwala/react-native-idnow) and also [Fina](https://www.heyfina.com/) for their package [config-plugin-react-native-idnow](https://github.com/heyfina/config-plugin-react-native-idnow). The first draft was heavily inspired by it.
However, almost the entire code has been rewritten since then, so there are now many differences:

## Features

-   All configuration options of the SDKs are possible from the JavaScript side (except `externalLogger`, `customBackButtonItem`, `customCancelButton` & `customAgentView` for iOS, and the [colors for Android](https://github.com/tokenstreet-tech/react-native-idnow-videoident/issues/139))
-   Latest dependencies of the IDnow [iOS](https://github.com/idnow/de.idnow.ios) and [Android](https://github.com/idnow/de.idnow.android) SDKs - Secured by Dependabot
-   No need to manually include native files
-   Published as CommonJS & ESmodules
-   Strong type declarations are included in this package - There isn't a single `any`

## Website

Visit the [website](https://tokenstreet-tech.github.io/react-native-idnow-videoident/) for docs, guides, API and more!

## Contributing

See the [contributing guide](https://tokenstreet-tech.github.io/react-native-idnow-videoident/docs/contributing) to learn how to contribute to the repository and the development workflow.

## License

MIT
