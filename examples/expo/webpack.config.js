const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { resolver } = require('./metro.config');

const root = path.resolve(__dirname, '..');
const nodeModules = path.join(__dirname, 'node_modules');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = async function webpackConfig(env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    config.module.rules.push({
        include: path.resolve(root, 'src'),
        test: /\.(?<fileExtension>js|jsx|ts|tsx)$/u,
        use: 'babel-loader',
    });

    /*
     * We need to make sure that only one version is loaded for peerDependencies
     * So we alias them to the versions in example's node_modules
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    Object.assign(config.resolve.alias, {
        ...resolver.extraNodeModules,
        'react-native-web': path.join(nodeModules, 'react-native-web'),
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
};
