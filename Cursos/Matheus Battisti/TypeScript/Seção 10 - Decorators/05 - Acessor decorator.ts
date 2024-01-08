// 05 - Acessor decorator

class Monstro {

	private nome: string
	private idade: number

	constructor(nome: string, idade: number) {
		this.nome = nome
		this.idade = idade
	}

	@enumeracao(true)
	get getNome() {
		return `O nome do monstro é ${this.nome}`
	}

	get getIdade() {
		return `O monstro tem ${this.idade} anos`
	}
}

const charmander = new Monstro('Charmander', 10)
// console.log(charmander)
