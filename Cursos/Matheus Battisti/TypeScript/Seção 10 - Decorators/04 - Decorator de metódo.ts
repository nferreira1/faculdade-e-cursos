// 04 - Decorator de metódo

function enumeracao(valor: boolean) {
	return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
		descriptor.enumerable = valor
	}
}

class Maquina {
	private nome: string

	constructor(nome: string) {
		this.nome = nome
	}

	@enumeracao(true)
	getNome() {
		console.log(this)
		return `O nome da máquina é ${this.nome}`
	}
}

const trator = new Maquina('Trator')
// console.log(trator.getNome())
