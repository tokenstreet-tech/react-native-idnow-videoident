---
sidebar_position: 1
---

# CocoaPods build types

## `cocoapods-user-defined-build-types`

:::caution experimental
Please be aware that the following workaround is experimental and not officially supported.
:::

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
