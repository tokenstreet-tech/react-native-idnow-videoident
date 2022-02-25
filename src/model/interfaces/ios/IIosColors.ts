import type { ColorValue, ProcessedColorValue } from 'react-native';

export interface IIosColors<TColor extends ColorValue | ProcessedColorValue> {
    // -----------------------------------------------------------------------------------
    //									Colors
    // -----------------------------------------------------------------------------------
    /**
     * Header file:
     * Optional color, that replaces the default text color.
     * Default: A nearly black color
     * Recommendation: Should be some kind of a dark color that does not collide with white color.
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
}
