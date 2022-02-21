import type { ColorValue, ProcessedColorValue } from 'react-native';

import type { IosAppearanceModeEnum } from './enums/IosAppearanceModeEnum';
import type { IosCheckboxPosition } from './enums/IosCheckboxPosition';
import type { IosNumberLabelPositionEnum } from './enums/IosNumberLabelPositionEnum';

export interface IIosAppearance<TColor extends ColorValue | ProcessedColorValue> {
    /**
     * Mode
     */
    mode?: IosAppearanceModeEnum;

    // -----------------------------------------------------------------------------------
    //									Colors
    // -----------------------------------------------------------------------------------
    /**
     * Header file:
     * Optional color, that replaces the default text color.
     * Default: A nearly black color
     *  Recommendation: Should be some kind of a dark color that does not collide with white color.
     *
     * README:
     * Optional color, that replaces the default text color.
     * Default: A nearly black color
     * Recommendation: Should be some kind of dark color that does not collide with white color.
     */
    defaultTextColor?: TColor;

    /**
     * Header file:
     * Optional color, that replaces the default brand color.
     * Default: defaultTextColor.
     * Used in headlines, checkboxes, links, alerts etc.
     * Recommendation: Should be a color that does not collide with white color.
     *
     * README:
     * Optional color, that replaces the default brand color.
     * Default: defaultTextColor Used in headlines, checkboxes, links, alerts etc.
     * Recommendation: Should be a color that does not collide with white color.
     */
    primaryBrandColor?: TColor;

    /**
     * Header file:
     * Optional color, that replaces the color that will be used for headlines.
     * Default: primaryBrandColor.
     * Recommendation: Should be a color that does not collide with white color.
     */
    headlineColor?: TColor;

    /**
     * Header file:
     * Optional color, that replaces the color that will be used for links.
     * Default: primaryBrandColor.
     * Recommendation: Should be a color that does not collide with white color.
     */
    linkColor?: TColor;

    /**
     * Header file:
     * Optional color, that replaces the color that will be used for checkboxes.
     * Default: primaryBrandColor.
     * Recommendation: Should be a color that does not collide with white color.
     */
    checkIconColor?: TColor;

    /**
     * Header file:
     * Optional color, that replaces the proceed button background color.
     * Default value: An orange color
     * Recommendation: Should be a color that does not collide with white font color (e.g. orange, blue, red etc.).
     *
     * Optional color, that replaces the proceed button background color.
     * Default: An orange color
     */
    proceedButtonBackgroundColor?: TColor;

    /**
     * Header file:
     * Optional color, that replaces the proceed button text color.
     * Default value: White color
     * Recommendation: Should be a color that does not collide with proceedButtonBackgroundColor.
     *
     * README:
     * Optional color, that replaces the proceed button text color.
     * Default value: White color
     */
    proceedButtonTextColor?: TColor;

    /**
     * Header file:
     * Optional color, that replaces the photo ident retake button background color.
     * Default value: defaultTextColor
     * Recommendation: Should be a color that does not collide with photoIdentRetakeButtonTextColor.
     *
     *  README:
     * Optional color, that replaces the photo ident retake button background color.
     * Default value: defaultTextColor
     */
    photoIdentRetakeButtonBackgroundColor?: TColor;

    /**
     * Header file:
     * Optional color, that replaces the photo ident retake button text color.
     * Default value: proceedButtonTextColor
     * Recommendation: Should be a color that does not collide with photoIdentRetakeButtonBackgroundColor.
     *
     * README:
     * Optional color, that replaces the photo ident retake button text color.
     * Default value: proceedButtonTextColor
     */
    photoIdentRetakeButtonTextColor?: TColor;

    /**
     * Header file:
     * Optional color that replaces the "Back" button color in the WebConsentProtocol-Signing contract review screen.
     * Default value: proceedButtonBackgroundColor
     */
    checkContractFooterButtonBackgroundColor?: TColor;

    /**
     * Header file:
     * Optional color that replaces the "Back" button text color in the WebConsentProtocol-Signing contract review screen.
     * Default value: proceedButtonBackgroundColor
     */
    checkContractFooterButtonTextColor?: TColor;

    /**
     * Header file:
     * Optional color, that replaces the default color of textfield backgrounds and borders
     * Default: defaultTextColor
     *
     * README:
     * Optional color, that replaces the default color of textfield backgrounds and borders
     * Default: defaultTextColor
     */
    textFieldColor?: TColor;

    /**
     * Header file:
     * Optional corner radius for text fields
     * Default: 4.0
     */
    textFieldCornerRadius?: number;

    /**
     * Header file:
     * Optional UIColor determining a text field's inset color
     */
    textFieldBorderColor?: TColor;

    /**
     * Header file:
     * Optional color, that replaces the text color in the result screen, when an identification failed.
     * Default: A red color
     *
     * README:
     * Optional color, that replaces the text color in the result screen, when an identification failed.
     * Default: A red color
     */
    failureColor?: TColor;

    /**
     * Header file:
     * Optional color, that replaces the text color in the result screen, when an identification was successful.
     * Default: A green color
     *
     * README:
     * Optional color, that replaces the text color in the result screen, when an identification was successful.
     * Default: A green color
     */
    successColor?: TColor;

    /**
     * Header file:
     * Optional color that replaces the background color in each view controller with a navigation bar.
     * Default: primaryBrandColor
     */
    titleBackgroundColor?: TColor;

    /**
     * Optional color that replaces default green / red title colors for the success indicator label on the result screen.
     * Default: green / red depending on success
     */
    resultScreenHeaderLabelColor?: TColor;

    /**
     * Optional color, that replaces the color that will be used for view background.
     * Default: white for light mode and nearly dark for the dark mode.
     */
    backgroundColor?: TColor;

    // -----------------------------------------------------------------------------------
    //                                    Call Quality Check
    // -----------------------------------------------------------------------------------
    /**
     * Header file:
     * Optional color that replaces default dark gray for the outer ring indicator on the quality check screen.
     * Default: dark gray
     *
     * README:
     * Optional color that replaces default dark gray for the outer ring indicator on the quality check screen.
     * Default: dark gray
     */
    cqcOuterRingColor?: TColor;

    /**
     * Header file:
     * Optional color that replaces default light gray for the inner ring indicator on the quality check screen.
     * Default: light gray
     *
     * README:
     * Optional color that replaces default light gray for the inner ring indicator on the quality check screen.
     * Default: light gray
     */
    cqcDefaultInnerRingColor?: TColor;

    /**
     * Header file:
     * Optional color that replaces default bright red for the inner ring indicator in case bad network quality on the quality check screen.
     * Default: bright red
     *
     * README:
     * Optional color that replaces default bright red for the inner ring indicator,
     * in case bad network quality on the quality check screen.
     * Default: bright red
     */
    cqcPoorQualityInnerColor?: TColor;

    /**
     * Header file:
     * Optional color that replaces default bright orange for the inner ring indicator in case moderate network quality on the quality check screen.
     * Default: bright orange
     *
     * README:
     * Optional color that replaces default bright orange for the inner ring indicator,
     * in case moderate network quality on the quality check screen.
     * Default: bright orange
     */
    cqcModerateQualityInnerColor?: TColor;

    /**
     * Header file:
     * Optional color that replaces default strong yellow for the inner ring indicator in case excellent network quality on the quality check screen.
     * Default: strong yellow (almost green).
     *
     * README:
     * Optional color that replaces default strong yellow for the inner ring indicator,
     * in case excellent network quality on the quality check screen.
     * Default: strong yellow (almost green).
     */
    cqcExcellentQualityInnerColor?: TColor;

    /**
     * Header file:
     * Optional separator dividing title and view body. Default height is 2 points.
     * Separator color: primaryBrandColor
     */
    useTitleSeparator?: boolean;

    /**
     * Optional UIImageView that replaces the title on the result screen.
     * Default: nil
     */
    titleBackgroundImage?: any;

    /**
     * Optional value that separates titleBackgroundImage from its superview's edges.
     * Default: nil
     */
    titleBackgroundImageOffset?: any;

    /**
     * Optional value that determines if buttons on the result page should appear in the navigation bar or below as normal UIButtons.
     * Default: NO
     */
    resultButtonsAsUIButtonsBelow?: boolean;

    /**
     * Undocumented field
     */
    useResultIcon?: boolean;

    // -----------------------------------------------------------------------------------
    //									Table View
    // -----------------------------------------------------------------------------------
    /**
     * Header file:
     * Default: LEFT - the checkboxes are positioned on the left side
     * set this to RIGHT to reverse the order
     */
    checkBoxPosition?: IosCheckboxPosition;

    /**
     * Undocumented field
     */
    shouldShowGTCInline?: boolean;

    /**
     * Header file:
     * Default: LEFT - The number label position in the instructions view.
     * Set to TOP, this causes the number label to appear on top of text,
     * rather than next to it.
     */
    numberLabelPosition?: IosNumberLabelPositionEnum;

    /**
     * Header file:
     * Default: NO - the seperator line is only visible below the content and not the checkbox
     * settings this to YES draws the line across the entire cell width
     */
    seperatorLineComplete?: boolean;

    /**
     * Header file:
     * Default: NO - since all checkboxes are mandory this is not really neccessary
     * set this to YES in order to show a littel asterix behind the cells title
     */
    markMandatoryCells?: boolean;

    /**
     * Header file:
     * Default: YES - Underline all button titles
     * Set this to NO in order to underline button title text
     */
    underlineButtonTitles?: boolean;

    /**
     * Header file:
     * Default: YES - Make button titles bold
     * Set this to NO in order to use normal font weight in button titles
     */
    boldButtonTitles?: boolean;

    /**
     * Header file:
     * Default: NO - Whether or not all titles should use a bold font weight
     * Set this to YES in order to use bold font weight for titles throughout the SDK
     */
    boldTitles?: boolean;

    /**
     * Header file:
     * Default: BOTTOM
     * Set this to TOP - the ident code box above request again button, refer Whitelabeling Fiducia
     */
    requestCodeAgainLayoutType?: any;

    /**
     * Header file:
     * Default: NO - Whether or not check boxes should be squared rather than round
     */
    checkBoxesSquared?: boolean;

    /**
     * Header file:
     * Default NO - makes input boxes squared and slightly larger.
     */
    inputFieldsSquared?: boolean;

    /**
     * Header file:
     * Default NO - Ident code request for only covers half the screen
     */
    identCodeLayoutHalf?: boolean;

    /**
     * Header file:
     * If set to `true`, the new IDNow branding will be used
     * By default the value of this property is `true`
     */
    usedNewBrand?: boolean;

    /**
     * Header file:
     * Default nil - Set this to a UIBarButtonItem of your preference in order to customize its appearance throughout the SDK
     */
    customBackButtonItem?: any;

    /**
     * Header file:
     * Default nil - Set this to a UIButton of your choice in order to customize the appearance of the cancel button during idents
     */
    customCancelButton?: any;

    /**
     * Header file:
     * Default nil - Set this to a UIView in order to customize the appearance of the agent's window prior to connecting
     */
    customAgentView?: any;

    /**
     * Header file:
     * Default nil - Set this to a valid NSURL to a 60x60 gif relative to your main bundle in order to use this as activity indicator throughout your app
     */
    customActivityIndicatorURL?: any;

    // -----------------------------------------------------------------------------------
    //									Status Bar
    // -----------------------------------------------------------------------------------
    /**
     * Header file:
     * Optional: Forces the light status bar style to match dark navigation bars.
     * If you tint your navigation bar with a dark color by adjusting navigation bar appearance (e.g. a blue color)
     * you can set this value to true. The statusbar style will then be adjusted to light in screens where the navigation bar is visible.
     *
     * README:
     * Optional: Forces the light status bar style to match dark navigation bars.
     * If you tint your navigation bar with a dark color by adjusting navigation bar appearance (e.g. a blue color)
     * you can set this value to true.
     * The statusbar style will then be adjusted to light in screens where the navigation bar is visible.
     */
    enableStatusBarStyleLightContent?: boolean;

    // -----------------------------------------------------------------------------------
    //									Font Names
    // -----------------------------------------------------------------------------------
    /**
     * Header file:
     * An optional font name that can be used to replace the bold font used by the SDK.
     * Default: System Font: Helvetica Neue Bold (< iOS 9), San Francisco Bold (>= iOS 9)
     */
    fontNameBold?: string;

    /**
     * Header file:
     * An optional font name that can be used to replace the regular font used by the SDK.
     * Default: System Font: Helvetica Neue Regular (< iOS 9), San Francisco Regular (>= iOS 9)
     *
     * README:
     * An optional font name that can be used to replace the regular font used by the SDK.
     * Default: System Font: Helvetica Neue Regular (< iOS 9), San Francisco Regular (>= iOS 9)
     */
    fontNameRegular?: string;

    /**
     * Header file:
     * An optional font name that can be used to replace the medium font used by the SDK.
     * Default: System Font: Helvetica Neue Medium (< iOS 9), San Francisco Medium (>= iOS 9)
     *
     * README:
     * An optional font name that can be used to replace the medium font used by the SDK.
     * Default: System Font: Helvetica Neue Medium (< iOS 9), San Francisco Medium (>= iOS 9)
     */
    fontNameMedium?: string;

    /**
     * Header file:
     * An optional font name that can be used to replace the light font used by the SDK.
     * Default: System Font: Helvetica Neue Light (< iOS 9), San Francisco Light (>= iOS 9)
     *
     * README:
     * An optional font name that can be used to replace the light font used by the SDK.
     * Default: System Font: Helvetica Neue Light (< iOS 9), San Francisco Light (>= iOS 9)
     */
    fontNameLight?: string;

    // -----------------------------------------------------------------------------------
    //                                    Video Ident
    // -----------------------------------------------------------------------------------
    /**
     * Header file:
     * Should show a blur overlay on video while identification
     * False is default
     */
    shouldShowBlurOverlayLayer?: boolean;

    /**
     * Header file:
     * Alpha value for blur view (default - 1.0)
     */
    alphaBlurViewValue?: number;

    /**
     * Header file:
     * Light blur for ident code container only
     */
    lightBlurForIdentCodeContainer?: boolean;

    // -----------------------------------------------------------------------------------
    //                                    Call Quality Check
    // -----------------------------------------------------------------------------------
    /**
     * Header file:
     * Put CQC screen in navigation stack instead of present it
     */
    shouldShowNavigationBarOnCQCScreen?: boolean;

    /**
     * Header file:
     * Default grey, apply headline color for title
     */
    shouldUseHeadlineColorForPreCheckTitle?: boolean;

    /**
     * Header file:
     * Squared bars instead of
     */
    progressBarsSquared?: boolean;

    /**
     * Header file:
     * On the call quality check screen, should be show result
     */
    shouldShowResultTitleForCQCResult?: boolean;

    /**
     * Header file:
     * three dots indicate network condition
     */
    shouldShowNetworkIndicatorForCQCResult?: boolean;

    /**
     * Header file:
     * default is underline
     */
    recheckButtonsBordered?: boolean;

    /**
     * Header file:
     * on CQC result screen, show footer separator
     */
    shouldSeparateFooter?: boolean;

    /**
     * Undocumented field
     */
    suggestionListBulleted?: boolean;
}
