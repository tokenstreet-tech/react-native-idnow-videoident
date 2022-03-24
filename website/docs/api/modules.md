---
id: 'modules'
title: '@tokenstreet/react-native-idnow-videoident'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

-   [AndroidLanguageEnum](enums/AndroidLanguageEnum.md)
-   [ConnectionTypeEnum](enums/ConnectionTypeEnum.md)
-   [EnvironmentEnum](enums/EnvironmentEnum.md)
-   [IosAppearanceModeEnum](enums/IosAppearanceModeEnum.md)
-   [IosCheckboxPositionEnum](enums/IosCheckboxPositionEnum.md)
-   [IosNumberLabelPositionEnum](enums/IosNumberLabelPositionEnum.md)
-   [IosRequestCodeAgainLayoutTypeEnum](enums/IosRequestCodeAgainLayoutTypeEnum.md)
-   [IosUIModalPresentationStyleEnum](enums/IosUIModalPresentationStyleEnum.md)
-   [ResultCodeEnum](enums/ResultCodeEnum.md)

## Interfaces

-   [IAppearance](interfaces/IAppearance.md)
-   [IColors](interfaces/IColors.md)
-   [IIdentificationErrorResult](interfaces/IIdentificationErrorResult.md)
-   [IIdentificationResult](interfaces/IIdentificationResult.md)
-   [ISettings](interfaces/ISettings.md)

## Variables

### IDnowManager

• `Const` **IDnowManager**: `Object`

#### Type declaration

| Name              | Type                                                                                                                                              |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `startVideoIdent` | (`settings`: [`ISettings`](interfaces/ISettings.md)<`ColorValue`\>) => `Promise`<[`IIdentificationResult`](interfaces/IIdentificationResult.md)\> |

#### Defined in

[IDnowManager.ts:13](https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/e5039cd/src/IDnowManager.ts#L13)
