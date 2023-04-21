const average = (...numbers) => {
	const sum = numbers.reduce((accum, number) => accum + number, 0)

	return sum / numbers.length
}
console.log(`Média Aritimética Simples: ${average(3, 6, 10, 9)}`)


const weightedAverage = (...entries) => {
	const sum = entries.reduce((accum, { number, weight }) => accum + (number * weight), 0)
	const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0)

	return sum / weightSum
}
console.log(`Média Aritimética Ponderada: ${weightedAverage(
	{ number: 9, weight: 3 },
	{ number: 7, weight: 1 },
	{ number: 10, weight: 1 },
)}`)
