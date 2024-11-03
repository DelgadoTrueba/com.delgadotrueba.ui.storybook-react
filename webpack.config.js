const path = require('path');

const prod = false;

const printCompilationMessage = require('./scripts/compilation.config.js');

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'auto',
        clean: true,
        library: {
            // TODO
            name: 'prime-react-lib',
            type: 'umd',
        }
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    }
};