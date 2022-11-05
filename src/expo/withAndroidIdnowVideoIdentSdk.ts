import { withProjectBuildGradle } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';

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
const searchRegex = /allprojects\s\{\n.*repositories\s\{\n/su;

/**
 * Adds the necessary IDnow repositories to thhe allprojects in the project build gradle
 * @param config
 */
export const withIdnowRepositories = (config: ExpoConfig): ExpoConfig =>
    withProjectBuildGradle(config, (configWithProps) => {
        const projectBuildGradle = configWithProps.modResults.contents;

        // Make sure the project does not have the repositories already
        if (!projectBuildGradle.includes(idnowRepositories)) {
            configWithProps.modResults.contents = projectBuildGradle.replace(searchRegex, (substring) =>
                substring.concat(idnowRepositories)
            );
        }

        return configWithProps;
    });
