import type { ConfigPlugin } from '@expo/config-plugins';
import { createRunOncePlugin } from '@expo/config-plugins';

import type { IConfigPluginProps } from './model/IConfigPluginProps';
import { typedPak } from './util/typedPak';
import { withIdnowRepositories } from './withAndroidIdnowVideoIdentSdk';

const withIdnowVideoIdentSdk: ConfigPlugin<IConfigPluginProps> = (expoConfig, props) => {
    expoConfig = withIdnowRepositories(expoConfig, props);
    return expoConfig;
};

export default createRunOncePlugin(withIdnowVideoIdentSdk, typedPak.name, typedPak.version);
