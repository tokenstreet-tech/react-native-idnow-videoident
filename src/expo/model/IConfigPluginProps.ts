export interface IConfigPluginProps {
    ios?: {
        overrideBuildTypeToStaticFramework?: boolean;
        applyUseFrameworksM1SimulatorWorkaround?: boolean;
    };
    android?: {
        excludeDuplicateClasses?: boolean;
    };
}
