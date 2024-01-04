// 02 - Checando se o valor existe

function operacao(arr: number[], operacao?: string | undefined) {

	if (operacao) {

		switch (operacao) {
			case '+': return arr.reduce((i, total) => i + total)
			case 'x': return arr.reduce((i, total) => i * total)
		}

	} else {
		console.log('Defina uma operação!')
	}

}

operacao([1, 2, 3, 5], 'x')
