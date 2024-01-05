// 07 - Getters

class Pessoa {
	nome
	sobrenome

	constructor(nome: string, sobrenome: string) {
		this.nome = nome
		this.sobrenome = sobrenome
	}

	get nomeCompleto(): string {
		return `${this.nome} ${this.sobrenome}`
	}
}

const pessoa = new Pessoa('Nathan', 'Ferreira')

// console.log(pessoa)
