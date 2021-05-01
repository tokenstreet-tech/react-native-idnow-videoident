import type { IFonts } from './fonts/IFonts';
import type { IColors } from './colors/IColors';

/**
 * Branding
 */
export interface IBranding {
    /**
     * Colors
     */
    colors: IColors;

    /**
     * Fonts
     */
    fonts: IFonts;
}
