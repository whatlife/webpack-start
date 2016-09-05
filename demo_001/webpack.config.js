/**
 * Created by liangyl on 2016/9/5 0005.
 */

var Webpack = require('webpack');

module.exports =  {
    entry: ["./entry.js"],
    output: {
        path: __dirname + "/out",
        filename: "bundle.js"
    },
    module: {
        loaders:[{
            test: /\.css$/,
            loader: "style!css"
        },{
            test: /\.(png|jpg)$/,
            loader: "url-loader?limit=8192"
        }]

    },
    plugins: [
        new Webpack.BannerPlugin("这是一个注释！！！！！@@@@@@@@@@@@@@@@@@@@@")
    ]
};