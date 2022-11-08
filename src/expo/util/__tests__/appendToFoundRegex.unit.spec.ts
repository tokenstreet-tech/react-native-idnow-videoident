import { appendToFoundRegex } from '../appendToFoundRegex';

const podfile =
    'require File.join(File.dirname(`node --print "require.resolve(\'expo/package.json\')"`), "scripts/autolinking")\n' +
    'require File.join(File.dirname(`node --print "require.resolve(\'react-native/package.json\')"`), "scripts/react_native_pods")\n' +
    'require File.join(File.dirname(`node --print "require.resolve(\'@react-native-community/cli-platform-ios/package.json\')"`), "native_modules")\n' +
    '\n' +
    "require 'json'\n" +
    "podfile_properties = JSON.parse(File.read(File.join(__dir__, 'Podfile.properties.json'))) rescue {}\n" +
    '\n' +
    "platform :ios, podfile_properties['ios.deploymentTarget'] || '13.0'\n" +
    "install! 'cocoapods',\n" +
    '  :deterministic_uuids => false\n' +
    '\n' +
    "target 'HelloWorld' do\n" +
    '  use_expo_modules!\n' +
    '  config = use_native_modules!\n' +
    '\n' +
    "  use_frameworks! :linkage => podfile_properties['ios.useFrameworks'].to_sym if podfile_properties['ios.useFrameworks']\n" +
    '\n' +
    '  # Flags change depending on the env values.\n' +
    '  flags = get_default_flags()\n' +
    '\n' +
    '  use_react_native!(\n' +
    '    :path => config[:reactNativePath],\n' +
    "    :hermes_enabled => podfile_properties['expo.jsEngine'] == 'hermes',\n" +
    '    :fabric_enabled => flags[:fabric_enabled],\n' +
    '    # An absolute path to your application root.\n' +
    '    :app_path => "#{Pod::Config.instance.installation_root}/..",\n' +
    '    #\n' +
    '    # Uncomment to opt-in to using Flipper\n' +
    '    # Note that if you have use_frameworks! enabled, Flipper will not work\n' +
    "    # :flipper_configuration => !ENV['CI'] ? FlipperConfiguration.enabled : FlipperConfiguration.disabled,\n" +
    '  )\n' +
    '\n' +
    '  post_install do |installer|\n' +
    '    react_native_post_install(\n' +
    '      installer,\n' +
    '      # Set `mac_catalyst_enabled` to `true` in order to apply patches\n' +
    '      # necessary for Mac Catalyst builds\n' +
    '      :mac_catalyst_enabled => false\n' +
    '    )\n' +
    '    __apply_Xcode_12_5_M1_post_install_workaround(installer)\n' +
    '\n' +
    '    # This is necessary for Xcode 14, because it signs resource bundles by default\n' +
    '    # when building for devices.\n' +
    '    installer.target_installation_results.pod_target_installation_results\n' +
    '      .each do |pod_name, target_installation_result|\n' +
    '      target_installation_result.resource_bundle_targets.each do |resource_bundle_target|\n' +
    '        resource_bundle_target.build_configurations.each do |config|\n' +
    "          config.build_settings['CODE_SIGNING_ALLOWED'] = 'NO'\n" +
    '        end\n' +
    '      end\n' +
    '    end\n' +
    '  end\n' +
    '\n' +
    '  post_integrate do |installer|\n' +
    '    begin\n' +
    '      expo_patch_react_imports!(installer)\n' +
    '    rescue => e\n' +
    '      Pod::UI.warn e\n' +
    '    end\n' +
    '  end\n' +
    'end ';
const buildTypeModificationRegex = /use_react_native!\(\n.*\s\)/su;
const buildTypeModification =
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
    '  end\n' +
    '\n';

const modfiedPodfile =
    'require File.join(File.dirname(`node --print "require.resolve(\'expo/package.json\')"`), "scripts/autolinking")\n' +
    'require File.join(File.dirname(`node --print "require.resolve(\'react-native/package.json\')"`), "scripts/react_native_pods")\n' +
    'require File.join(File.dirname(`node --print "require.resolve(\'@react-native-community/cli-platform-ios/package.json\')"`), "native_modules")\n' +
    '\n' +
    "require 'json'\n" +
    "podfile_properties = JSON.parse(File.read(File.join(__dir__, 'Podfile.properties.json'))) rescue {}\n" +
    '\n' +
    "platform :ios, podfile_properties['ios.deploymentTarget'] || '13.0'\n" +
    "install! 'cocoapods',\n" +
    '  :deterministic_uuids => false\n' +
    '\n' +
    "target 'HelloWorld' do\n" +
    '  use_expo_modules!\n' +
    '  config = use_native_modules!\n' +
    '\n' +
    "  use_frameworks! :linkage => podfile_properties['ios.useFrameworks'].to_sym if podfile_properties['ios.useFrameworks']\n" +
    '\n' +
    '  # Flags change depending on the env values.\n' +
    '  flags = get_default_flags()\n' +
    '\n' +
    '  use_react_native!(\n' +
    '    :path => config[:reactNativePath],\n' +
    "    :hermes_enabled => podfile_properties['expo.jsEngine'] == 'hermes',\n" +
    '    :fabric_enabled => flags[:fabric_enabled],\n' +
    '    # An absolute path to your application root.\n' +
    '    :app_path => "#{Pod::Config.instance.installation_root}/..",\n' +
    '    #\n' +
    '    # Uncomment to opt-in to using Flipper\n' +
    '    # Note that if you have use_frameworks! enabled, Flipper will not work\n' +
    "    # :flipper_configuration => !ENV['CI'] ? FlipperConfiguration.enabled : FlipperConfiguration.disabled,\n" +
    '  )\n' +
    '\n' +
    '  post_install do |installer|\n' +
    '    react_native_post_install(\n' +
    '      installer,\n' +
    '      # Set `mac_catalyst_enabled` to `true` in order to apply patches\n' +
    '      # necessary for Mac Catalyst builds\n' +
    '      :mac_catalyst_enabled => false\n' +
    '    )\n' +
    '    __apply_Xcode_12_5_M1_post_install_workaround(installer)\n' +
    '\n' +
    '    # This is necessary for Xcode 14, because it signs resource bundles by default\n' +
    '    # when building for devices.\n' +
    '    installer.target_installation_results.pod_target_installation_results\n' +
    '      .each do |pod_name, target_installation_result|\n' +
    '      target_installation_result.resource_bundle_targets.each do |resource_bundle_target|\n' +
    '        resource_bundle_target.build_configurations.each do |config|\n' +
    "          config.build_settings['CODE_SIGNING_ALLOWED'] = 'NO'\n" +
    '        end\n' +
    '      end\n' +
    '    end\n' +
    '  end\n' +
    '\n' +
    '  post_integrate do |installer|\n' +
    '    begin\n' +
    '      expo_patch_react_imports!(installer)\n' +
    '    rescue => e\n' +
    '      Pod::UI.warn e\n' +
    '    end\n' +
    '  end\n' +
    'end ';

describe('appendToFoundRegex', () => {
    it('should append the new content correctly', () => {
        // Arrange

        // Act
        const result = appendToFoundRegex(podfile, buildTypeModificationRegex, buildTypeModification);

        // Assert
        expect(result).toStrictEqual(modfiedPodfile);
    });
});
