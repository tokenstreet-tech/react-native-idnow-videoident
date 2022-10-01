---
sidebar_position: 2
---

# CocoaPods build-types

Unfortunately, the IDnow iOS forces the build type static framework with the following line `use_frameworks! linkage: :static`. This is especially unfavorable in conjunction with React Native, because it makes Flipper stop working, and often creates problems with other packages, such as [`@shopify/react-native-skia`](https://github.com/Shopify/react-native-skia/issues/652) or [`sentry-react-native`](https://github.com/getsentry/sentry-react-native/issues/2353)An [issue](https://github.com/idnow/de.idnow.ios/issues/119) has already been created in their repository, and the issue has also been passed on to the IDnow support team.

## Experimental: `cocoapods-user-defined-build-types`
