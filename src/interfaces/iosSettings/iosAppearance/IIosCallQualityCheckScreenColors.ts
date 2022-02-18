import type { ColorValue } from 'react-native';

/**
 * Call quality check screen colors
 */
export interface IIosCallQualityCheckScreenColors {
    /**
     * Optional color that replaces default dark gray for the outer ring indicator on the quality check screen.
     * Default: dark gray
     */
    cqcOuterRingColor?: ColorValue;

    /**
     * Optional color that replaces default light gray for the inner ring indicator on the quality check screen.
     * Default: light gray
     */
    cqcDefaultInnerRingColor?: ColorValue;

    /**
     * Optional color that replaces default bright red for the inner ring indicator,
     * in case bad network quality on the quality check screen.
     * Default: bright red
     */
    cqcPoorQualityInnerColor?: ColorValue;

    /**
     * Optional color that replaces default bright orange for the inner ring indicator,
     * in case moderate network quality on the quality check screen.
     * Default: bright orange
     */
    cqcModerateQualityInnerColor?: ColorValue;

    /**
     * Optional color that replaces default strong yellow for the inner ring indicator,
     * in case excellent network quality on the quality check screen.
     * Default: strong yellow (almost green).
     */
    cqcExcellentQualityInnerColor?: ColorValue;
}
