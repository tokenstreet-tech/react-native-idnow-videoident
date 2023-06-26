const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const escape = require('escape-string-regexp');
const blacklist = require('metro-config/src/defaults/exclusionList');
const path = require('path');

const pak = require('../../package.json');
const modules = Object.keys({ ...pak.peerDependencies });

const root = path.resolve(__dirname, '../..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    projectRoot: __dirname,
    /*
     * We need to make sure that only one version is loaded for peerDependencies
     * So we blacklist them at the root, and alias them to the versions in example's node_modules
     */
    resolver: {
        blacklistRE: blacklist(
            modules.map((module) => new RegExp(`^${escape(path.join(root, 'node_modules', module))}\\/.*$`, 'u'))
        ),
        extraNodeModules: modules.reduce((acc, name) => {
            acc[name] = path.join(__dirname, 'node_modules', name);
            return acc;
        }, {}),
    },
    watchFolders: [root],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
