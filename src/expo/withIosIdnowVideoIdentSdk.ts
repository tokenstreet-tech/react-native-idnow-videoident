import type { ExportedConfigWithProps } from '@expo/config-plugins';
import { WarningAggregator, withDangerousMod } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';
import { promises } from 'fs';
import { join } from 'path';

const editPodfile = async (
    config: ExportedConfigWithProps<unknown>,
    action: (podfile: string) => string
): Promise<void> => {
    const podfilePath = join(config.modRequest.platformProjectRoot, 'Podfile');
    try {
        const podfile = action(await promises.readFile(podfilePath, 'utf8'));
        await promises.writeFile(podfilePath, podfile, 'utf8');
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

export const withPodfileUpdate = (config: ExpoConfig): ExpoConfig =>
    withDangerousMod(config, [
        'ios',
        async (withDangerousModConfig) => {
            await editPodfile(withDangerousModConfig, (podfile) => {
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
