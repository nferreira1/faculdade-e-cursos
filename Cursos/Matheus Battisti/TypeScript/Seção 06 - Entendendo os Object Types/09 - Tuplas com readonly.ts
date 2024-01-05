// 09 - Tuplas com readonly

function mostrarNumeros(numeros: readonly [number, number]) {

	// numbers[0] = 10

	console.log(numeros[0])
	console.log(numeros[1])
}

mostrarNumeros([1, 2])
