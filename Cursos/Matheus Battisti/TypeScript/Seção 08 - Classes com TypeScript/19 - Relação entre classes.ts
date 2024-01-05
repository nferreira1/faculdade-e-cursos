// 19 - Relação entre classes

class Cachorro {
	constructor(public nome: string) { }
}

class Gato {
	constructor(public nome: string) { }
}

const Loui: Cachorro = new Gato('Loui')

// console.log(Loui)
