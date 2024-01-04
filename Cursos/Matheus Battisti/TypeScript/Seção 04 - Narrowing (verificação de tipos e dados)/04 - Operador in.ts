// 04 - Operador in

class Dog {
	public nome: string
	public raca?: string

	constructor(nome: string, raca?: string) {
		this.nome = nome
		if (raca) {
			this.raca = raca
		}
	}
}

const loui = new Dog('Loui')
const bob = new Dog('Bob', 'Pastor Alemão')

function mostrarDetalhesCachorro(cachorro: Dog) {
	if ('raca' in cachorro) {
		return console.log(`O ${cachorro.nome} é da raça ${cachorro.raca}!`)
	}

	return console.log(`O ${cachorro.nome} não possui raça definida!`)
}

// mostrarDetalhesCachorro(loui)
// mostrarDetalhesCachorro(bob)
