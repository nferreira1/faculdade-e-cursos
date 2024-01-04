// 06 - Tipos de objetos

function passarCoordenadas(coord: { x: number, y: number }): void {
	console.log(`X = ${coord.x} | Y = ${coord.y}`)
}

const objCoord = { x: 10, y: 20 }

passarCoordenadas(objCoord)
