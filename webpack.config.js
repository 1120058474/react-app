
const webpack = require('webpack')

const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        filename: 'app.js',
        chunkFilename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },{
                test: /\.less$/,
                use: [{
                  loader: "style-loader" 
                }, {
                  loader: "css-loader" 
                }, {
                  loader: "less-loader"
                }]
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }
            }, {
                test: /\.bundle\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: [{
                    loader: 'bundle-loader',
                    options: {
                        name: 'module-[name]',
                        lazy: true
                    }
                }, {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            ui: path.resolve(__dirname, './src/ui'),
        }
    },
    externals: {
    },
    devServer: {
        // contentBase: './static',
        contentBase: [path.join(__dirname, "./dist")], // 本地服务器 加载页面 所在的目录
        // port:7000,
        host: '192.168.0.123',
        port: 6600,
        //port: serverConfig.port,
        //host: serverConfig.host,
        hot: true, // 服务器热加载
        open:false, // 自动开启浏览器
        inline:true  // 热替换
    },
    plugins: [  // 热更新
        new webpack.HotModuleReplacementPlugin(),
    ],
    mode:'development'
}