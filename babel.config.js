module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            'module:metro-react-native-babel-preset',
            '@babel/preset-env',
        ],
        plugins: [
            ["module-resolver", {
                "alias": {
                    "^react-native$": "react-native-web",
                },
            }],
        ],
    };
};
