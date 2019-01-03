const path = require('path');

module.exports = {
    // 基本路径
    baseUrl: './',
    // 输出文件目录
    outputDir: 'dist',
    devServer:{//代理
        proxy: {
            '/uploadImg': {
                target: 'http://pingan.suoteng.net/api/pingan/uploadImg',  // target host
                changeOrigin: true  // needed for virtual hosted sites
            }
        }
    },
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
                data: `@import "@/assets/style/bg-image.scss";`
            }
        }
    }
};
