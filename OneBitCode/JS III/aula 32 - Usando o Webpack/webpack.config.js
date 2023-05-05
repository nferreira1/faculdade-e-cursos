// Módulo do NodeJS para trabalhar com caminhos
const path = require('path')

module.exports = {
	entry: {
		main: './src/index.js',
		hello: './src/hello.js'
	},
	mode: 'development', // development ou production
	output: {
		path: path.resolve(__dirname, 'public'), // C:\Users\Nathan Ferreira\Desktop\Cursos\OneBitCode\JS III\..\public
		filename: '[name].bundle.min.js' // editar o nome do arquivo
	}
}
