import type { ExportedConfigWithProps } from '@expo/config-plugins';
import { WarningAggregator, withDangerousMod } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

import { typedPak } from './typedPak';

const filename = 'Podfile';
const bufferEncoding: BufferEncoding = 'utf8';

export const withPodfile = (config: ExpoConfig, action: (podfile: string) => string): ExpoConfig =>
    withDangerousMod(config, [
        'ios',
        (withDangerousModConfig): ExportedConfigWithProps => {
            const podfilePath = join(withDangerousModConfig.modRequest.platformProjectRoot, filename);
            try {
                const editedPodfile = action(readFileSync(podfilePath, bufferEncoding));
                writeFileSync(podfilePath, editedPodfile, bufferEncoding);
            } catch (error) {
                WarningAggregator.addWarningIOS(typedPak.name, `Couldn't modified Podfile - ${error}`);
            }
            return withDangerousModConfig;
        },
    ]);
