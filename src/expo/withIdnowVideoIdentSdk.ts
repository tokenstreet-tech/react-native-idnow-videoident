import type { ConfigPlugin } from '@expo/config-plugins';
import { createRunOncePlugin } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';

// @ts-expect-error The TypeScript compiler doesn't resolve the relative import path
import pak from '../../../package.json';
import type pakType from '../../package.json';
import { addIdnowRepositories } from './withAndroidIdnowVideoIdentSdk';
import { withPodfileUpdate } from './withIosIdnowVideoIdentSdk';

const withIdnowVideoIdentSdk: ConfigPlugin = (expoConfig: ExpoConfig) => {
    expoConfig = addIdnowRepositories(expoConfig);
    expoConfig = withPodfileUpdate(expoConfig);
    return expoConfig;
};

const typedPak = pak as typeof pakType;
export default createRunOncePlugin(withIdnowVideoIdentSdk, typedPak.name, typedPak.version);
