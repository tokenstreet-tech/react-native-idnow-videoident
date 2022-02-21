/**
 * Fonts
 */
export interface IIosFonts {
    /**
     * An optional font name that can be used to replace the regular font used by the SDK.
     * Default: System Font: Helvetica Neue Regular (< iOS 9), San Francisco Regular (>= iOS 9)
     */
    fontNameRegular: string;

    /**
     * An optional font name that can be used to replace the medium font used by the SDK.
     * Default: System Font: Helvetica Neue Medium (< iOS 9), San Francisco Medium (>= iOS 9)
     */
    fontNameMedium: string;

    /**
     * An optional font name that can be used to replace the light font used by the SDK.
     * Default: System Font: Helvetica Neue Light (< iOS 9), San Francisco Light (>= iOS 9)
     */
    fontNameLight: string;
}
