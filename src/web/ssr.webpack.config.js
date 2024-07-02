// web/webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

// rootPath is a project root directory and is
// very important reference for the next paths definitions
const rootPath = path.resolve(__dirname, '../../');

const webDistOutputPath = path.resolve(rootPath, 'docs');
const webDistOutputFileName = 'bundle.js';

const srcPath = path.resolve(rootPath, 'src');
const entrypointFilePach = path.resolve(srcPath, 'index.ssr.web.tsx');
const appPath = path.resolve(srcPath, 'app');
const componentsPath = path.resolve(srcPath, 'components');

const webPath = path.resolve(srcPath, 'web');
const webPublicPath = path.resolve(webPath, 'public');
const htmlTemplateFilePath = path.resolve(webPublicPath, 'index.html');

const babelConfigFilePath = path.resolve(rootPath, 'babel.config.js');
const appFilePath = path.resolve(appPath, 'App.tsx');

const htmlFileName = 'index.html';


console.log(
    '\nentrypointFilePach ', entrypointFilePach,
    '\nhtmlFileName ', htmlFileName,
    '\nhtmlTemplateFilePath ', htmlTemplateFilePath,
    '\nappFilePath ', appFilePath,
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
        appFilePath, // Updated to .(js|ts)x? files
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
const stylesCssAndSassLoaderConfiguration = {
    test: /\.s[ac]ss$/i,
    use: [
        // crea il tag 'style nel DOM in cui iniziare il codice
        'style-loader',
        // Converte il codice css in moduo commonJs per poterlo importare
        'css-loader',
        // Compila codice Sass in css
        'sass-loader'
    ]
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
            '.js', '.jsx',
            '.ssr.web.tsx', '.ts', '.tsx',
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
            stylesCssAndSassLoaderConfiguration,
            babelLoaderConfiguration,
            imageLoaderConfiguration,
            svgLoaderConfiguration,
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
