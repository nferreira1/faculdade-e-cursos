const chalk = require('chalk')

const nota = 7

if (nota >= 7) {
	console.log(chalk.bgGreen('Sucesso!'))
} else {
	console.log(chalk.bgRed('Reprovado!'))
}
