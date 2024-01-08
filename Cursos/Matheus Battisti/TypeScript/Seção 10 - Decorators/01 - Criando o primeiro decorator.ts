// 01 - Criando o primeiro decorator

function meuDecorator() {
	console.log('Iniciando decorator')

	return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
		console.log(`Executando o decorator`)
		console.log(target)
		console.log(propertKey)
		console.log(descriptor)
	}
}

class MinhaClasse {

	name!: string

	// @meuDecorator()
	teste() {
		console.log('Terminando a execução do metódo')
	}
}

const meuObj = new MinhaClasse()

// meuObj.teste()
