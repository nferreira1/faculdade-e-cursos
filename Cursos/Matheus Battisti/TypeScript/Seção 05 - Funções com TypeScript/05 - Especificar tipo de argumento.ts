// 05 - Especificar tipo de argumento

function juntarArrays<T>(arr1: T[], arr2: T[]) {
	return [...arr1, ...arr2]
}

// console.log(juntarArrays<number | string>(['a', 'b'], [1, 2]))
