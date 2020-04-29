module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'asstes': '@/assets',
                'components': '@/components',
                'views': '@/views',

            }
        },

    },
    publicPath: './',
    // devServer: {
    //     // 设置代理http://api-234.redrock.team/wuyitools/ http://2018211259.natapp1.cc/
    //     proxy: {
    //         "/api": {
    //             target: "http://2018211259.natapp1.cc/", // 域名
    //             ws: true, // 是否启用websockets
    //             changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
    //             pathRequiresRewrite: {
    //                 "^/api": ""
    //             }
    //         }
    //     }
    // }

}