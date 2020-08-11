const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    mode: 'production'
})