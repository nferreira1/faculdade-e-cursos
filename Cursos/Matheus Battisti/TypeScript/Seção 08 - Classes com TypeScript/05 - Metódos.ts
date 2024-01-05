// 05 - Metódos

class Anao {

	nome

	constructor(nome: string) {
		this.nome = nome
	}

	saudacoes(): string {
		return `Olá, eu sou o ${this.nome}`
	}

}

const jimmy = new Anao('Jimmy')

// console.log(jimmy.saudacoes())
