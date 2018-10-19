const path = require('path');
const paths = require('./paths');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: paths.appIndexJs,
	output: {
		filename: 'main.js',
		path: paths.productDist
	},
	mode: 'development',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [ 'file-loader' ]
			}
		]
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
		// new CleanWebpackPlugin([ 'dist' ]),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: paths.appHtml,
			inject: true
		}),
		new webpack.HotModuleReplacementPlugin()
		// new UglifyJsPlugin({
		// 	parallel:true,
		// 	uglifyOptions: {
		// 		ie8: false,
		// 		ecma: 8,
		// 		// parse: { ...options },
		// 		mangle: {
		// 			// ...options,
		// 			properties: {
		// 				// mangle property options
		// 			}
		// 		},
		// 		output: {
		// 			comments: false,
		// 			beautify: false
		// 			// ...options
		// 		},
		// 		// compress: { ...options },
		// 		warnings: false
		// 	}
		// })
	]
};
