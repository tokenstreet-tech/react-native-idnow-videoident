import type { ConfigPlugin } from '@expo/config-plugins';
import {
    createRunOncePlugin,
    withAndroidManifest,
    withAppBuildGradle,
    withMainApplication,
    withProjectBuildGradle,
    withSettingsGradle,
} from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';

import {
    applyImplementation,
    applyManifestConfig,
    applyPackage,
    applyPackagingOptionsAndConfigurations,
    applyRepositories,
    applySettings,
} from './configureAndroidSDK';
import { withPodfileUpdate } from './configureIOSSDK';

const withIDnowVideoIdent: ConfigPlugin = (expoConfig: ExpoConfig) => {
    expoConfig = withMainApplication(expoConfig, (config) => {
        config.modResults.contents = applyPackage(config.modResults.contents);
        return config;
    });

    expoConfig = withAndroidManifest(expoConfig, async (config) => {
        // Modifiers can be async, but try to keep them fast.
        config.modResults = await applyManifestConfig(config, config.modResults);
        return config;
    });

    expoConfig = withSettingsGradle(expoConfig, (config) => {
        config.modResults.contents = applySettings(config.modResults.contents);
        return config;
    });

    expoConfig = withAppBuildGradle(expoConfig, (config) => {
        config.modResults.contents = applyImplementation(config.modResults.contents);
        config.modResults.contents = applyPackagingOptionsAndConfigurations(config.modResults.contents);
        return config;
    });

    expoConfig = withProjectBuildGradle(expoConfig, (config) => {
        config.modResults.contents = applyRepositories(config.modResults.contents);
        return config;
    });

    expoConfig = withPodfileUpdate(expoConfig);

    return expoConfig;
};

export default createRunOncePlugin(withIDnowVideoIdent, 'IDNowSDK', '1.0.11');
