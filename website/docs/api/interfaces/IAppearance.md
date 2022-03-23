---
id: 'IAppearance'
title: 'Interface: IAppearance<TColor>'
sidebar_label: 'IAppearance'
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `TColor` | extends `ColorValue` \| `ProcessedColorValue` |

## Hierarchy

-   `IIosAppearance`

-   `IAndroidAppearance`

    ↳ **`IAppearance`**

## Properties

### agbInOneLine

• `Optional` **agbInOneLine**: `boolean`

#### Inherited from

IAndroidAppearance.agbInOneLine

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:12](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L12)

---

### alphaBlurViewValue

• `Optional` **alphaBlurViewValue**: `number`

Header file:
Alpha value for blur view (default - 1.0)

#### Inherited from

IIosAppearance.alphaBlurViewValue

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:241](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L241)

---

### boldButtonTitles

• `Optional` **boldButtonTitles**: `boolean`

Header file:
Default: YES - Make button titles bold
Set this to NO in order to use normal font weight in button titles

#### Inherited from

IIosAppearance.boldButtonTitles

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:103](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L103)

---

### boldTitles

• `Optional` **boldTitles**: `boolean`

Header file:
Default: NO - Whether or not all titles should use a bold font weight
Set this to YES in order to use bold font weight for titles throughout the SDK

#### Inherited from

IIosAppearance.boldTitles

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:110](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L110)

---

### checkBoxOrientationRight

• `Optional` **checkBoxOrientationRight**: `boolean`

#### Inherited from

IAndroidAppearance.checkBoxOrientationRight

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:4](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L4)

---

### checkBoxPosition

• `Optional` **checkBoxPosition**: [`IosCheckboxPositionEnum`](../enums/IosCheckboxPositionEnum.md)

Header file:
Default: LEFT - the checkboxes are positioned on the left side
set this to RIGHT to reverse the order

#### Inherited from

IIosAppearance.checkBoxPosition

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:65](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L65)

---

### checkBoxesSquared

• `Optional` **checkBoxesSquared**: `boolean`

Header file:
Default: NO - Whether or not check boxes should be squared rather than round

#### Inherited from

IIosAppearance.checkBoxesSquared

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:123](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L123)

---

### checkboxesOrientationTop

• `Optional` **checkboxesOrientationTop**: `boolean`

#### Inherited from

IAndroidAppearance.checkboxesOrientationTop

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:14](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L14)

---

### colors

• `Optional` **colors**: [`IColors`](IColors.md)<`TColor`\>

#### Defined in

[model/interfaces/IAppearance.ts:23](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/IAppearance.ts#L23)

---

### customActivityIndicatorURL

• `Optional` **customActivityIndicatorURL**: `string`

Header file:
Default nil - Set this to a valid NSURL to a 60x60 gif relative to your main bundle in order to use this as activity indicator throughout your app

#### Inherited from

IIosAppearance.customActivityIndicatorURL

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:165](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L165)

---

### customiseCallQualityCheckScreen

• `Optional` **customiseCallQualityCheckScreen**: `boolean`

#### Inherited from

IAndroidAppearance.customiseCallQualityCheckScreen

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:6](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L6)

---

### doNotShowCompanyImageInResultActivity

• `Optional` **doNotShowCompanyImageInResultActivity**: `boolean`

#### Inherited from

IAndroidAppearance.doNotShowCompanyImageInResultActivity

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:16](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L16)

---

### enableStatusBarStyleLightContent

• `Optional` **enableStatusBarStyleLightContent**: `boolean`

Header file:
Optional: Forces the light status bar style to match dark navigation bars.
If you tint your navigation bar with a dark color by adjusting navigation bar appearance (e.g. a blue color)
you can set this value to true. The statusbar style will then be adjusted to light in screens where the navigation bar is visible.

README:
Optional: Forces the light status bar style to match dark navigation bars.
If you tint your navigation bar with a dark color by adjusting navigation bar appearance (e.g. a blue color)
you can set this value to true.
The statusbar style will then be adjusted to light in screens where the navigation bar is visible.

#### Inherited from

IIosAppearance.enableStatusBarStyleLightContent

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:182](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L182)

---

### fontNameBold

• `Optional` **fontNameBold**: `string`

Header file:
An optional font name that can be used to replace the bold font used by the SDK.
Default: System Font: Helvetica Neue Bold (< iOS 9), San Francisco Bold (>= iOS 9)

#### Inherited from

IIosAppearance.fontNameBold

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:192](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L192)

---

### fontNameLight

• `Optional` **fontNameLight**: `string`

Header file:
An optional font name that can be used to replace the light font used by the SDK.
Default: System Font: Helvetica Neue Light (< iOS 9), San Francisco Light (>= iOS 9)

README:
An optional font name that can be used to replace the light font used by the SDK.
Default: System Font: Helvetica Neue Light (< iOS 9), San Francisco Light (>= iOS 9)

#### Inherited from

IIosAppearance.fontNameLight

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:225](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L225)

---

### fontNameMedium

• `Optional` **fontNameMedium**: `string`

Header file:
An optional font name that can be used to replace the medium font used by the SDK.
Default: System Font: Helvetica Neue Medium (< iOS 9), San Francisco Medium (>= iOS 9)

README:
An optional font name that can be used to replace the medium font used by the SDK.
Default: System Font: Helvetica Neue Medium (< iOS 9), San Francisco Medium (>= iOS 9)

#### Inherited from

IIosAppearance.fontNameMedium

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:214](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L214)

---

### fontNameRegular

• `Optional` **fontNameRegular**: `string`

Header file:
An optional font name that can be used to replace the regular font used by the SDK.
Default: System Font: Helvetica Neue Regular (< iOS 9), San Francisco Regular (>= iOS 9)

README:
An optional font name that can be used to replace the regular font used by the SDK.
Default: System Font: Helvetica Neue Regular (< iOS 9), San Francisco Regular (>= iOS 9)

#### Inherited from

IIosAppearance.fontNameRegular

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:203](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L203)

---

### fullSizeModalSmsWindow

• `Optional` **fullSizeModalSmsWindow**: `boolean`

#### Inherited from

IAndroidAppearance.fullSizeModalSmsWindow

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:20](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L20)

---

### headerBolded

• `Optional` **headerBolded**: `boolean`

#### Inherited from

IAndroidAppearance.headerBolded

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:18](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L18)

---

### identCodeLayoutHalf

• `Optional` **identCodeLayoutHalf**: `boolean`

Header file:
Default NO - Ident code request for only covers half the screen

#### Inherited from

IIosAppearance.identCodeLayoutHalf

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:135](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L135)

---

### inputFieldsSquared

• `Optional` **inputFieldsSquared**: `boolean`

Header file:
Default NO - makes input boxes squared and slightly larger.

#### Inherited from

IIosAppearance.inputFieldsSquared

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:129](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L129)

---

### lightBlurForIdentCodeContainer

• `Optional` **lightBlurForIdentCodeContainer**: `boolean`

Header file:
Light blur for ident code container only

#### Inherited from

IIosAppearance.lightBlurForIdentCodeContainer

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:247](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L247)

---

### markMandatoryCells

• `Optional` **markMandatoryCells**: `boolean`

Header file:
Default: NO - since all checkboxes are mandory this is not really neccessary
set this to YES in order to show a littel asterix behind the cells title

#### Inherited from

IIosAppearance.markMandatoryCells

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:89](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L89)

---

### mode

• `Optional` **mode**: [`IosAppearanceModeEnum`](../enums/IosAppearanceModeEnum.md)

Mode

#### Inherited from

IIosAppearance.mode

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:15](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L15)

---

### nameForActionBar

• `Optional` **nameForActionBar**: `string`

#### Inherited from

IAndroidAppearance.nameForActionBar

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:2](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L2)

---

### newBranding

• `Optional` **newBranding**: `boolean`

iOS header file (usedNewBrand):
If set to `true`, the new IDNow branding will be used
By default the value of this property is `true`

Android README (newBrand):
You can set the new branding

#### Defined in

[model/interfaces/IAppearance.ts:18](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/IAppearance.ts#L18)

---

### numberLabelPosition

• `Optional` **numberLabelPosition**: [`IosNumberLabelPositionEnum`](../enums/IosNumberLabelPositionEnum.md)

Header file:
Default: LEFT - The number label position in the instructions view.
Set to TOP, this causes the number label to appear on top of text,
rather than next to it.

#### Inherited from

IIosAppearance.numberLabelPosition

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:75](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L75)

---

### progressBarsSquared

• `Optional` **progressBarsSquared**: `boolean`

Header file:
Squared bars instead of

#### Inherited from

IIosAppearance.progressBarsSquared

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:268](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L268)

---

### recheckButtonsBordered

• `Optional` **recheckButtonsBordered**: `boolean`

Header file:
Default is underline

#### Inherited from

IIosAppearance.recheckButtonsBordered

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:286](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L286)

---

### requestCodeAgainLayoutType

• `Optional` **requestCodeAgainLayoutType**: [`IosRequestCodeAgainLayoutTypeEnum`](../enums/IosRequestCodeAgainLayoutTypeEnum.md)

Header file:
Default: BOTTOM
Set this to TOP - the ident code box above request again button, refer Whitelabeling Fiducia

#### Inherited from

IIosAppearance.requestCodeAgainLayoutType

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:117](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L117)

---

### resultButtonsAsUIButtonsBelow

• `Optional` **resultButtonsAsUIButtonsBelow**: `boolean`

Optional value that determines if buttons on the result page should appear in the navigation bar or below as normal UIButtons.
Default: NO

#### Inherited from

IIosAppearance.resultButtonsAsUIButtonsBelow

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:53](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L53)

---

### seperatorLineComplete

• `Optional` **seperatorLineComplete**: `boolean`

Header file:
Default: NO - the seperator line is only visible below the content and not the checkbox
settings this to YES draws the line across the entire cell width

#### Inherited from

IIosAppearance.seperatorLineComplete

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:82](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L82)

---

### shouldSeparateFooter

• `Optional` **shouldSeparateFooter**: `boolean`

Header file:
On CQC result screen, show footer separator

#### Inherited from

IIosAppearance.shouldSeparateFooter

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:292](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L292)

---

### shouldShowBlurOverlayLayer

• `Optional` **shouldShowBlurOverlayLayer**: `boolean`

Header file:
Should show a blur overlay on video while identification
False is default

#### Inherited from

IIosAppearance.shouldShowBlurOverlayLayer

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:235](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L235)

---

### shouldShowGTCInline

• `Optional` **shouldShowGTCInline**: `boolean`

#### Inherited from

IIosAppearance.shouldShowGTCInline

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:67](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L67)

---

### shouldShowNavigationBarOnCQCScreen

• `Optional` **shouldShowNavigationBarOnCQCScreen**: `boolean`

Header file:
Put CQC screen in navigation stack instead of present it

#### Inherited from

IIosAppearance.shouldShowNavigationBarOnCQCScreen

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:256](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L256)

---

### shouldShowNetworkIndicatorForCQCResult

• `Optional` **shouldShowNetworkIndicatorForCQCResult**: `boolean`

Header file:
Three dots indicate network condition

#### Inherited from

IIosAppearance.shouldShowNetworkIndicatorForCQCResult

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:280](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L280)

---

### shouldShowResultTitleForCQCResult

• `Optional` **shouldShowResultTitleForCQCResult**: `boolean`

Header file:
On the call quality check screen, should be show result

#### Inherited from

IIosAppearance.shouldShowResultTitleForCQCResult

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:274](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L274)

---

### shouldUseHeadlineColorForPreCheckTitle

• `Optional` **shouldUseHeadlineColorForPreCheckTitle**: `boolean`

Header file:
Default grey, apply headline color for title

#### Inherited from

IIosAppearance.shouldUseHeadlineColorForPreCheckTitle

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:262](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L262)

---

### showErrorSuccessScreen

• `Optional` **showErrorSuccessScreen**: `boolean`

iOS header file:
If set to `false`, the Error-Success-Screen provided by the SDK will not be shown.
The default value of this property is `true`.

iOS README:
Optional: If set to false, the Error-Success-Screen provided by the SDK will not be displayed.
The default value of this property is true.

Android README:
Same goes to the success screen. If none is shown, the app sends the results right back.
The defaults for the both parameters are "true";

#### Defined in

[model/interfaces/IAppearance.ts:56](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/IAppearance.ts#L56)

---

### showTokenDuringCheckScreen

• `Optional` **showTokenDuringCheckScreen**: `boolean`

#### Inherited from

IAndroidAppearance.showTokenDuringCheckScreen

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:8](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L8)

---

### showVideoOverviewCheck

• `Optional` **showVideoOverviewCheck**: `boolean`

iOS header file:
If set to `false`, the video overview check screen will not be shown before starting a video identification.
The default value of this property is `true`.

iOS README:
Optional: If set to false, the video overview check screen will not be shown before starting a video identification.
The default value of this property is true.

Android README:
You can decide whether to let the user confirm the legal points.

#### Defined in

[model/interfaces/IAppearance.ts:40](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/IAppearance.ts#L40)

---

### squareCheckboxForm

• `Optional` **squareCheckboxForm**: `boolean`

#### Inherited from

IAndroidAppearance.squareCheckboxForm

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:10](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L10)

---

### suggestionListBulleted

• `Optional` **suggestionListBulleted**: `boolean`

#### Inherited from

IIosAppearance.suggestionListBulleted

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:294](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L294)

---

### textFieldCornerRadius

• `Optional` **textFieldCornerRadius**: `number`

Header file:
Optional corner radius for text fields
Default: 4.0

#### Inherited from

IIosAppearance.textFieldCornerRadius

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:25](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L25)

---

### titleBackgroundImage

• `Optional` **titleBackgroundImage**: `ImageSourcePropType`

Optional UIImageView that replaces the title on the result screen.
Default: nil

#### Inherited from

IIosAppearance.titleBackgroundImage

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:41](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L41)

---

### titleBackgroundImageOffset

• `Optional` **titleBackgroundImageOffset**: `number`

Optional value that separates titleBackgroundImage from its superview's edges.
Default: nil

#### Inherited from

IIosAppearance.titleBackgroundImageOffset

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:47](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L47)

---

### transparentBackgroundModalSmsWindow

• `Optional` **transparentBackgroundModalSmsWindow**: `boolean`

#### Inherited from

IAndroidAppearance.transparentBackgroundModalSmsWindow

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:22](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L22)

---

### underlineButtonTitles

• `Optional` **underlineButtonTitles**: `boolean`

Header file:
Default: YES - Underline all button titles
Set this to NO in order to underline button title text

#### Inherited from

IIosAppearance.underlineButtonTitles

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:96](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L96)

---

### useResultIcon

• `Optional` **useResultIcon**: `boolean`

#### Inherited from

IIosAppearance.useResultIcon

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:55](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L55)

---

### useTitleSeparator

• `Optional` **useTitleSeparator**: `boolean`

Header file:
Optional separator dividing title and view body. Default height is 2 points.
Separator color: primaryBrandColor

#### Inherited from

IIosAppearance.useTitleSeparator

#### Defined in

[model/interfaces/ios/IIosAppearance.ts:35](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/ios/IIosAppearance.ts#L35)

---

### whiteAgentThumbnailBackground

• `Optional` **whiteAgentThumbnailBackground**: `boolean`

#### Inherited from

IAndroidAppearance.whiteAgentThumbnailBackground

#### Defined in

[model/interfaces/android/IAndroidAppearance.ts:24](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/46300f0/src/model/interfaces/android/IAndroidAppearance.ts#L24)
