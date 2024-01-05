// 01 - Revisão de Generics

function mostrarDados<T>(arg: T): string {
	return `O dado é ${arg}`
}

// console.log(mostrarDados(5))
// console.log(mostrarDados('Mostrando Generic'))
// console.log(mostrarDados(true))
// console.log(mostrarDados([1, 2, 3, 4, 5]))
