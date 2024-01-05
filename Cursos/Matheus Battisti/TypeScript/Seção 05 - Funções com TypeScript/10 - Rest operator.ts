// 10 - Rest operator

function somaTudo(...n: number[]) {
	return n.reduce((soma, numero) => soma + numero)
}

// console.log(somaTudo(1, 2, 3, 4, 5))
