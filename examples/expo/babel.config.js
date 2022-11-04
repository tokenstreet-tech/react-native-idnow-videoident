const path = require('path');
const pak = require('../../package.json');

module.exports = function babelConfig(api) {
    api.cache(true);

    return {
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        // For development, we want to alias the library to the source
                        [pak.name]: path.join(__dirname, '..', pak.source),
                    },
                    extensions: ['.tsx', '.ts', '.js', '.json'],
                },
            ],
            'react-native-reanimated/plugin',
        ],
        presets: ['babel-preset-expo'],
    };
};
