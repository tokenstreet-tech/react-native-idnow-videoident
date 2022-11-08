import type { ExpoConfig } from '@expo/config-types';

import { appendToFoundRegex } from './util/appendToFoundRegex';
import { withPodfile } from './util/withPodfile';

const buildTypeModificationRegex = /use_react_native!\(\n.*\s\)\n/su;
const buildTypeModification =
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
const appleSiliconFix =
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
 */
export const withStaticFrameworkBuildType = (config: ExpoConfig): ExpoConfig =>
    withPodfile(config, (podfile) => {
        podfile = appendToFoundRegex(podfile, buildTypeModificationRegex, buildTypeModification);
        podfile = appendToFoundRegex(podfile, appleSiliconFixRegex, appleSiliconFix);

        return podfile;
    });
