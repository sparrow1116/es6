/**
 * Created by zhangyj on 2017/9/26.
 */

module.exports = {
    entry: './src/co.js',
    //entry: './src/async.js',
    //entry: './src/promise.js',
    output: {
        path: __dirname,
        filename: './bin/app.nw.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}