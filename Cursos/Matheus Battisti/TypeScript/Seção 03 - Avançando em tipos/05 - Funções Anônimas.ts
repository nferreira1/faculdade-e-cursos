// 05 - Funções Anônimas

setTimeout(function () {

	const salario: number = 2000

	const contaDoMes = {
		aluguel: 500,
		agualuz: 200,
		internet: 100,
		outrosGastos: 300
	}

	const somaDosGastos = (...gastos: number[]): number => gastos.reduce((ac, valor) => ac + valor, 0)

	const gastos = somaDosGastos(...Object.values(contaDoMes))

	const salarioRestante = salario - gastos

	console.log(salarioRestante)


}, 2000)
