// 07 - Exemplo real com Class decorator

function dataCriacao(dataCriacao: Function) {
	dataCriacao.prototype.criadoEm = new Date().toLocaleDateString()
}

@dataCriacao
class Livro {

	private id: number
	private criadoEm?: Date

	constructor(id: number) {
		this.id = id
	}

	get getCriadoEm() {
		return this.criadoEm
	}
}

@dataCriacao
class Caneta {

	private id: number

	constructor(id: number) {
		this.id = id
	}
}

const novoLivro = new Livro(1)
const novaCaneta = new Caneta(2)


// console.log(novoLivro)
// console.log(novaCaneta)
