// 07 - Indexed access types

type Caminhao = {
	km: number
	kg: number
	descricao: string
}

type KM = Caminhao['km']

const novoCaminhao: Caminhao = {
	km: 0,
	kg: 0,
	descricao: 'Caminhão novo'
}

function mostrarKm(km: KM) {
	return `O veículo tem ${km} km rodados`
}

const novoCarro = {
	km: 1000,
	kg: 500
}

// console.log(mostrarKm(novoCarro.km))
// console.log(mostrarKm(novoCaminhao.km))
