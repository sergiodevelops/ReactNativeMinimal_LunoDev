// babel.config.js
module.exports = function (api) {
    api.cache(true);

    const presets = [
        "@babel/preset-typescript",
        "module:metro-react-native-babel-preset",
        ["@babel/preset-env", {"useBuiltIns": "entry", "corejs": "3.22"}],
    ];
    const plugins = [
        ["module-resolver", {
            "alias": {
                "^react-native$": "react-native-web"
            }
        }]
    ];


    return {
        presets,
        plugins,
    };
}
