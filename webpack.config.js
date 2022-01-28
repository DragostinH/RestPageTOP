const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/website.js',
        header: './src/header.js',
        nav: './src/nav.js',
        div: './src/div.js',
        footer: './src/footer.js',
        article:'./src/article.js',
        imagesArray:'./src/imagesArray.js',
        aboutUs:'./src/aboutUs.js',
        website:'./src/website.js',
        contactUs:'./src/contactUs.js',
        menu:'./src/menu.js',

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