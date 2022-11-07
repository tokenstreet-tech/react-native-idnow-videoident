import type { ExportedConfigWithProps } from '@expo/config-plugins';
import { WarningAggregator, withDangerousMod } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

import { typedPak } from './typedPak';

const bufferEncoding: BufferEncoding = 'utf8';

const editPodfile = (config: ExportedConfigWithProps<unknown>, action: (podfile: string) => string): void => {
    const podfilePath = join(config.modRequest.platformProjectRoot, 'Podfile');
    try {
        const newPodfile = action(readFileSync(podfilePath, bufferEncoding));
        writeFileSync(podfilePath, newPodfile, bufferEncoding);
    } catch (error) {
        WarningAggregator.addWarningIOS(typedPak.name, `Couldn't modified Podfile - ${error}.`);
    }
};

const addLines = (content: string, find: string, offset: number, toAdd: string): string => {
    const lines = content.split('\n');
    const lineIndex = lines.findIndex((line: string) => line.match(find));
    lines.splice(lineIndex + offset, 0, toAdd);

    return lines.join('\n');
};

const buildTypeModification =
    '  $static_library = %w[IDnowSDK Masonry SocketRocket libPhoneNumber-iOS FLAnimatedImage AFNetworking]\n' +
    '\n' +
    '  pre_install do |installer|\n' +
    '    Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}\n' +
    '    installer.pod_targets.each do |pod|\n' +
    '      bt = pod.send(:build_type)\n' +
    '      if $static_library.include?(pod.name)\n' +
    "        puts 'Overriding the build_type to static_framework from static_library for #{pod.name}'\n" +
    '        def pod.build_type\n' +
    '          Pod::BuildType.static_framework\n' +
    '        end\n' +
    '      end\n' +
    '    end\n' +
    '    installer.pod_targets.each do |pod|\n' +
    '      bt = pod.send(:build_type)\n' +
    "      puts '#{pod.name} (#{bt})'\n" +
    "      puts '  linkage: #{bt.send(:linkage)} packaging: #{bt.send(:packaging)}'\n" +
    '    end\n' +
    '  end\n';
const appleSiliconFix =
    '    # https://github.com/expo/expo/issues/15800\n' +
    '    installer.pods_project.targets.each do |target|\n' +
    '      target.build_configurations.each do |config|\n' +
    "        config.build_settings['ONLY_ACTIVE_ARCH'] = 'NO'\n" +
    '      end\n' +
    '    end\n';

export const withStaticFrameworkBuildType = (config: ExpoConfig): ExpoConfig =>
    withDangerousMod(config, [
        'ios',
        (withDangerousModConfig): ExportedConfigWithProps => {
            editPodfile(withDangerousModConfig, (podfile) => {
                podfile = addLines(podfile, 'flags = get_default_flags()', 10, buildTypeModification);
                podfile = addLines(podfile, 'react_native_post_install', 3, appleSiliconFix);
                return podfile;
            });
            return withDangerousModConfig;
        },
    ]);
