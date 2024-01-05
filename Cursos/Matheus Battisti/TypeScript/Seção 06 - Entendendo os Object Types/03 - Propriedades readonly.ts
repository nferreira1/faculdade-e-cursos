// 03 - Propriedades readonly

interface Carro {
	marca: string
	readonly rodas: number
}

const fusca: Carro = {
	marca: 'Volkswagen',
	rodas: 4
}

// fusca.rodas = 5
// console.log(fusca)
