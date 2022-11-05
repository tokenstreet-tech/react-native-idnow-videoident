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

// Updating iOS...
export const withPodfileUpdate = (config: ExpoConfig) =>
    withDangerousMod(config, [
        'ios',
        async (config) => {
            await editPodfile(config, (podfile) => {
                // Fix for an error taken from here
                // https://dev.to/kylefoo/xcode-12-new-build-system-warns-multiple-commands-produce-assets-car-56im
                // solution (2)
                podfile = addLines(podfile, "install! 'cocoapods', deterministic_uuids: false", 1, [
                    "plugin 'cocoapods-user-defined-build-types'",
                    'enable_user_defined_build_types!',
                ]);
                podfile = addLines(podfile, 'config = use_native_modules!', 1, [
                    "pod 'IDnowSDK', '5.3.0', build_type: :static_framework",
                ]);

                // Fix from https://github.com/idnow/de.idnow.ios#cocoapods--xcode-9
                podfile = addLines(podfile, 'react_native_post_install', 2, [
                    '',
                    // 'post_install do |installer|', // this was used before a similar section started being included on the podFile
                    `    copy_pods_resources_path = "Pods/Target Support Files/Pods-${config.modRequest.projectName}/Pods-${config.modRequest.projectName}-resources.sh"`, // '	string_to_replace = \'--compile "${BUILT_PRODUCTS_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}"\'',
                    '    string_to_replace = \'if [[ $line != "${PODS_ROOT}*" ]]; then\'', // '	assets_compile_with_app_icon_arguments = \'--compile "${BUILT_PRODUCTS_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}" --app-icon "${ASSETCATALOG_COMPILER_APPICON_NAME}" --output-partial-info-plist "${BUILD_DIR}/assetcatalog_generated_info.plist"\'',
                    '    assets_compile_with_app_icon_arguments = \'if [[ $line != "${PODS_ROOT}*" && $line != *"Sample"* ]]; then\'',
                    '    text = File.read(copy_pods_resources_path)',
                    '    new_contents = text.gsub(string_to_replace, assets_compile_with_app_icon_arguments)',
                    '    File.open(copy_pods_resources_path, "w") {|file| file.puts new_contents }',
                    // 'end', // this was used before a similar section started being included on the podFile
                    '',
                ]);
                return podfile;
            });
            return config;
        },
    ]);
