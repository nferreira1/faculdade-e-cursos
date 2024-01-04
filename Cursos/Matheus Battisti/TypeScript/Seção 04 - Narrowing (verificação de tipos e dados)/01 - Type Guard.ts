// 01 - Type Guard

function soma(a: number | string, b: number | string) {

	if (typeof a === 'string' && typeof b === 'string') {
		return parseFloat(a) + parseFloat(b)
	} else if (typeof a === 'number' && typeof b === 'number') {
		return a + b
	} else {
		console.log('Impossível realizar a soma!')
	}
}

soma('1', ' 2')
