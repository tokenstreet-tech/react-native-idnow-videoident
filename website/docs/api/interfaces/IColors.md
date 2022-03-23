---
id: 'IColors'
title: 'Interface: IColors<TColor>'
sidebar_label: 'IColors'
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `TColor` | extends `ColorValue` \| `ProcessedColorValue` |

## Hierarchy

-   `IIosColors`<`TColor`\>

-   `IAndroidColors`

    ↳ **`IColors`**

## Properties

### backgroundColor

• `Optional` **backgroundColor**: `TColor`

Optional color, that replaces the color that will be used for view background.
Default: white for light mode and nearly dark for the dark mode.

#### Inherited from

IIosColors.backgroundColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:175](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L175)

---

### checkContractFooterButtonBackgroundColor

• `Optional` **checkContractFooterButtonBackgroundColor**: `TColor`

Header file:
Optional color that replaces the "Back" button color in the WebConsentProtocol-Signing contract review screen.
Default value: proceedButtonBackgroundColor

#### Inherited from

IIosColors.checkContractFooterButtonBackgroundColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:110](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L110)

---

### checkContractFooterButtonTextColor

• `Optional` **checkContractFooterButtonTextColor**: `TColor`

Header file:
Optional color that replaces the "Back" button text color in the WebConsentProtocol-Signing contract review screen.
Default value: proceedButtonBackgroundColor

#### Inherited from

IIosColors.checkContractFooterButtonTextColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:117](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L117)

---

### checkIconColor

• `Optional` **checkIconColor**: `TColor`

Header file:
Optional color, that replaces the color that will be used for checkboxes.
Default: primaryBrandColor.
Recommendation: Should be a color that does not collide with white color.

#### Inherited from

IIosColors.checkIconColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:56](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L56)

---

### cqcDefaultInnerRingColor

• `Optional` **cqcDefaultInnerRingColor**: `TColor`

Header file:
Optional color that replaces default light gray for the inner ring indicator on the quality check screen.
Default: light gray

README:
Optional color that replaces default light gray for the inner ring indicator on the quality check screen.
Default: light gray

#### Inherited from

IIosColors.cqcDefaultInnerRingColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:212](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L212)

---

### cqcExcellentQualityInnerColor

• `Optional` **cqcExcellentQualityInnerColor**: `TColor`

Header file:
Optional color that replaces default strong yellow for the inner ring indicator in case excellent network quality on the quality check screen.
Default: strong yellow (almost green).

README:
Optional color that replaces default strong yellow for the inner ring indicator,
in case excellent network quality on the quality check screen.
Default: strong yellow (almost green).

#### Inherited from

IIosColors.cqcExcellentQualityInnerColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:248](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L248)

---

### cqcModerateQualityInnerColor

• `Optional` **cqcModerateQualityInnerColor**: `TColor`

Header file:
Optional color that replaces default bright orange for the inner ring indicator in case moderate network quality on the quality check screen.
Default: bright orange

README:
Optional color that replaces default bright orange for the inner ring indicator,
in case moderate network quality on the quality check screen.
Default: bright orange

#### Inherited from

IIosColors.cqcModerateQualityInnerColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:236](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L236)

---

### cqcOuterRingColor

• `Optional` **cqcOuterRingColor**: `TColor`

Header file:
Optional color that replaces default dark gray for the outer ring indicator on the quality check screen.
Default: dark gray

README:
Optional color that replaces default dark gray for the outer ring indicator on the quality check screen.
Default: dark gray

#### Inherited from

IIosColors.cqcOuterRingColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:201](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L201)

---

### cqcPoorQualityInnerColor

• `Optional` **cqcPoorQualityInnerColor**: `TColor`

Header file:
Optional color that replaces default bright red for the inner ring indicator in case bad network quality on the quality check screen.
Default: bright red

README:
Optional color that replaces default bright red for the inner ring indicator,
in case bad network quality on the quality check screen.
Default: bright red

#### Inherited from

IIosColors.cqcPoorQualityInnerColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:224](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L224)

---

### defaultTextColor

• `Optional` **defaultTextColor**: `TColor`

Header file:
Optional color, that replaces the default text color.
Default: A nearly black color
Recommendation: Should be some kind of a dark color that does not collide with white color.

README:
Optional color, that replaces the default text color.
Default: A nearly black color
Recommendation: Should be some kind of dark color that does not collide with white color.

#### Inherited from

IIosColors.defaultTextColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:18](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L18)

---

### failureColor

• `Optional` **failureColor**: `TColor`

Header file:
Optional color, that replaces the text color in the result screen, when an identification failed.
Default: A red color

README:
Optional color, that replaces the text color in the result screen, when an identification failed.
Default: A red color

#### Inherited from

IIosColors.failureColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:145](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L145)

---

### headlineColor

• `Optional` **headlineColor**: `TColor`

Header file:
Optional color, that replaces the color that will be used for headlines.
Default: primaryBrandColor.
Recommendation: Should be a color that does not collide with white color.

#### Inherited from

IIosColors.headlineColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:40](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L40)

---

### linkColor

• `Optional` **linkColor**: `TColor`

Header file:
Optional color, that replaces the color that will be used for links.
Default: primaryBrandColor.
Recommendation: Should be a color that does not collide with white color.

#### Inherited from

IIosColors.linkColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:48](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L48)

---

### photoIdentRetakeButtonBackgroundColor

• `Optional` **photoIdentRetakeButtonBackgroundColor**: `TColor`

Header file:
Optional color, that replaces the photo ident retake button background color.
Default value: defaultTextColor
Recommendation: Should be a color that does not collide with photoIdentRetakeButtonTextColor.

README:
Optional color, that replaces the photo ident retake button background color.
Default value: defaultTextColor

#### Inherited from

IIosColors.photoIdentRetakeButtonBackgroundColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:91](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L91)

---

### photoIdentRetakeButtonTextColor

• `Optional` **photoIdentRetakeButtonTextColor**: `TColor`

Header file:
Optional color, that replaces the photo ident retake button text color.
Default value: proceedButtonTextColor
Recommendation: Should be a color that does not collide with photoIdentRetakeButtonBackgroundColor.

README:
Optional color, that replaces the photo ident retake button text color.
Default value: proceedButtonTextColor

#### Inherited from

IIosColors.photoIdentRetakeButtonTextColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:103](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L103)

---

### primaryAlertActionColor

• `Optional` **primaryAlertActionColor**: `TColor`

Optional color, that replaces the color on the left action of alert controller
Default: lighter grey color (#8D96A6)

#### Inherited from

IIosColors.primaryAlertActionColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:181](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L181)

---

### primaryBrandColor

• `Optional` **primaryBrandColor**: `TColor`

Header file:
Optional color, that replaces the default brand color.
Default: defaultTextColor.
Used in headlines, checkboxes, links, alerts etc.
Recommendation: Should be a color that does not collide with white color.

README:
Optional color, that replaces the default brand color.
Default: defaultTextColor Used in headlines, checkboxes, links, alerts etc.
Recommendation: Should be a color that does not collide with white color.

#### Inherited from

IIosColors.primaryBrandColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:32](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L32)

---

### proceedButtonBackgroundColor

• `Optional` **proceedButtonBackgroundColor**: `TColor`

Header file:
Optional color, that replaces the proceed button background color.
Default value: An orange color
Recommendation: Should be a color that does not collide with white font color (e.g. orange, blue, red etc.).

Optional color, that replaces the proceed button background color.
Default: An orange color

#### Inherited from

IIosColors.proceedButtonBackgroundColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:67](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L67)

---

### proceedButtonTextColor

• `Optional` **proceedButtonTextColor**: `TColor`

Header file:
Optional color, that replaces the proceed button text color.
Default value: White color
Recommendation: Should be a color that does not collide with proceedButtonBackgroundColor.

README:
Optional color, that replaces the proceed button text color.
Default value: White color

#### Inherited from

IIosColors.proceedButtonTextColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:79](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L79)

---

### resultScreenHeaderLabelColor

• `Optional` **resultScreenHeaderLabelColor**: `TColor`

Optional color that replaces default green / red title colors for the success indicator label on the result screen.
Default: green / red depending on success

#### Inherited from

IIosColors.resultScreenHeaderLabelColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:169](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L169)

---

### secondaryAlertActionColor

• `Optional` **secondaryAlertActionColor**: `TColor`

Optional color, that replaces the color on the right action of alert controller
Default: black for light mode and white for dark mode.

#### Inherited from

IIosColors.secondaryAlertActionColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:187](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L187)

---

### successColor

• `Optional` **successColor**: `TColor`

Header file:
Optional color, that replaces the text color in the result screen, when an identification was successful.
Default: A green color

README:
Optional color, that replaces the text color in the result screen, when an identification was successful.
Default: A green color

#### Inherited from

IIosColors.successColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:156](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L156)

---

### textFieldBorderColor

• `Optional` **textFieldBorderColor**: `TColor`

Header file:
Optional UIColor determining a text field's inset color

#### Inherited from

IIosColors.textFieldBorderColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:134](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L134)

---

### textFieldColor

• `Optional` **textFieldColor**: `TColor`

Header file:
Optional color, that replaces the default color of textfield backgrounds and borders
Default: defaultTextColor

README:
Optional color, that replaces the default color of textfield backgrounds and borders
Default: defaultTextColor

#### Inherited from

IIosColors.textFieldColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:128](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L128)

---

### titleBackgroundColor

• `Optional` **titleBackgroundColor**: `TColor`

Header file:
Optional color that replaces the background color in each view controller with a navigation bar.
Default: primaryBrandColor

#### Inherited from

IIosColors.titleBackgroundColor

#### Defined in

[model/interfaces/ios/IIosColors.ts:163](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/0d9fcdd/src/model/interfaces/ios/IIosColors.ts#L163)
