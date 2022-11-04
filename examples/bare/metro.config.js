const path = require('path');
const blacklist = require('metro-config/src/defaults/exclusionList');
const escape = require('escape-string-regexp');
const pak = require('../../package.json');

const root = path.resolve(__dirname, '..');

const modules = Object.keys({...pak.peerDependencies});

module.exports = {
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
    transformer: {
        getTransformOptions: () => ({ transform: { experimentalImportSupport: false, inlineRequires: true } }),
    },
    watchFolders: [root],
};
