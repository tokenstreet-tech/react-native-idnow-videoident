import type { ColorValue } from 'react-native';

/**
 * Video Ident Plus disabled
 */
export interface IAndroidColorsVideoIdentPlusDisabled {
    /**
     * README:
     * Used as default color for display and editable texts Default: a nearly black color
     * Recommendation: Should be some kind of dark color that does not collide with white color.
     */
    text_default: ColorValue;

    /**
     * README:
     * Optional color, that replaces the default brand color.
     * Default: an orange color Used in headlines, checkboxes, links, alerts etc.
     * Recommendation: Should be a color that does not collide with white color.
     */
    primary: ColorValue;

    /**
     * README:
     * Background color for confirmation/continue button,
     * which is usually placed at the bottom of a screen Default: the primary color (see above)
     */
    proceed_button_background: ColorValue;

    /**
     * README:
     * Replaces the text color in the result screen, when an identification failed.
     * Default: A red color
     */
    failure: ColorValue;

    /**
     * README:
     * Replaces the text color in the result screen, when an identification was successful.
     * Default: A green color
     */
    success: ColorValue;
}
