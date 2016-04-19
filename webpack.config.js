// // webpack.config.js
// var path = require("path");

// module.exports = {
//     entry: './src/entry.js', //演示单入口文件
//     output: {
//         path: path.join(__dirname, 'out'),  //打包输出的路径
//         filename: 'bundle.js',              //打包后的名字
//         publicPath: "./out/"                //html引用路径，在这里是本地地址。
//     }
// };
var path = require("path");
module.exports = {
    entry: path.join(__dirname, 'src/entry.js'),
    output: {
        path: path.join(__dirname, 'out'),
        publicPath: "./out/",
        filename: 'bundle.js'
    },
    // 新添加的module属性
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel"},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    }
};
