import type { ColorValue } from 'react-native';

import type { IIosCallQualityCheckScreenColors } from './IIosCallQualityCheckScreenColors';
import type { IIosStatusBarColor } from './IIosStatusBarColor';

/**
 * Colors
 */
export interface IIosColors extends IIosStatusBarColor, IIosCallQualityCheckScreenColors {
    /**
     * Optional color, that replaces the default text color.
     * Default: A nearly black color
     * Recommendation: Should be some kind of dark color that does not collide with white color.
     */
    defaultTextColor?: ColorValue;

    /**
     * Optional color, that replaces the default brand color.
     * Default: defaultTextColor Used in headlines, checkboxes, links, alerts etc.
     * Recommendation: Should be a color that does not collide with white color.
     */
    primaryBrandColor?: ColorValue;

    /**
     * Optional color, that replaces the proceed button background color.
     * Default: An orange color
     */
    proceedButtonBackgroundColor?: ColorValue;

    /**
     * Optional color, that replaces the proceed button text color.
     * Default value: White color
     */
    proceedButtonTextColor?: ColorValue;

    /**
     * Optional color, that replaces the photo ident retake button background color.
     * Default value: defaultTextColor
     */
    photoIdentRetakeButtonBackgroundColor?: ColorValue;

    /**
     * Optional color, that replaces the photo ident retake button text color.
     * Default value: proceedButtonTextColor
     */
    photoIdentRetakeButtonTextColor?: ColorValue;

    /**
     * Optional color, that replaces the default color of textfield backgrounds and borders
     * Default: defaultTextColor
     */
    textFieldColor?: ColorValue;

    /**
     * Optional color, that replaces the text color in the result screen, when an identification failed.
     * Default: A red color
     */
    failureColor?: ColorValue;

    /**
     * Optional color, that replaces the text color in the result screen, when an identification was successful.
     * Default: A green color
     */
    successColor?: ColorValue;
}
