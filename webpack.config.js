const path = require( 'path' );
const etwp = require('extract-text-webpack-plugin');


const config ={
    entry:{
        main:'./main'
    },
    output:{
        path: path.join(__dirname, 'dist'),
        publicPath:'/dist',
        filename:'main.js'
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                   loaders:{
                       css:etwp.extract({
                           use:'css-loader',
                           fallback:'vue-style-loader'
                       })
                   }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:etwp.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            }
        ]
    },
    plugins:[
        new etwp( 'main.css')
    ]

};

module.exports = config;