// 04 - Constraint em Generic function

function maiorNumero<T extends number | string>(a: T, b: T): T {

	let maior: T

	if (+a > +b) {
		maior = a
	} else {
		maior = b
	}

	return maior
}

// console.log(maiorNumero(1, 2))
// console.log(maiorNumero('2', '1'))
