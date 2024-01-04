// 12 - Introdução a Interface

interface Point {
	x: number
	y: number
	z: number
}

function mostrarCoordenadas(ponto: Point) {
	return `A coordenada X é ${ponto.x}, a coordenada Y é ${ponto.y} e a coordenada Z é ${ponto.z}`
}

const coordObj: Point = {
	x: 1,
	y: 2,
	z: 3
}
