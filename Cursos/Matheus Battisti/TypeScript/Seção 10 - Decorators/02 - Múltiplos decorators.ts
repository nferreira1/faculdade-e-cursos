// 02 - Múltiplos decorators

function a() {
	return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
		console.log('Executou a')
	}
}

function b() {
	return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
		console.log('Executou b')
	}
}

class MultiplosDecorators {

	// @a()
	// @b()
	teste() {
		console.log('Terminando execução')
	}
}

const multiplos = new MultiplosDecorators()

// multiplos.teste()
