// 05 - Herança de interfaces

interface Humano {
	nome: string
	idade: number
}

interface SuperHumano extends Humano {
	superPoderes: string[]
}

const nathan: Humano = {
	nome: 'Nathan',
	idade: 22
}

const goku: SuperHumano = {
	nome: 'Goku',
	idade: 40,
	superPoderes: ['Super força', 'Super velocidade', 'Kamehameha']
}

// console.log(nathan)
// console.log(goku)
