// 08 - O tipo unknown

function fazerAlgo(x: unknown) {
	if (Array.isArray(x)) {
		console.log(x[0])
	} else if (typeof x === 'number') {
		console.log(`${x} é um número!`)
	}
}

// fazerAlgo(2)
