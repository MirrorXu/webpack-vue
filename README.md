# webpack 编译

 
###项目命令 
- 使用webpack进行打包   `webpack --progress --hide-modules `


###  使用**extract-text-webpack-plugin** 插件将css文件单独打包

- webpack.config.js

```javascript

const path = require('path');

const Etwp = require('extract-text-webpack-plugin');

const config ={
    entry:{
        main:'./main.js'
    },
    output:{
        path:path.join( __dirname , 'dist'),
        publicPath: '/dist',
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,  // 匹配所有的css文件
                use:Etwp.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            }
        ]
    },
    plugins: [
        new Etwp( 'main.css')
    ]
};


```

### 单文件组件与 vue-loader



### 用于生产环境

- `npm install file-loader  url-loader --save-dev`

- `npm install webpack-merge html-webpack-plugin --save-dev`
