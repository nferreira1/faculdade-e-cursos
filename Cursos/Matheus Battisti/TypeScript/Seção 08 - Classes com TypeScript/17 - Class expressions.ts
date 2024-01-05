// 17 - Class expressions

const minhaClasse = class <T>{
	constructor(public nome: T) {
		this.nome = nome
	}
}

const p1 = new minhaClasse('Nathan')

console.log(p1)
