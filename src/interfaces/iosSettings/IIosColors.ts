import type { ColorValue, ProcessedColorValue } from 'react-native';

import type { IIosCallQualityCheckScreenColors } from './IIosCallQualityCheckScreenColors';

/**
 * Colors
 */
export interface IIosColors<TColor extends ColorValue | ProcessedColorValue>
    extends IIosCallQualityCheckScreenColors<TColor> {
    /**
     * Optional color, that replaces the default text color.
     * Default: A nearly black color
     * Recommendation: Should be some kind of dark color that does not collide with white color.
     */
    defaultTextColor?: TColor;

    /**
     * Optional color, that replaces the default brand color.
     * Default: defaultTextColor Used in headlines, checkboxes, links, alerts etc.
     * Recommendation: Should be a color that does not collide with white color.
     */
    primaryBrandColor?: TColor;

    /**
     * Optional color, that replaces the proceed button background color.
     * Default: An orange color
     */
    proceedButtonBackgroundColor?: TColor;

    /**
     * Optional color, that replaces the proceed button text color.
     * Default value: White color
     */
    proceedButtonTextColor?: TColor;

    /**
     * Optional color, that replaces the photo ident retake button background color.
     * Default value: defaultTextColor
     */
    photoIdentRetakeButtonBackgroundColor?: TColor;

    /**
     * Optional color, that replaces the photo ident retake button text color.
     * Default value: proceedButtonTextColor
     */
    photoIdentRetakeButtonTextColor?: TColor;

    /**
     * Optional color, that replaces the default color of textfield backgrounds and borders
     * Default: defaultTextColor
     */
    textFieldColor?: TColor;

    /**
     * Optional color, that replaces the text color in the result screen, when an identification failed.
     * Default: A red color
     */
    failureColor?: TColor;

    /**
     * Optional color, that replaces the text color in the result screen, when an identification was successful.
     * Default: A green color
     */
    successColor?: TColor;
}
