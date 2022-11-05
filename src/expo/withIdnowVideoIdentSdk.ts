import type { ConfigPlugin } from '@expo/config-plugins';
import { createRunOncePlugin } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';

import { withIdnowRepositories } from './withAndroidIdnowVideoIdentSdk';
import { withStaticFrameworkBuildType } from './withIosIdnowVideoIdentSdk';

const pak = require('../../../package.json');

const withIdnowVideoIdentSdk: ConfigPlugin = (expoConfig: ExpoConfig) => {
    expoConfig = withStaticFrameworkBuildType(expoConfig);
    expoConfig = withIdnowRepositories(expoConfig);
    return expoConfig;
};

const typedPack: { name: string; version: string } = pak;
export default createRunOncePlugin(withIdnowVideoIdentSdk, typedPack.name, typedPack.version);
