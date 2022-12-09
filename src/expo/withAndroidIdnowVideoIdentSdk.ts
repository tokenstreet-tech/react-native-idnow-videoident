import { withAppBuildGradle, withProjectBuildGradle } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';

import { appendToFoundRegex } from './util/appendToFoundRegex';

const idnowRepositoriesRegex = /allprojects\s\{\n.*repositories\s\{\n/su;
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

const excludeDuplicateClassesRegex = /allprojects\s\{\n.*repositories\s\{\n/su;
const excludeDuplicateClasses =
    '    configurations {\n' +
    '        all*.exclude module: "bcprov-jdk15to18"\n' +
    '        all*.exclude module: "bcutil-jdk15to18"\n' +
    '        all*.exclude module: "pdfium-android"\n' +
    '        all*.exclude module: "android-pdf-viewer"\n' +
    '    }\n';

/**
 * Adds the necessary IDnow repositories to the allprojects in the project build gradle
 * @param config
 */
export const withIdnowRepositories = (config: ExpoConfig): ExpoConfig => {
    const configWithIdnowRepositories = withProjectBuildGradle(config, (configWithProps) => {
        configWithProps.modResults.contents = appendToFoundRegex(
            configWithProps.modResults.contents,
            idnowRepositoriesRegex,
            idnowRepositories
        );

        return configWithProps;
    });

    return withAppBuildGradle(configWithIdnowRepositories, (configWithProps) => {
        configWithProps.modResults.contents = appendToFoundRegex(
            configWithProps.modResults.contents,
            excludeDuplicateClassesRegex,
            excludeDuplicateClasses
        );

        return configWithProps;
    });
};
