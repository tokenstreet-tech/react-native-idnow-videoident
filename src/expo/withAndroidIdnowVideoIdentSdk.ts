import type { ConfigPlugin } from '@expo/config-plugins';
import { withAppBuildGradle, withProjectBuildGradle } from '@expo/config-plugins';
import { mergeContents } from '@expo/config-plugins/build/utils/generateCode';

import type { IConfigPluginProps } from './model/IConfigPluginProps';
import { getConfigPluginTag } from './util/getConfigPluginTag';

const repositoriesRegex = /maven(?:\s+)?\{(?:\s+)?url(?:\s+)?'https:\/\/www.jitpack.io'(?:\s+)?\}/u;
const repositoriesCode =
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
    '        }';

const excludeDuplicateClassesRegex = /android(?:\s+)?\{/u;
const excludeDuplicateClassesCode =
    '    configurations {\n' +
    '        all*.exclude module: "bcprov-jdk15to18"\n' +
    '        all*.exclude module: "bcutil-jdk15to18"\n' +
    '        all*.exclude module: "pdfium-android"\n' +
    '        all*.exclude module: "AndroidPdfViewerV1"\n' +
    '    }';

/**
 * Adds the necessary IDnow repositories to the allprojects in the project build gradle
 * @param config
 * @param excludeDuplicateClasses
 */
export const withIdnowRepositories: ConfigPlugin<IConfigPluginProps> = (
    config,
    { android: { excludeDuplicateClasses = false } = {} },
) => {
    config = withProjectBuildGradle(config, (configWithProps) => {
        configWithProps.modResults.contents = mergeContents({
            anchor: repositoriesRegex,
            comment: '//',
            newSrc: repositoriesCode,
            offset: 1,
            src: configWithProps.modResults.contents,
            tag: getConfigPluginTag('Repositories'),
        }).contents;

        return configWithProps;
    });

    if (excludeDuplicateClasses)
        config = withAppBuildGradle(config, (configWithProps) => {
            configWithProps.modResults.contents = mergeContents({
                anchor: excludeDuplicateClassesRegex,
                comment: '//',
                newSrc: excludeDuplicateClassesCode,
                offset: 1,
                src: configWithProps.modResults.contents,
                tag: getConfigPluginTag('Excluded duplicate classes'),
            }).contents;

            return configWithProps;
        });

    return config;
};
