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
	 }
};