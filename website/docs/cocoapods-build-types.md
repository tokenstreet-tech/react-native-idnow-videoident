---
sidebar_position: 1
---

# CocoaPods build types

Unfortunately, the IDnow iOS SDK enforces the build type static framework with the following line `use_frameworks! linkage: :static`.

This is especially unfavourable in conjunction with React Native because it makes Flipper stop working and often creates problems with other packages,
such as [`@shopify/react-native-skia`](https://github.com/Shopify/react-native-skia/issues/652) or [`sentry-react-native`](https://github.com/getsentry/sentry-react-native/issues/2353).

An [issue](https://github.com/idnow/de.idnow.ios/issues/119) has already been created in their repository, and the issue has also been passed on to the IDnow support team.

## `cocoapods-user-defined-build-types`

:::caution experimental
Please be aware that the following workaround is experimental and not officially supported.
:::

A workaround to remove the line `use_frameworks! linkage: :static` is to use the plugin [`cocoapods-user-defined-build-types`](https://github.com/joncardasis/cocoapods-user-defined-build-types).
For this temporary solution the following lines have to be added to the `Podfile`:

```diff
...
install! 'cocoapods', deterministic_uuids: false

+ plugin 'cocoapods-user-defined-build-types'
+ enable_user_defined_build_types!

target 'App' do
...
```

:::caution version sync
It is the responsibility of the developer to keep the version of the pod `IDnowSDK` in sync with the corresponding version of `@tokenstreet/react-native-idnow-videoident`.
:::

```diff
    ...
        app_path: "#{Pod::Config.instance.installation_root}/.."
    )

-   use_frameworks! linkage: :static
+   pod 'IDnowSDK', '5.1.12', build_type: :static_framework

    target 'AppTests' do
    ...
```

The changed lines are also included in the `Podfile` of the [example](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/main/example/ios/Podfile).
However, they are commented out there.
