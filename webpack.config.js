const path = require( 'path' );

// webpack 基本配置, 使用css-loader style-loader 对css文件进行解析

// const config ={
//     entry:{
//         main:'./main.js'
//     },
//     output:{
//         path:path.join( __dirname , 'dist'),
//         publicPath: '/dist',
//         filename:'main.js'
//     },
//     module:{
//         rules:[
//             {
//                 test:/\.css$/,  // 匹配所有的css文件
//                 use:['style-loader' , 'css-loader']
//             }
//         ]
//     }
// };




// 使用extract-text-webpack-plugin 插件，css-loader style-loader
//
// const Etwp = require('extract-text-webpack-plugin');
//
// const config ={
//     entry:{
//         main:'./main.js'
//     },
//     output:{
//         path:path.join( __dirname , 'dist'),
//         publicPath: '/dist',
//         filename:'main.js'
//     },
//     module:{
//         rules:[
//             {
//                 test:/\.css$/,  // 匹配所有的css文件
//                 use:Etwp.extract({
//                     use:'css-loader',
//                     fallback:'style-loader'
//                 })
//             }
//         ]
//     },
//     plugins: [
//         new Etwp( 'main.css')
//     ]
// };







// 单文件组件与 vue-loader

const Etwp = require('extract-text-webpack-plugin');
const config ={
    entry:{
        main:'./main'
    },
    output:{
        path: path.join(__dirname, 'dist'),
        publicPath:'/dist/',
        filename:'main.js'
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                   loaders:{
                       css:Etwp.extract({
                           use:'css-loader',
                           fallback:'vue-style-loader'
                       })
                   }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/   //忽略不需要编译的文件夹
            },
            {
                test:/\.css$/,
                use:Etwp.extract({
                    use:'css-loader?minimize',
                    fallback:'style-loader'
                })
            },
            {
                test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'  // 如果文件小于1024字节，会转为base64 加载，不会打包成静态文件
            }
        ]
    },
    plugins:[
        new Etwp( 'main.css')
    ]

};




module.exports = config;