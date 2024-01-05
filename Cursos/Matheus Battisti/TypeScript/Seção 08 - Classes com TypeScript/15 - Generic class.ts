// 15 - Generic class

class Item<T, U> {

	primeiro
	segundo

	constructor(primeiro: T, segundo: U) {
		this.primeiro = primeiro
		this.segundo = segundo
	}

	get getPrimeiro() {
		return `O primeiro é ${this.primeiro}`
	}

	get getSegundo() {
		return `O segundo é ${this.segundo}`
	}

}

const item1 = new Item('Caixa', 'Surpresa')
// console.log(item1.getPrimeiro)
