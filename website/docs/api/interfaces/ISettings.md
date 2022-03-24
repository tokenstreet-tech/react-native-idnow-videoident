---
id: 'ISettings'
title: 'Interface: ISettings<TColor>'
sidebar_label: 'ISettings'
sidebar_position: 0
custom_edit_url: null
---

The complete documentation of the interfaces is copied directly from the READMEs or the header files
of the respective repositories
https://github.com/idnow/de.idnow.ios
https://github.com/idnow/de.idnow.android

## Type parameters

| Name     | Type                                                         |
| :------- | :----------------------------------------------------------- |
| `TColor` | extends `ColorValue` \| `ProcessedColorValue` = `ColorValue` |

## Hierarchy

-   `IIosSettings`

-   `IAndroidSettings`

    ↳ **`ISettings`**

## Properties

### allowHttpConnections

• `Optional` **allowHttpConnections**: `boolean`

#### Inherited from

IAndroidSettings.allowHttpConnections

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:30](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L30)

---

### allowInvalidCertificates

• `Optional` **allowInvalidCertificates**: `boolean`

Header file:
If set to `true`, the SDK will accept invalid (e.g. self signed certificates).
Please note that iOS might still reject the certs if you dont also set
NSAllowsArbitraryLoads in NSAppTransportSecurity and also NSTemporaryExceptionAllowsInsecureHTTPLoads
in NSExceptionDomains for your domains

#### Inherited from

IIosSettings.allowInvalidCertificates

#### Defined in

[model/interfaces/ios/IIosSettings.ts:117](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L117)

---

### apiHost

• `Optional` **apiHost**: `string`

Header file:
The target server url for REST calls if custom server is used

README:
The target server url for REST calls if custom server is used.

#### Inherited from

IIosSettings.apiHost

#### Defined in

[model/interfaces/ios/IIosSettings.ts:126](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L126)

---

### appGoogleRating

• `Optional` **appGoogleRating**: `boolean`

#### Inherited from

IAndroidSettings.appGoogleRating

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:66](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L66)

---

### appearance

• `Optional` **appearance**: [`IAppearance`](IAppearance.md)<`TColor`\>

Appearance

#### Defined in

[model/interfaces/ISettings.ts:93](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ISettings.ts#L93)

---

### automaticPagingTimeInterval

• `Optional` **automaticPagingTimeInterval**: `number`

Header file:
Waiting screen
Paging time interval
10s by default, equal with animated video duration

#### Inherited from

IIosSettings.automaticPagingTimeInterval

#### Defined in

[model/interfaces/ios/IIosSettings.ts:95](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L95)

---

### callFromHighCallVolumeActivity

• `Optional` **callFromHighCallVolumeActivity**: `boolean`

#### Inherited from

IAndroidSettings.callFromHighCallVolumeActivity

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:16](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L16)

---

### calledFromIDnowApp

• `Optional` **calledFromIDnowApp**: `boolean`

Deprecated: Supported by the SDK version 3.22.1 or before

README:
Set the custom certificate provider

#### Inherited from

IAndroidSettings.calledFromIDnowApp

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:26](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L26)

---

### checkScreenBoxConsentRequired

• `Optional` **checkScreenBoxConsentRequired**: `boolean`

#### Inherited from

IAndroidSettings.checkScreenBoxConsentRequired

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:40](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L40)

---

### checkScreenBoxDocumentRequired

• `Optional` **checkScreenBoxDocumentRequired**: `boolean`

#### Inherited from

IAndroidSettings.checkScreenBoxDocumentRequired

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:36](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L36)

---

### checkScreenBoxEMailRequired

• `Optional` **checkScreenBoxEMailRequired**: `boolean`

#### Inherited from

IAndroidSettings.checkScreenBoxEMailRequired

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:38](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L38)

---

### checkScreenBoxPhoneNumberRequired

• `Optional` **checkScreenBoxPhoneNumberRequired**: `boolean`

#### Inherited from

IAndroidSettings.checkScreenBoxPhoneNumberRequired

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:34](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L34)

---

### checkScreenLinesLong

• `Optional` **checkScreenLinesLong**: `boolean`

#### Inherited from

IAndroidSettings.checkScreenLinesLong

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:32](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L32)

---

### companyId

• `Optional` **companyId**: `string`

iOS header file:
The company id provided by IDnow.

iOS README:
Your company id provided by IDnow.

Android README:
Initialize with your activity which will handle the SDK callback and pass the id of your company.
IDnowSDK is a singleton class, so just call it with IDnowSDK.getInstance()

#### Defined in

[model/interfaces/ISettings.ts:42](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ISettings.ts#L42)

---

### connectionType

• `Optional` **connectionType**: [`ConnectionTypeEnum`](../enums/ConnectionTypeEnum.md)

iOS header file:
The connection type to use to talk the backend

iOS README:
The connection type to use to talk the backend. (Websocket (default) or long polling)

Android README:
You can set the connection type to use: websockets.

#### Defined in

[model/interfaces/ISettings.ts:85](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ISettings.ts#L85)

---

### disableLogging

• `Optional` **disableLogging**: `boolean`

README:
You can disable logging of the SDK by using

#### Inherited from

IAndroidSettings.disableLogging

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:14](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L14)

---

### environment

• `Optional` **environment**: [`EnvironmentEnum`](../enums/EnvironmentEnum.md)

iOS header file:
Optional: The environment that should be used for the identification (DEV, TEST, LIVE, Custom)
The default value is `IDnowEnvironmentNotDefined`.
Then the used environment is based on the prefix of the transaction token
(DEV -> DEV, TST -> Test, TS1 -> Test1, TS2 -> Test2, TS3 -> Test3, else -> Live).
You can use the special IDnowEnvironmentCustom to define a custom IDnow installation.
If this is done, you need to set the apiHost and websocketHost.

iOS README:
Optional: The environment that should be used for the identification (DEV, TEST, LIVE)
The default value is IDnowEnvironmentNotDefined.

The used environment will then base on the prefix of the transaction token
(DEV -> DEV, TST -> Test, else -> Live)

You can use the special IDnowEnvironmentCustom to define a custom IDnow installation.
If this is done, you need to set the apiHost and websocketHost.

Android README:
Optionally set against which environment the app has to test.
Possibilities are DEV, TEST, LIVE, with LIVE being the default.

You can force one of the environments to use. Default is to determine this by the token used.

#### Defined in

[model/interfaces/ISettings.ts:73](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ISettings.ts#L73)

---

### firebaseToken

• `Optional` **firebaseToken**: `string`

#### Inherited from

IAndroidSettings.firebaseToken

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:51](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L51)

---

### forceErrorSuccessScreen

• `Optional` **forceErrorSuccessScreen**: `boolean`

Header file:
If set to `YES`, a failed / canceled / finished identification will be forced to display the result screen.

#### Inherited from

IIosSettings.forceErrorSuccessScreen

#### Defined in

[model/interfaces/ios/IIosSettings.ts:33](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L33)

---

### forceModalPresentation

• `Optional` **forceModalPresentation**: `boolean`

Header file:
If set to `true`, the UI for the identification will always be displayed modal.
By default the value of this property is `false` and the identification UI
will be pushed on an existing navigation controller if possible.

README:
Optional: If set to true, the UI for the identification will always be displayed modal.
By default, the value of this property is false and the identification UI will be pushed on an existing navigation controller if possible.

#### Inherited from

IIosSettings.forceModalPresentation

#### Defined in

[model/interfaces/ios/IIosSettings.ts:27](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L27)

---

### forcedWaitingList

• `Optional` **forcedWaitingList**: `boolean`

#### Inherited from

IAndroidSettings.forcedWaitingList

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:55](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L55)

---

### ignoreCompanyID

• `Optional` **ignoreCompanyID**: `boolean`

Header file:
If true the first api request will take the token instead of the companyid into account.

#### Inherited from

IIosSettings.ignoreCompanyID

#### Defined in

[model/interfaces/ios/IIosSettings.ts:78](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L78)

---

### language

• `Optional` **language**: [`AndroidLanguageEnum`](../enums/AndroidLanguageEnum.md)

#### Inherited from

IAndroidSettings.language

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:4](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L4)

---

### locale

• `Optional` **locale**: [`AndroidLanguageEnum`](../enums/AndroidLanguageEnum.md)

#### Inherited from

IAndroidSettings.locale

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:6](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L6)

---

### modalPresentationStyle

• `Optional` **modalPresentationStyle**: [`IosUIModalPresentationStyleEnum`](../enums/IosUIModalPresentationStyleEnum.md)

Header file:
Specifies the presentation style for the modal ident viewcontroller.
E.g. Can be set to `UIModalPresentationCurrentContext` to allow presenting ident view controller within a popover on an iPad.

README:
Optional: Specifies the presentation style for the modal ident view controller.
E.g. Can be set to UIModalPresentationCurrentContext to allow presenting ident view controller within a popover on an iPad.

#### Inherited from

IIosSettings.modalPresentationStyle

#### Defined in

[model/interfaces/ios/IIosSettings.ts:44](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L44)

---

### newLocale

• `Optional` **newLocale**: [`AndroidLanguageEnum`](../enums/AndroidLanguageEnum.md)

#### Inherited from

IAndroidSettings.newLocale

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:8](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L8)

---

### overrideEntryActivity

• `Optional` **overrideEntryActivity**: `boolean`

Not implemented

#### Inherited from

IAndroidSettings.overrideEntryActivity

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:64](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L64)

---

### phoneNo

• `Optional` **phoneNo**: `string`

#### Inherited from

IAndroidSettings.phoneNo

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:42](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L42)

---

### productName

• `Optional` **productName**: `string`

Header file:
The name the resulting app should use in the UINavigation bar

#### Inherited from

IIosSettings.productName

#### Defined in

[model/interfaces/ios/IIosSettings.ts:72](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L72)

---

### pushDeviceToken

• `Optional` **pushDeviceToken**: `string`

Header file:
The device token is needed to uniquely identify the device. Its used to send push notifications.

#### Inherited from

IIosSettings.pushDeviceToken

#### Defined in

[model/interfaces/ios/IIosSettings.ts:60](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L60)

---

### sentryDSN

• `Optional` **sentryDSN**: `string`

Header file:
If you use Sentry with your app, set sentryDSN to `https://login:secret@<sentry-fqdn>/<project>`

#### Inherited from

IIosSettings.sentryDSN

#### Defined in

[model/interfaces/ios/IIosSettings.ts:66](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L66)

---

### showDialogsWithIcon

• `Optional` **showDialogsWithIcon**: `boolean`

Not implemented

#### Inherited from

IAndroidSettings.showDialogsWithIcon

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:49](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L49)

---

### showIdentTokenOnCheckScreen

• `Optional` **showIdentTokenOnCheckScreen**: `boolean`

Header file:
If this is set to YES the ident token will be visible on the check screen page
as well. The default value of this property is `NO`.

#### Inherited from

IIosSettings.showIdentTokenOnCheckScreen

#### Defined in

[model/interfaces/ios/IIosSettings.ts:15](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L15)

---

### showRatingDialog

• `Optional` **showRatingDialog**: `boolean`

#### Inherited from

IAndroidSettings.showRatingDialog

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:53](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L53)

---

### startCallIssued

• `Optional` **startCallIssued**: `boolean`

#### Inherited from

IAndroidSettings.startCallIssued

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:57](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L57)

---

### stunHost

• `Optional` **stunHost**: `string`

Header file:
The target server for stun calls if custom server is used

#### Inherited from

IIosSettings.stunHost

#### Defined in

[model/interfaces/ios/IIosSettings.ts:147](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L147)

---

### stunPort

• `Optional` **stunPort**: `number`

Header file:
The target port for stun calls if custom server is used

#### Inherited from

IIosSettings.stunPort

#### Defined in

[model/interfaces/ios/IIosSettings.ts:153](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L153)

---

### transactionToken

• **transactionToken**: `string`

iOS README:
A token that will be used for instantiating a photo or video identification.

Android README:
Set the transactionToken, for example from a TextField

#### Defined in

[model/interfaces/ISettings.ts:29](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ISettings.ts#L29)

---

### userInterfaceLanguage

• `Optional` **userInterfaceLanguage**: `string`

This sets the user interface language. Allowed values are: en (English), de (German), fr (French),
es (Spanish), it (Italian), pt (Portugese), et (Estonian), hr (Croatian), hu (Hungarian), ka (Georgian), ko(Korean), lt(Lithuanian), lv (Latvian), nl (Dutch), pl (Polish), ru (Russian), zh (Chinese).

#### Inherited from

IIosSettings.userInterfaceLanguage

#### Defined in

[model/interfaces/ios/IIosSettings.ts:104](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L104)

---

### videoHost

• `Optional` **videoHost**: `string`

Header file:
The target server url for video rest calls if custom server is used

#### Inherited from

IIosSettings.videoHost

#### Defined in

[model/interfaces/ios/IIosSettings.ts:141](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L141)

---

### webHost

• `Optional` **webHost**: `string`

README:

**`example`** https://www.yourserver.com

#### Inherited from

IAndroidSettings.webHost

#### Defined in

[model/interfaces/android/IAndroidSettings.ts:89](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/android/IAndroidSettings.ts#L89)

---

### websocketHost

• `Optional` **websocketHost**: `string`

Header file:
The target server url for websocket calls if custom server is used

README:
The target server url for websocket calls if custom server is used.

#### Inherited from

IIosSettings.websocketHost

#### Defined in

[model/interfaces/ios/IIosSettings.ts:135](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/c8a49ad/src/model/interfaces/ios/IIosSettings.ts#L135)
