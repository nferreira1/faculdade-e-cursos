// 07 - Propriedades opcionais

function mostrarNumeros(a: number, b: number, c?: number) {
	console.log('A: ', a)
	console.log('B: ', b)
	if (c)
		console.log('C: ', c)
}
