const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

console.warn("Webpack running in production mode");

const plugins = [
    new webpack.DllReferencePlugin({
        context: '.',
        manifest: require('./dist/vendor-manifest.json')
    }),

    new AddAssetHtmlPlugin({
        filepath: './dist/vendor.bundle.js',
        publicPath: "",
        outputPath: "",
        hash: true,
        includeSourcemap: false
    }),

    new HtmlWebpackPlugin({
        template: 'index.template.ejs',
        hash: true,
        title: 'react'
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new ExtractTextPlugin("styles.css"),

    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'version': JSON.stringify(require("./package.json").version)
    }),

    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: true,
        output: {
            comments: false
        },
        compress: {
            drop_console: true,
            warnings: false
        }
    })
];

module.exports = {
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        './src/css/styles.css',
        './src/index.js'
    ],

    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: plugins
};
