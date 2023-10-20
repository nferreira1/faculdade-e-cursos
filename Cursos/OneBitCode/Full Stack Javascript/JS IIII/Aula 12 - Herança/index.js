class Property {
	constructor(area, price) {
		this.area = area
		this.price = price
	}

	getPricePerSquareMeter() {
		return this.price / this.area
	}
}

class House extends Property { }

const land = new Property(200, 500000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse.getPricePerSquareMeter())

console.log(someHouse instanceof Property)

class Apartment extends Property {
	constructor(number, area, price) {
		// this.area = area
		// this.price = price
		// Quando se está herdando de outra classe, é necessário usar o super e logo em seguida colocar o novo argumento que deseja
		super(area, price)
		this.number = number
	}

	getFloor() {
		// pega a partir do primeiro até o final, exceto os dois últimos
		return this.number.slice(0, -2)
	}
}

const apt = new Apartment('201', 100, 160000)
console.log(apt)
console.log(apt.getFloor())
