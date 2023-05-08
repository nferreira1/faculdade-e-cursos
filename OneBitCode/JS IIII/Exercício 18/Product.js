class Product {
	constructor(name, description, price) {
		this.name = name
		this.description = description
		this.price = price
		this.inStock = 0
	}

	addToStock(quantity) {
		this.inStock += quantity
	}

	calculateDiscount(percentageDiscount) {
		return this.price -= (this.price * (percentageDiscount / 100))
	}
}

const shirt = new Product('Saia Simples', 'Uma pequena saia simples', 100)
shirt.addToStock(10)
shirt.calculateDiscount(100)

console.log(shirt)
