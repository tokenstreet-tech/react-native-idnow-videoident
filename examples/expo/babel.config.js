const path = require('path');
const pak = require('../../package.json');

module.exports = function babelConfig(api) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    api.cache(true);

    return {
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        // For development, we want to alias the library to the source
                        [pak.name]: path.join(__dirname, '..', '..', pak.source),
                    },
                    extensions: ['.tsx', '.ts', '.js', '.json'],
                },
            ],
        ],
        presets: ['babel-preset-expo'],
    };
};
