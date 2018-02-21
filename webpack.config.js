const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		'svg-path-transform': './src/svg-path-transform.js',
		'svg-path-transform.min': './src/svg-path-transform.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname),
		library: 'SvgPathTransform',
		libraryTarget: 'umd'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};