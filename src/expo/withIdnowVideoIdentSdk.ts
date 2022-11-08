import type { ConfigPlugin } from '@expo/config-plugins';
import { createRunOncePlugin } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';

import { typedPak } from './util/typedPak';
import { withIdnowRepositories } from './withAndroidIdnowVideoIdentSdk';
// import { withStaticFrameworkBuildType } from './withIosIdnowVideoIdentSdk';

const withIdnowVideoIdentSdk: ConfigPlugin = (expoConfig: ExpoConfig) => {
    // expoConfig = withStaticFrameworkBuildType(expoConfig);
    expoConfig = withIdnowRepositories(expoConfig);
    return expoConfig;
};

export default createRunOncePlugin(withIdnowVideoIdentSdk, typedPak.name, typedPak.version);
