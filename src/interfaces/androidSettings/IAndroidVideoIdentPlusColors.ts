import type { ColorValue, ProcessedColorValue } from 'react-native';

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
export interface IAndroidVideoIdentPlusColors<TColor extends ColorValue | ProcessedColorValue> {
    /**
     * README:
     * Used as default color of the App and the component such as the buttons
     */
    primaryColor: TColor;

    /**
     * README:
     * Used as a deactivated color for the buttons,
     * it should use same value as primaryColor with a transparent code.
     */
    primaryVariantColor: TColor;

    /**
     * README:
     * Used as a text color for the whole App
     */
    primarytextColor: TColor;

    /**
     * README:
     * Used as background color for the screens.
     */
    bgPrimaryColor: TColor;

    /**
     * README:
     * Used as background color for the text fields
     */
    bgSecondaryColor: TColor;

    /**
     * README:
     * Used as text color for the text fields
     */
    basicInputField: TColor;
}
