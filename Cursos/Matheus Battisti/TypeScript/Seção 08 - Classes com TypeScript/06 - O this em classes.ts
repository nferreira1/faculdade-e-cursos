// 06 - O this em classes

class Caminhao {
	modelo
	hp

	constructor(modelo: string, hp: number) {
		this.modelo = modelo
		this.hp = hp
	}

	mostrarDetalhes(): string {
		return `Modelo: ${this.modelo} | HP: ${this.hp}`
	}
}

const volvo = new Caminhao('FH 540', 540)
const scania = new Caminhao('R 440', 440)
// console.log(volvo.mostrarDetalhes())
// console.log(scania.mostrarDetalhes())
