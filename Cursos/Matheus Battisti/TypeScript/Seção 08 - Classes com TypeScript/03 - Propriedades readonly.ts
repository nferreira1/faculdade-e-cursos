// 03 - Propriedades readonly

class Carro {
	nome
	readonly rodas = 4

	constructor(nome: string) {
		this.nome = nome
	}
}

const fusca = new Carro('Fusca')

// console.log(fusca)
