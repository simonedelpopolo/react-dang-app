import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { dirname, resolve } from 'path'

const __dirname = dirname( new URL( import.meta.url ).pathname )

let web_pack
// eslint-disable-next-line no-unused-vars
export default web_pack = {
    entry: {
        'entrypoint': './src/entrypoint.jsx',
        'ReactDangApp': './src/ReactDangApp.jsx',
        'Index': './src/components/Index.jsx',
        'Contacts': './src/components/Contacts.jsx',
        'Footer': './src/components/Footer/Footer.jsx',
        'Header': './src/components/Header/Header.jsx',
        'Links': './src/components/Header/Links/Links.jsx',
    },
    devtool: 'inline-source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/env',
                        '@babel/react',
                    ],
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                    name: '/assets/images/[contenthash].[ext]',
                },
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            }
        ],
    },
    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx',
        ],
    },
    output: {
        path: resolve( __dirname, 'public/react-dang/' ),
        filename: '[contenthash].[name].js',
        clean: true,
        publicPath: '/react-dang',
    },
    plugins: [
        new HtmlWebpackPlugin( {
            title: 'React Dang App',
            // Load a custom template (lodash by default)
            template: './src/template/html/index.ejs',
            filename: resolve( __dirname, 'public/index.html' )
        } ),
        new MiniCssExtractPlugin( {
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[id].[contenthash].css',
        } ),
        new CssMinimizerPlugin()
    ],
}
