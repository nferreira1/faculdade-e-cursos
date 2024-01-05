// 04 - Herança e super

class Maquina {

	nome

	constructor(nome: string) {
		this.nome = nome
	}
}

class MaquinaMatadora extends Maquina {

	armas

	constructor(nome: string, armas: number) {
		super(nome)
		this.armas = armas
	}
}

const trator = new Maquina('Trator')
const destroyer = new MaquinaMatadora('Destroyer', 4)
