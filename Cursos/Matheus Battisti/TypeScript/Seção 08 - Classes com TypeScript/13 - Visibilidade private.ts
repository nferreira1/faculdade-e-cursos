// 13 - Visibilidade private

class PrivateClass {
	private nome = 'Nathan'

	get getNome() {
		return this.nome
	}

	private privateMetodo() {
		return this.nome
	}
}

const pObj = new PrivateClass()
// console.log(pObj.nome) // Erro
// console.log(pObj.getNome)
// console.log(pObj.privateMetodo()) // Erro
