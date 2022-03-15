import type { ColorValue, ProcessedColorValue } from 'react-native';

import type { IAndroidAppearance } from './android/IAndroidAppearance';
import type { IColors } from './IColors';
import type { IIosAppearance } from './ios/IIosAppearance';

export interface IAppearance<TColor extends ColorValue | ProcessedColorValue>
    extends IIosAppearance,
        IAndroidAppearance {
    /**
     * iOS header file (usedNewBrand):
     * If set to `true`, the new IDNow branding will be used
     * By default the value of this property is `true`
     *
     * Android README (newBrand):
     * You can set the new branding
     */
    newBranding?: boolean;

    // -----------------------------------------------------------------------------------
    //									Colors
    // -----------------------------------------------------------------------------------
    colors?: IColors<TColor>;

    // -----------------------------------------------------------------------------------
    //                                    Settings
    // -----------------------------------------------------------------------------------
    /**
     * iOS header file:
     * If set to `false`, the video overview check screen will not be shown before starting a video identification.
     * The default value of this property is `true`.
     *
     * iOS README:
     * Optional: If set to false, the video overview check screen will not be shown before starting a video identification.
     * The default value of this property is true.
     *
     * Android README:
     * You can decide whether to let the user confirm the legal points.
     */
    showVideoOverviewCheck?: boolean;

    /**
     * iOS header file:
     * If set to `false`, the Error-Success-Screen provided by the SDK will not be shown.
     * The default value of this property is `true`.
     *
     * iOS README:
     * Optional: If set to false, the Error-Success-Screen provided by the SDK will not be displayed.
     * The default value of this property is true.
     *
     *
     * Android README:
     * Same goes to the success screen. If none is shown, the app sends the results right back.
     * The defaults for the both parameters are "true";
     */
    showErrorSuccessScreen?: boolean;
}
