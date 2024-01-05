// 12 - Visibilidade protected

class E {
	protected x = 10

	protected protectedMetodo() {
		return this.x
	}
}

class F extends E {
	mostrarX() {
		return this.x
	}

	mostrarProtectedMetodo() {
		this.protectedMetodo()
	}
}

const fInstancia = new F()

// console.log(fInstancia.x) // Erro
// console.log(fInstancia.mostrarX()) // 10
// console.log(fInstancia.mostrarProtectedMetodo()) // 10
