module.exports = {
	entry: {
		index: './src/index.js',
	},
	mode: 'development', // development ou production
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	}
}
