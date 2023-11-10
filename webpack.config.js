const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './main.js',
    },

    plugins: [new HtmlWebpackPlugin(
        {title: 'Custom Template', template: 'src/index.html'}
    )],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    port: 8080,
  },

};

