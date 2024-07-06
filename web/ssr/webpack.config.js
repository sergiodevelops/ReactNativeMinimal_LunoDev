// @rootProject/web/ssr.webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

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
const entrypointFilePach = path.resolve(webPath, 'ssr/index.tsx');
const htmlTemplateFilePath = path.resolve(templatePath, 'index.html');
// const babelConfigFilePath = path.resolve(webPath, 'babel.config.js');

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
)


/*const {presets, plugins} = require(babelConfigFilePath);
const compileNodeModules = [
    // Add every react-native package that needs compiling
    // 'react-native-gesture-handler',
].map((moduleName) => path.resolve(rootPath, `node_modules/${moduleName}`));*/


const babelLoaderModRules = {
    test: /\.(js|ts)x?$/, // Updated to include .jsx
    // Add every directory that needs to be compiled by Babel during the build.
    include: [
        entrypointFilePach, // Entry file to your application path
        // appFilePath, // Updated to .(js|ts)x? files path
        srcPath, // source code path
        // ...compileNodeModules,
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
// TODO fix this problem
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
    module: {
        rules: [
            babelLoaderModRules,
            imgLoaderModRules,
            svgLoaderModRules,
        ],
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
            directory: publicPath,
        },
        compress: true,
        historyApiFallback: true,
        port: 8083,
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
