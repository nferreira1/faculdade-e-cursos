// 03 - Generics com interface

interface MeuTipo<T, U, Q> {
	nome: string
	rodas: T
	motor: U
	cor: Q
}

type Carro = MeuTipo<number, number, string>
type Caneta = MeuTipo<boolean, boolean, string>

const carro: Carro = {
	nome: 'Civic',
	rodas: 4,
	motor: 1.8,
	cor: 'Preto',
}

const caneta: Caneta = {
	nome: 'Bic',
	rodas: false,
	motor: false,
	cor: 'Azul'
}

// console.log(carro)
// console.log(caneta)
