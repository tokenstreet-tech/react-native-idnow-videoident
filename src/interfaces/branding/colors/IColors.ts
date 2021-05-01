import type { ICallQualityCheckScreenColors } from './ICallQualityCheckScreenColors';
import type { IStatusBarColor } from './IStatusBarColor';

/**
 * Colors
 */
export interface IColors {
    /**
     * Optional color, that replaces the default text color. Default: A nearly black color Recommendation: Should be some kind of a dark color that does not collide with white color.
     */
    defaultTextColor: any;

    /**
     * Optional color, that replaces the default brand color. Default: defaultTextColor Used in headlines, checkboxes, links, alerts etc. Recommendation: Should be a color that does not collide with white color.
     */
    primaryBrandColor: any;

    /**
     * Optional color, that replaces the proceed button background color. Default: An orange color
     */
    proceedButtonBackgroundColor: any;

    /**
     * Optional color, that replaces the proceed button text color. Default value: White color
     */
    proceedButtonTextColor: any;

    /**
     * Optional color, that replaces the photo ident retake button background color. Default value: defaultTextColor
     */
    photoIdentRetakeButtonBackgroundColor: any;

    /**
     * Optional color, that replaces the photo ident retake button text color. Default value: proceedButtonTextColor
     */
    photoIdentRetakeButtonTextColor: any;

    /**
     * Optional color, that replaces the default color of textfield backgrounds and borders Default: defaultTextColor
     */
    textFieldColor: any;

    /**
     * Optional color, that replaces the text color in the result screen, when an identification failed. Default: A red color
     */
    failureColor: any;

    /**
     * Optional color, that replaces the text color in the result screen, when an identification was successful. Default: A green color
     */
    successColor: any;

    /**
     * Call quality check screen
     */
    callQualityCheckScreen: ICallQualityCheckScreenColors;

    /**
     * Status Bar
     */
    statusBarColors: IStatusBarColor;
}
