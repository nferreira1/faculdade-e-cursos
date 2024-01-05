// 08 - Setters

class Coordenada {

	x!: number
	y!: number

	set coordenadaX(x: number) {
		this.x = x
	}

	set coordenadaY(y: number) {
		this.y = y
	}

	get coordenadaCompleta(): string {
		return `X: ${this.x} | Y: ${this.y}`
	}

}

const coordenada = new Coordenada()

coordenada.coordenadaX = 10
coordenada.coordenadaY = 20

// console.log(coordenada.coordenadaCompleta)
