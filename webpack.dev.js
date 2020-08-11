const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const dir = process.cwd()

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true
    }
})