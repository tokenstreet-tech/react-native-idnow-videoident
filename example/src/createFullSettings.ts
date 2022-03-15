import type { ISettings } from '@tokenstreet/react-native-idnow-videoident';
import { Appearance } from 'react-native';

const isDarkMode = Appearance.getColorScheme() === 'dark';
const tokenstreetColors = {
    blue: '#2172f2',
    failureColor: '#e94d41',
    fontDarkGrey: '#282828',
    fontSemiDarkGrey: '#454545',
    successColor: '#2d6c6e',
    white: '#ffffff',
};

export const createFullSettings = (transactionToken: string): ISettings => ({
    allowHttpConnections: undefined,
    allowInvalidCertificates: undefined,
    apiHost: undefined,
    appGoogleRating: undefined,
    appearance: {
        agbInOneLine: undefined,
        alphaBlurViewValue: undefined,
        boldButtonTitles: undefined,
        boldTitles: undefined,
        checkBoxOrientationRight: undefined,
        checkBoxPosition: undefined,
        checkBoxesSquared: undefined,
        checkboxesOrientationTop: undefined,
        colors: {
            backgroundColor: undefined,
            checkContractFooterButtonBackgroundColor: undefined,
            checkContractFooterButtonTextColor: undefined,
            checkIconColor: undefined,
            cqcDefaultInnerRingColor: undefined,
            cqcExcellentQualityInnerColor: undefined,
            cqcModerateQualityInnerColor: undefined,
            cqcOuterRingColor: undefined,
            cqcPoorQualityInnerColor: undefined,
            defaultTextColor: isDarkMode ? tokenstreetColors.white : tokenstreetColors.fontDarkGrey,
            failureColor: tokenstreetColors.failureColor,
            headlineColor: undefined,
            linkColor: undefined,
            photoIdentRetakeButtonBackgroundColor: tokenstreetColors.blue,
            photoIdentRetakeButtonTextColor: tokenstreetColors.white,
            primaryBrandColor: tokenstreetColors.blue,
            proceedButtonBackgroundColor: tokenstreetColors.blue,
            proceedButtonTextColor: tokenstreetColors.white,
            resultScreenHeaderLabelColor: undefined,
            successColor: tokenstreetColors.successColor,
            textFieldBorderColor: undefined,
            textFieldColor: isDarkMode ? tokenstreetColors.white : tokenstreetColors.fontSemiDarkGrey,
            titleBackgroundColor: undefined,
        },
        customiseCallQualityCheckScreen: undefined,
        doNotShowCompanyImageInResultActivity: undefined,
        enableStatusBarStyleLightContent: false,
        fontNameBold: undefined,
        fontNameLight: undefined,
        fontNameMedium: undefined,
        fontNameRegular: undefined,
        fullSizeModalSmsWindow: undefined,
        headerBolded: undefined,
        identCodeLayoutHalf: undefined,
        inputFieldsSquared: undefined,
        lightBlurForIdentCodeContainer: undefined,
        markMandatoryCells: undefined,
        mode: undefined,
        nameForActionBar: undefined,
        newBranding: undefined,
        numberLabelPosition: undefined,
        progressBarsSquared: undefined,
        recheckButtonsBordered: undefined,
        requestCodeAgainLayoutType: undefined,
        resultButtonsAsUIButtonsBelow: undefined,
        seperatorLineComplete: undefined,
        shouldSeparateFooter: undefined,
        shouldShowBlurOverlayLayer: undefined,
        shouldShowGTCInline: undefined,
        shouldShowNavigationBarOnCQCScreen: undefined,
        shouldShowNetworkIndicatorForCQCResult: undefined,
        shouldShowResultTitleForCQCResult: undefined,
        shouldUseHeadlineColorForPreCheckTitle: undefined,
        showErrorSuccessScreen: false,
        showTokenDuringCheckScreen: undefined,
        showVideoOverviewCheck: true,
        squareCheckboxForm: undefined,
        suggestionListBulleted: undefined,
        textFieldCornerRadius: undefined,
        titleBackgroundImageOffset: undefined,
        transparentBackgroundModalSmsWindow: undefined,
        underlineButtonTitles: undefined,
        useResultIcon: undefined,
        useTitleSeparator: undefined,
        whiteAgentThumbnailBackground: undefined,
    },
    callFromHighCallVolumeActivity: undefined,
    calledFromIDnowApp: undefined,
    checkScreenBoxConsentRequired: undefined,
    checkScreenBoxDocumentRequired: undefined,
    checkScreenBoxEMailRequired: undefined,
    checkScreenBoxPhoneNumberRequired: undefined,
    checkScreenLinesLong: undefined,
    companyId: undefined,
    connectionType: undefined,
    disableLogging: undefined,
    environment: undefined,
    firebaseToken: undefined,
    forcedWaitingList: undefined,
    ignoreCompanyID: true,
    language: undefined,
    locale: undefined,
    newLocale: undefined,
    overrideEntryActivity: undefined,
    phoneNo: undefined,
    showDialogsWithIcon: undefined,
    showRatingDialog: undefined,
    startCallIssued: undefined,
    stunHost: undefined,
    stunPort: undefined,
    transactionToken,
    videoHost: undefined,
    webHost: undefined,
    websocketHost: undefined,
});
