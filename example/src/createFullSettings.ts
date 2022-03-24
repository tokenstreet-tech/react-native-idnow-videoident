import type { ISettings } from '@tokenstreet/react-native-idnow-videoident';
import {
    AndroidLanguageEnum,
    ConnectionTypeEnum,
    EnvironmentEnum,
    IosAppearanceModeEnum,
    IosCheckboxPositionEnum,
    IosLanguageEnum,
    IosNumberLabelPositionEnum,
    IosRequestCodeAgainLayoutTypeEnum,
    IosUIModalPresentationStyleEnum,
} from '@tokenstreet/react-native-idnow-videoident';
import { Appearance } from 'react-native';
import type { DeepRequired } from 'utility-types';

const getCurrentThemeColor = (lightColor: string, darkColor: string): string =>
    Appearance.getColorScheme() === 'light' ? lightColor : darkColor;
const tokenstreetColors = {
    black: '#000000',
    blue: '#2172f2',
    failureColor: '#e94d41',
    fontDarkGrey: '#282828',
    fontSemiDarkGrey: '#454545',
    green: '#2d6c6e',
    red: '#e94d41',
    successColor: '#2d6c6e',
    white: '#ffffff',
    yellow: '#f9db61',
};
const themeColors = {
    backgroundColor: getCurrentThemeColor(tokenstreetColors.white, tokenstreetColors.black),
    textColor: getCurrentThemeColor(tokenstreetColors.fontDarkGrey, tokenstreetColors.white),
};

export const createFullSettings = (transactionToken: string): DeepRequired<ISettings> => ({
    allowHttpConnections: false,
    allowInvalidCertificates: false,
    apiHost: '',
    appGoogleRating: false,
    appearance: {
        agbInOneLine: false,
        alphaBlurViewValue: 1.0,
        boldButtonTitles: true,
        boldTitles: false,
        checkBoxOrientationRight: false,
        checkBoxPosition: IosCheckboxPositionEnum.LEFT,
        checkBoxesSquared: false,
        checkboxesOrientationTop: false,
        colors: {
            backgroundColor: themeColors.backgroundColor,
            checkContractFooterButtonBackgroundColor: tokenstreetColors.blue,
            checkContractFooterButtonTextColor: tokenstreetColors.white,
            checkIconColor: tokenstreetColors.green,
            cqcDefaultInnerRingColor: 'pink',
            cqcExcellentQualityInnerColor: tokenstreetColors.green,
            cqcModerateQualityInnerColor: tokenstreetColors.yellow,
            cqcOuterRingColor: 'pink',
            cqcPoorQualityInnerColor: tokenstreetColors.red,
            defaultTextColor: themeColors.textColor,
            failureColor: tokenstreetColors.failureColor,
            headlineColor: 'pink',
            linkColor: tokenstreetColors.blue,
            photoIdentRetakeButtonBackgroundColor: tokenstreetColors.blue,
            photoIdentRetakeButtonTextColor: tokenstreetColors.white,
            primaryAlertActionColor: 'pink',
            primaryBrandColor: tokenstreetColors.blue,
            proceedButtonBackgroundColor: tokenstreetColors.blue,
            proceedButtonTextColor: tokenstreetColors.white,
            resultScreenHeaderLabelColor: 'pink',
            secondaryAlertActionColor: 'pink',
            successColor: tokenstreetColors.successColor,
            textFieldBorderColor: 'pink',
            textFieldColor: getCurrentThemeColor(tokenstreetColors.fontSemiDarkGrey, tokenstreetColors.white),
            titleBackgroundColor: 'pink',
        },
        customActivityIndicatorURL: '',
        customiseCallQualityCheckScreen: false,
        doNotShowCompanyImageInResultActivity: false,
        enableStatusBarStyleLightContent: false,
        fontNameBold: '',
        fontNameLight: '',
        fontNameMedium: '',
        fontNameRegular: '',
        fullSizeModalSmsWindow: false,
        headerBolded: false,
        identCodeLayoutHalf: false,
        inputFieldsSquared: false,
        lightBlurForIdentCodeContainer: false,
        markMandatoryCells: false,
        mode: IosAppearanceModeEnum.IDNOW_MODE_SYSTEM,
        nameForActionBar: 'Action bar name',
        newBranding: true,
        numberLabelPosition: IosNumberLabelPositionEnum.LABELLEFT,
        progressBarsSquared: false,
        recheckButtonsBordered: false,
        requestCodeAgainLayoutType: IosRequestCodeAgainLayoutTypeEnum.BOTTOM,
        resultButtonsAsUIButtonsBelow: false,
        seperatorLineComplete: false,
        shouldSeparateFooter: false,
        shouldShowBlurOverlayLayer: false,
        shouldShowGTCInline: false,
        shouldShowNavigationBarOnCQCScreen: false,
        shouldShowNetworkIndicatorForCQCResult: false,
        shouldShowResultTitleForCQCResult: false,
        shouldUseHeadlineColorForPreCheckTitle: false,
        showErrorSuccessScreen: true,
        showTokenDuringCheckScreen: true,
        showVideoOverviewCheck: true,
        squareCheckboxForm: false,
        suggestionListBulleted: false,
        textFieldCornerRadius: 4.0,
        titleBackgroundImage: 0,
        titleBackgroundImageOffset: 0,
        transparentBackgroundModalSmsWindow: true,
        underlineButtonTitles: true,
        useResultIcon: true,
        useTitleSeparator: false,
        whiteAgentThumbnailBackground: false,
    },
    automaticPagingTimeInterval: 10,
    callFromHighCallVolumeActivity: false,
    calledFromIDnowApp: false,
    checkScreenBoxConsentRequired: true,
    checkScreenBoxDocumentRequired: true,
    checkScreenBoxEMailRequired: false,
    checkScreenBoxPhoneNumberRequired: false,
    checkScreenLinesLong: false,
    companyId: '',
    connectionType: ConnectionTypeEnum.WEBSOCKET,
    disableLogging: false,
    environment: EnvironmentEnum.DEV,
    firebaseToken: '',
    forceErrorSuccessScreen: false,
    forceModalPresentation: false,
    forcedWaitingList: false,
    ignoreCompanyID: true,
    language: AndroidLanguageEnum.EN,
    locale: AndroidLanguageEnum.EN,
    modalPresentationStyle: IosUIModalPresentationStyleEnum.UIModalPresentationOverFullScreen,
    newLocale: AndroidLanguageEnum.EN,
    overrideEntryActivity: false,
    phoneNo: '',
    productName: '',
    pushDeviceToken: '',
    sentryDSN: '',
    showDialogsWithIcon: false,
    showIdentTokenOnCheckScreen: false,
    showRatingDialog: false,
    startCallIssued: false,
    stunHost: '',
    stunPort: 0,
    transactionToken,
    userInterfaceLanguage: IosLanguageEnum.EN,
    videoHost: '',
    webHost: '',
    websocketHost: '',
});
