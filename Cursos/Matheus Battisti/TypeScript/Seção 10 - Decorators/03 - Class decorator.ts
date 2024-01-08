// 03 - Class decorator

function classDecorator(constructor: Function) {
	console.log(constructor)
	if (constructor.name === 'Usuario') {
		console.log('Criando usuário')
	}
}

// @classDecorator
class Usuario {
	public nome: string

	constructor(nome: string) {
		this.nome = nome
	}
}

const nathan = new Usuario('Nathan')

// console.log(nathan)
