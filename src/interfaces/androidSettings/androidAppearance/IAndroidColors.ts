import type { ColorValue } from 'react-native';

import type { IAndroidColorsVideoIdentPlusDisabled } from './IAndroidColorsVideoIdentPlusDisabled';

/**
 * The IDnow SDK is designed with colors following the IDnow corperate design.
 * You can use the SDK without making any adaptions to the colors at all.
 * If, however you want the SDK screens to appear in different colors.
 *
 * Our SDK supports Light Mode as well as the Dark Mode version.
 * Currently, if dark mode is enabled on the user's mobile device,
 * the SDK will automatically appear in Dark Mode.
 *
 * You can make the following adaptions for Light Mode and Dark Mode :
 */
export interface IAndroidColors extends IAndroidColorsVideoIdentPlusDisabled {
    /**
     * Used as default color of the App and the component such as the buttons
     */
    primaryColor: ColorValue;

    /**
     * Useed as a desactivated color for the buttons, it should use same value as primaryColor with a transparent code.
     */
    primaryVariantColor: ColorValue;

    /**
     * Useed as a text color for the whole App
     */
    primarytextColor: ColorValue;

    /**
     * Used as background color for the screens.
     */
    bgPrimaryColor: ColorValue;

    /**
     * Used as background color for the textfields
     */
    bgSecondaryColor: ColorValue;

    /**
     * Used as text color color for the textfields
     */
    basicInputField: ColorValue;
}
