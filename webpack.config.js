var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './client/index.js',
        './client/style/style.scss',
    ],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    module:{
        loaders: [
            { test: /\.js$/,
              loaders: [`babel-loader?${JSON.stringify({
                  cacheDirectory: true,
                  presets: ['es2015', 'react', 'stage-0'],
              })}`],
              exclude: /node_modules/
            },
            {
              test:  [/\.css$/,/\.scss$/],
              loaders:["style-loader","css-loader","sass-loader"]
            },
        ],
    },

};
