const webpack = require('webpack');

module.exports = {
	entry:{
		utils : './src/index',
	},
	output: {
		path: __dirname,
		filename:'./build/[name].bundle.js'
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