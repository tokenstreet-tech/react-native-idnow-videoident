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

// @ts-expect-error The TypeScript compiler doesn't resolve the relative import path
import pak from '../../../package.json';
import type pakType from '../../package.json';
import {
    applyImplementation,
    applyManifestConfig,
    applyPackage,
    applyPackagingOptionsAndConfigurations,
    applyRepositories,
    applySettings,
} from './withAndroidIdnowVideoIdentSdk';
import { withPodfileUpdate } from './withIosIdnowVideoIdentSdk';

const withIdnowVideoIdentSdk: ConfigPlugin = (expoConfig: ExpoConfig) => {
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

const typedPak = pak as typeof pakType;
export default createRunOncePlugin(withIdnowVideoIdentSdk, typedPak.name, typedPak.version);
