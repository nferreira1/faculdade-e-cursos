// 16 - Parameter properties

class ParameterProperties {
	constructor(public nome: string, private qtd: number, private preco: number) {
		this.nome = nome
		this.qtd = qtd
		this.preco = preco
	}

	public get getQtd() {
		return `A quantidade em estoque é ${this.qtd}`
	}

	public get getPreco() {
		return `O preço é ${this.preco}`
	}
}

const camiseta = new ParameterProperties('Camiseta', 20, 49.90)
console.log(camiseta)
