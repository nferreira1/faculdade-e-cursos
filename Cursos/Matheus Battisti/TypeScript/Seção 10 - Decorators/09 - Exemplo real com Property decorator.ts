// 09 - Exemplo real com Property decorator

function Max(limite: number) {
	return function (target: any, key: string) {

		let valor: string

		const getter = function () {
			return valor
		}

		const setter = function (novoValor: string) {
			if (novoValor.length > limite) {
				console.log(`O valor não pode ser maior que ${limite}`)
				return
			} else {
				valor = novoValor
			}
		}

		Object.defineProperty(target, key, {
			get: getter,
			set: setter
		})
	}
}

class Admin {

	@Max(10)
	private username: string

	constructor(username: string) {
		this.username = username
	}

	get getUserName(): string {
		return this.username
	}
}

// const nathan2 = new Admin('nathan.ferreira')
// const vitoria = new Admin('vitoria')
// console.log(nathan2.getUserName)
// console.log(vitoria.getUserName)
