import type { ColorValue, ProcessedColorValue } from 'react-native';

export interface IAndroidColors<TColor extends ColorValue | ProcessedColorValue> {
    // -----------------------------------------------------------------------------------
    //									Video ident colors
    // -----------------------------------------------------------------------------------
    /**
     * README:
     * Used as default color for display and editable texts Default: a nearly black color
     * Recommendation: Should be some kind of dark color that does not collide with white color.
     */
    textDefault?: TColor;

    /**
     * README:
     * Optional color, that replaces the default brand color.
     * Default: an orange color Used in headlines, checkboxes, links, alerts etc.
     * Recommendation: Should be a color that does not collide with white color.
     */
    primary?: TColor;

    /**
     * README:
     * Background color for confirmation/continue button,
     * which is usually placed at the bottom of a screen Default: the primary color (see above)
     */
    proceedButtonBackground?: TColor;

    /**
     * README:
     * Replaces the text color in the result screen, when an identification failed.
     * Default: A red color
     */
    failure?: TColor;

    /**
     * README:
     * Replaces the text color in the result screen, when an identification was successful.
     * Default: A green color
     */
    success?: TColor;

    // -----------------------------------------------------------------------------------
    //									Video ident plus colors
    // -----------------------------------------------------------------------------------
    /**
     * The IDnow SDK is designed with colors following the IDnow corporate design.
     * You can use the SDK without making any adaptions to the colors at all.
     * If, however you want the SDK screens to appear in different colors.
     *
     * Our SDK supports Light Mode as well as the Dark Mode version.
     * Currently, if dark mode is enabled on the user's mobile device,
     * the SDK will automatically appear in Dark Mode.
     *
     * You can make the following adaptions for Light Mode and Dark Mode:
     */

    /**
     * README:
     * Used as default color of the App and the component such as the buttons
     */
    primaryColor?: TColor;

    /**
     * README:
     * Used as a deactivated color for the buttons,
     * it should use same value as primaryColor with a transparent code.
     */
    primaryVariantColor?: TColor;

    /**
     * README:
     * Used as a text color for the whole App
     */
    primaryTextColor?: TColor;

    /**
     * README:
     * Used as background color for the screens.
     */
    bgPrimaryColor?: TColor;

    /**
     * README:
     * Used as background color for the text fields
     */
    bgSecondaryColor?: TColor;

    /**
     * README:
     * Used as text color for the text fields
     */
    basicInputField?: TColor;
}
