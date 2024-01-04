// 03 - Generic function

function primeiroElemento<T>(arr: T[]) {
	return arr[0]
}

// console.log(primeiroElemento([1, 2, 3]))
// console.log(primeiroElemento<string>(['a', 'b', 'c']))

function juntarObjetos<U, T>(obj1: U, obj2: T) {
	return { ...obj1, ...obj2 }
}

const novoObjeto = juntarObjetos({ nome: 'Nathan' }, { idade: 22, profissao: 'Desenvolvedor' })

// console.log(novoObjeto)
