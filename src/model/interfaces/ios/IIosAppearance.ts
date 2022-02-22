import type { IosAppearanceModeEnum } from '../../enums/ios/IosAppearanceModeEnum';
import type { IosCheckboxPositionEnum } from '../../enums/ios/IosCheckboxPositionEnum';
import type { IosNumberLabelPositionEnum } from '../../enums/ios/IosNumberLabelPositionEnum';

export interface IIosAppearance {
    /**
     * Mode
     */
    mode?: IosAppearanceModeEnum;

    /**
     * Header file:
     * Optional corner radius for text fields
     * Default: 4.0
     */
    textFieldCornerRadius?: number;

    // -----------------------------------------------------------------------------------
    //                                    Call Quality Check
    // -----------------------------------------------------------------------------------
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
    titleBackgroundImageOffset?: number;

    /**
     * Optional value that determines if buttons on the result page should appear in the navigation bar or below as normal UIButtons.
     * Default: NO
     */
    resultButtonsAsUIButtonsBelow?: boolean;

    useResultIcon?: boolean;

    // -----------------------------------------------------------------------------------
    //									Table View
    // -----------------------------------------------------------------------------------
    /**
     * Header file:
     * Default: LEFT - the checkboxes are positioned on the left side
     * set this to RIGHT to reverse the order
     */
    checkBoxPosition?: IosCheckboxPositionEnum;

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
     * Three dots indicate network condition
     */
    shouldShowNetworkIndicatorForCQCResult?: boolean;

    /**
     * Header file:
     * Default is underline
     */
    recheckButtonsBordered?: boolean;

    /**
     * Header file:
     * On CQC result screen, show footer separator
     */
    shouldSeparateFooter?: boolean;

    suggestionListBulleted?: boolean;
}
