import { withProjectBuildGradle } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';

// Add the following to allprojects/repositories in android/build.gradle
const applyRepositories = (appBuildGradle: string): string => {
    const idnowRepositories =
        '        jcenter() {\n' +
        '            // JCenter is now read-only. Therefore, no new versions are published there any more.\n' +
        '            // We only fetch the necessary dependencies for IDnow from JCenter to avoid loading old dependencies.\n' +
        '            content {\n' +
        '                includeModule("me.relex", "circleindicator")\n' +
        '                includeModule("com.github.barteksc", "android-pdf-viewer")\n' +
        '            }\n' +
        '        }\n' +
        '        maven() {\n' +
        '            url "https://raw.githubusercontent.com/idnow/de.idnow.android/master"\n' +
        '            content {\n' +
        '                includeModule("de.idnow.sdk", "idnow-android-sdk")\n' +
        '                includeModule("de.idnow.insights", "idnow-android-insights-sdk")\n' +
        '            }\n' +
        '        }\n';

    // Make sure the project does not have the repositories already
    if (!appBuildGradle.includes(idnowRepositories)) {
        const searchRegex = /allprojects\s\{\n.*repositories\s\{\n/su;
        return appBuildGradle.replace(searchRegex, (substring) => substring.concat(idnowRepositories));
    }

    return appBuildGradle;
};

export const addIdnowRepositories = (expoConfig: ExpoConfig): ExpoConfig =>
    withProjectBuildGradle(expoConfig, (config) => {
        config.modResults.contents = applyRepositories(config.modResults.contents);
        return config;
    });
