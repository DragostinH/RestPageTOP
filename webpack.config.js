const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        header: './src/header.js',
        nav: './src/nav.js',
        div: './src/div.js',

    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {

        rules: [

            {

                test: /\.css$/i,

                use: ['style-loader', 'css-loader'],

            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                type: 'asset/resource',

            },

        ],

    },
};