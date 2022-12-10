export interface IConfigPluginProps {
    ios: {
        overrideBuildTypeToStaticFramework: boolean;
        appleSiliconFix: boolean;
    };
    android: {
        excludeDuplicateClasses: boolean;
    };
}
