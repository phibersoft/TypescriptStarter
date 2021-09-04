const path = require('path');
const DotEnv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'main.ts'),
    target: 'node',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new DotEnv()
    ]
}