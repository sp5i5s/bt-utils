const webpack = require('webpack');

module.exports = {
	entry:{
		utils : './index',
	},
	output: {
		path: __dirname,
		filename:'./index.js'
	},
	module: {
		loaders: [
		 	{
				test:/\.js$/,
				loader:'babel-loader',
				query: {
                    presets: ['es2015']
                }
			}
	 	]
	 },
	 plugins: [
		 new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	 ]
};