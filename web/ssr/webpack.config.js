// @rootProject/web/ssr.webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// rootPath is a project root directory and is
// very important reference for the next paths definitions
const rootPath = path.resolve(__dirname, '../../');

const webDistOutputPath = path.resolve(rootPath, 'docs');

const srcPath = path.resolve(rootPath, 'src');
const appPath = path.resolve(srcPath, 'app');
const appFilePath = path.resolve(appPath, 'App.tsx');

const platformPath = path.resolve(srcPath, 'platform');
const webPath = path.resolve(platformPath, 'web');
const templatePath = path.resolve(webPath, 'template');
const entrypointFilePach = path.resolve(webPath, 'ssr/index.web.tsx');
const htmlTemplateFilePath = path.resolve(templatePath, 'index.html');

const publicPath = path.resolve(rootPath, 'public');
const htmlFileName = 'index.html';
const webDistOutputFileName = 'bundle.js';
const reactNativeUncompiledFilesPath = path.resolve(rootPath, 'node_modules/react-native-uncompiled')

console.log(
    '\nentrypointFilePach ', entrypointFilePach,
    '\nhtmlFileName ', htmlFileName,
    '\nhtmlTemplateFilePath ', htmlTemplateFilePath,
    '\nappFilePath ', appFilePath,
    '\npublicPath ', publicPath,
    '\nwebDistOutputPath ', webDistOutputPath,
);


const babelLoaderModRules = {
    test: /\.(js|ts)x?$/, // Updated to include .jsx
    // Add every directory that needs to be compiled by Babel during the build.
    include: [
        entrypointFilePach, // Entry file to your application path
        srcPath, // source code path
        reactNativeUncompiledFilesPath, // react-native-uncompiled files: https://necolas.github.io/react-native-web/docs/multi-platform/
    ],
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
            presets: ['module:metro-react-native-babel-preset'],
            // Re-write paths to import only the modules needed by the app
            plugins: ['react-native-web']
        },
    },
};

const svgLoaderModRules = {
    test: /\.svg$/,
    use: [
        {
            loader: "@svgr/webpack",
        },
    ],
};

const imgLoaderModRules = {
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
        clean: true,
        path: webDistOutputPath,
        filename: webDistOutputFileName,
        // publicPath: "/",
    },

    resolve: {
        // https://necolas.github.io/react-native-web/docs/multi-platform/
        // If you're working on a multi-platform React Native app, web-specific
        // module implementations should be written in files using the extension
        // Example: `.web.tsx`.
        extensions: [
            '.web.tsx', '.web.ts', '.tsx', '.ts',
            '.web.jsx', '.web.js', '.jsx', '.js',
            '.json',
        ],
        // This will only alias the exact import "react-native"
        alias: {
            'react-native$': 'react-native-web'
        },
    },

    devServer: {
        static: {
            directory: publicPath,
        },
        compress: true,
        historyApiFallback: true,
        port: 8083,
        open: true,
        hot: true, // true by default +v4.0.0 webpack version

    },

    module: {
        rules: [
            babelLoaderModRules,
            imgLoaderModRules,
            svgLoaderModRules,
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: htmlTemplateFilePath,
        }),
        new CopyPlugin({
            patterns: [
                { from: imagesPath, to: "images" },
            ],
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
}
