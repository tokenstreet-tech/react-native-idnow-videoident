import type { ConfigPlugin } from '@expo/config-plugins';
import { mergeContents } from '@expo/config-plugins/build/utils/generateCode';

import type { IConfigPluginProps } from './model/IConfigPluginProps';
import { withPodfile } from './util/withPodfile';

const overrideBuildTypeToStaticFrameworkRegex = /flags = get_default_flags\(\)\n/u;
const overrideBuildTypeToStaticFrameworkCode =
    '\n' +
    '  $static_frameworks = %w[IDnowSDK Masonry SocketRocket libPhoneNumber-iOS FLAnimatedImage AFNetworking]\n' +
    '\n' +
    '  pre_install do |installer|\n' +
    '    Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}\n' +
    '    installer.pod_targets.each do |pod|\n' +
    '      bt = pod.send(:build_type)\n' +
    '      if $static_frameworks.include?(pod.name)\n' +
    "        puts 'Overriding the build_type to static_framework from static_library for #{pod.name}'\n" +
    '        def pod.build_type\n' +
    '          Pod::BuildType.static_framework\n' +
    '        end\n' +
    '      end\n' +
    '    end\n' +
    '  end\n';

const appleSiliconFixRegex = /__apply_Xcode_12_5_M1_post_install_workaround\(installer\)\n/u;
const appleSiliconFixCode =
    '\n' +
    '    # https://github.com/expo/expo/issues/15800\n' +
    '    installer.pods_project.targets.each do |target|\n' +
    '      target.build_configurations.each do |config|\n' +
    "        config.build_settings['ONLY_ACTIVE_ARCH'] = 'NO'\n" +
    '      end\n' +
    '    end\n';

/**
 * Modifies the build type for IDnow pods
 * @param config
 * @param overrideBuildTypeToStaticFramework
 * @param appleSiliconFix
 */
export const withStaticFrameworkBuildType: ConfigPlugin<IConfigPluginProps> = (
    config,
    { ios: { overrideBuildTypeToStaticFramework = false, appleSiliconFix = false } = {} }
) =>
    withPodfile(config, (podfile) => {
        if (overrideBuildTypeToStaticFramework)
            podfile = mergeContents({
                anchor: overrideBuildTypeToStaticFrameworkRegex,
                comment: '#',
                newSrc: overrideBuildTypeToStaticFrameworkCode,
                offset: 0,
                src: podfile,
                tag: 'Override build type to static framework',
            }).contents;

        if (appleSiliconFix)
            podfile = mergeContents({
                anchor: appleSiliconFixRegex,
                comment: '#',
                newSrc: appleSiliconFixCode,
                offset: 0,
                src: podfile,
                tag: 'Apple silicon fix',
            }).contents;

        return podfile;
    });
