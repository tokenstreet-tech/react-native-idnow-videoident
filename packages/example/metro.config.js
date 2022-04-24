/* eslint-disable sort-keys */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const exclusionList = require('metro-config/src/defaults/exclusionList');
const { getMetroTools } = require('react-native-monorepo-tools');

const monorepoMetroTools = getMetroTools();

module.exports = {
    transformer: {
        getTransformOptions: () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
    // Add additional Yarn workspace package roots to the module map.
    // This allows importing from all the project's packages.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    watchFolders: monorepoMetroTools.watchFolders,
    resolver: {
        // Ensure we resolve nohoist libraries from this directory.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        blockList: exclusionList(monorepoMetroTools.blockList),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        extraNodeModules: monorepoMetroTools.extraNodeModules,
    },
};
