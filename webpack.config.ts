const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkIsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports={
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src') // shortcut to reference src folder from anywhere
          }
    },
    devServer: {
        static: './dist',
        port: 8000,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ForkIsCheckerWebpackPlugin(),
    ]
}