// 06 - Property decorator

function formatarId() {
	return function (target: object, propertyKey: string) {
		let valor: string

		const getter = function () {
			return valor
		}

		const setter = function (novoValor: string) {
			valor = novoValor.padStart(5, '0')
		}

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter
		})
	}
}

class ID {

	@formatarId()
	private id: string

	constructor(id: string) {
		this.id = id
	}
}

const novoItem = new ID('1')
// console.log(novoItem)
