import type { ConfigPlugin } from '@expo/config-plugins';

import { withIdnowRepositories } from './withAndroidIdnowVideoIdentSdk';
const pak = require('../../../package.json');
import { createRunOncePlugin } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';

import { withStaticFrameworkBuildType } from './withIosIdnowVideoIdentSdk';

const withIdnowVideoIdentSdk: ConfigPlugin = (expoConfig: ExpoConfig) => {
    expoConfig = withStaticFrameworkBuildType(expoConfig);
    expoConfig = withIdnowRepositories(expoConfig);
    return expoConfig;
};

const typedPack: { name: string; version: string } = pak;
export default createRunOncePlugin(withIdnowVideoIdentSdk, typedPack.name, typedPack.version);
