const webpack = require('webpack');
module.exports = {
    // 基本路径
    baseUrl: './',
    // 输出文件目录
    outputDir: 'dist',
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
                data: `@import "@/assets/style/bg-image.scss";`
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery'
            })
        ]
    }
};
