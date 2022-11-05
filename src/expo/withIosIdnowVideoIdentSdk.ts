import type { ExportedConfigWithProps } from '@expo/config-plugins';
import { WarningAggregator, withDangerousMod } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const bufferEncoding: BufferEncoding = 'utf8';

const editPodfile = (config: ExportedConfigWithProps<unknown>, action: (podfile: string) => string): void => {
    const podfilePath = join(config.modRequest.platformProjectRoot, 'Podfile');
    try {
        const podfile = action(readFileSync(podfilePath, bufferEncoding));
        writeFileSync(podfilePath, podfile, bufferEncoding);
    } catch (error) {
        WarningAggregator.addWarningIOS('idnow', `Couldn't modified Podfile - ${error}.`);
    }
};

const addLines = (content: string, find: string, offset: number, toAdd: Array<string>): string => {
    const lines = content.split('\n');

    let lineIndex = lines.findIndex((line: string) => line.match(find));

    for (const newLine of toAdd) {
        lines.splice(lineIndex + offset, 0, newLine);
        lineIndex += 1;
    }

    return lines.join('\n');
};

export const withStaticFrameworkBuildType = (config: ExpoConfig): ExpoConfig =>
    withDangerousMod(config, [
        'ios',
        (withDangerousModConfig): ExportedConfigWithProps => {
            editPodfile(withDangerousModConfig, (podfile) => {
                podfile = addLines(podfile, ':deterministic_uuids => false', 1, [
                    '',
                    "plugin 'cocoapods-user-defined-build-types'",
                    'enable_user_defined_build_types!',
                ]);
                podfile = addLines(podfile, 'flags = get_default_flags()', 1, [
                    '',
                    "  pod 'IDnowSDK', '5.3.0', build_type: :static_framework",
                ]);
                // https://github.com/expo/expo/issues/15800
                podfile = addLines(podfile, 'react_native_post_install', 2, [
                    '',
                    '    installer.pods_project.targets.each do |target|',
                    '      target.build_configurations.each do |config|',
                    '        config.build_settings["ONLY_ACTIVE_ARCH"] = "NO"',
                    '      end',
                    '    end',
                ]);
                return podfile;
            });
            return withDangerousModConfig;
        },
    ]);
