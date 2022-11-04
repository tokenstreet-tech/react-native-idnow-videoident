const path = require('path');
const pak = require('../package.json');

// TODO: Make PR to disabled return types in JS files
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = function babelConfig(api) {
    api.cache(true);

    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    extensions: ['.tsx', '.ts', '.js', '.json'],
                    alias: {
                        // For development, we want to alias the library to the source
                        [pak.name]: path.join(__dirname, '..', pak.source),
                    },
                },
            ],
            'react-native-reanimated/plugin',
        ],
    };
};
