// web/webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");


const rootPath = path.resolve(__dirname, '../');
const webDistOutputPath = path.resolve(rootPath, 'docs');
const webDistOutputFileName = 'bundle.js';

const webPath = path.resolve(rootPath, 'web');
const entrypointFilePach = path.resolve(webPath, 'index.web.ts');
const webPublicPath = path.resolve(webPath, 'public');
const htmlTemplateFilePath = path.resolve(webPublicPath, 'index.html');

const srcPath = path.resolve(rootPath, 'src');
const componentsPath = path.resolve(srcPath, 'components');
const webAppFilePath = path.resolve(srcPath, 'App.tsx');
const babelConfigFilePath = path.resolve(rootPath, 'babel.config.js');

const htmlFileName = 'index.html';


console.log(
    '\nentrypointFilePach ', entrypointFilePach,
    '\nhtmlFileName ', htmlFileName,
    '\nhtmlTemplateFilePath ', htmlTemplateFilePath,
    '\nwebAppFilePath ', webAppFilePath,
    '\nbabelConfigFilePath ', babelConfigFilePath,
    '\nwebPublicPath ', webPublicPath,
    '\nwebDistOutputPath ', webDistOutputPath,
)


const {presets, plugins} = require(babelConfigFilePath);
const compileNodeModules = [
    // Add every react-native package that needs compiling
    // 'react-native-gesture-handler',
].map((moduleName) => path.resolve(rootPath, `node_modules/${moduleName}`));
const babelLoaderConfiguration = {
    test: /\.(js|ts)x?$/, // Updated to include .jsx
    // Add every directory that needs to be compiled by Babel during the build.
    include: [
        entrypointFilePach, // Entry file to your application
        webAppFilePath, // Updated to .(js|ts)x? files
        srcPath, // source code path
        componentsPath, // source code components path
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
            name: '[name].[ext]',
            esModule: false,
        },
    },
};


module.exports = {
    entry: {
        app: entrypointFilePach,
    },
    output: {
        path: webDistOutputPath,
        publicPath: "/",
        filename: webDistOutputFileName,
    },
    resolve: {
        extensions: [
            '.web.js', '.web.jsx', '.js', '.jsx',
            '.web.ts', '.web.tsx', '.ts', '.tsx',
        ],
        alias: {
            'react-native$': 'react-native-web'
        },
    },
    devServer: {
        static: {
            directory: webPublicPath,
        },
        compress: true,
        historyApiFallback: true,
        port: 8585,
    },
    module: {
        rules: [
            babelLoaderConfiguration,
            imageLoaderConfiguration,
            svgLoaderConfiguration,
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: htmlTemplateFilePath,
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.DefinePlugin({
        //     __DEV__: JSON.stringify(true),
        // }),
    ],
}
