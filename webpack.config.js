const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rootPath = path.resolve(__dirname);
const webPath = path.resolve(rootPath, 'web/public/index.html');
const webSrcPath = path.resolve(webPath, 'src');
const webComponentsPath = path.resolve(webSrcPath, 'components');
const webPublicPath = path.resolve(webPath, 'public');
const webOutputPath = path.resolve(rootPath, 'docs');

const entrypointFile = path.resolve(rootPath, 'index.web.js');
const htmlFile = path.resolve(webPublicPath, 'index.html');
const webAppFile = path.resolve(webSrcPath, 'App.jsx');


const { presets, plugins } = require(`${rootPath}/babel.config.js`);
const compileNodeModules = [
    // Add every react-native package that needs compiling
    // 'react-native-gesture-handler',
].map((moduleName) => path.resolve(rootPath, `node_modules/${moduleName}`));
const babelLoaderConfiguration = {
    test: /\.(js|jsx|ts|tsx)$/, // Updated to include .jsx
    // Add every directory that needs to be compiled by Babel during the build.
    include: [
        path.resolve(entrypointFile), // Entry to your application
        path.resolve(webAppFile), // Updated to .jsx
        path.resolve(webSrcPath),
        path.resolve(webComponentsPath),
        ...compileNodeModules,
    ],
    use: {
        loader: "babel-loader",
        options: {
            cacheDirectory: true,
            presets,
            plugins,
        },
    },
};

const svgLoaderConfiguration = {
    test: /\.svg$/,
    use: [
        {
            loader: "@svgr/webpack",
        },
    ],
};

const imageLoaderConfiguration = {
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
        loader: "url-loader",
        options: {
            name: "[name].[ext]",
        },
    },
};

const tsLoaderConfiguration = {
    test: /\.(ts)x?$/,
    exclude: /node_modules|\.d\.ts$/, // this line as well
    use: {
        loader: 'ts-loader',
        options: {
            compilerOptions: {
                noEmit: false, // this option will solve the issue
            },
        },
    },
};

module.exports = {
    entry: {
        app: path.join(__dirname, "index.web.js"),
    },
    output: {
        path: webOutputPath,
        publicPath: webPublicPath,
        filename: "rnw.bundle.js",
    },
    resolve: {
        extensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".web.js", ".js"],
        alias: {
            "react-native$": "react-native-web",
        },
    },
    module: {
        rules: [
            babelLoaderConfiguration,
            imageLoaderConfiguration,
            svgLoaderConfiguration,
            tsLoaderConfiguration,
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(htmlFile),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(true),
        }),
    ],
}
