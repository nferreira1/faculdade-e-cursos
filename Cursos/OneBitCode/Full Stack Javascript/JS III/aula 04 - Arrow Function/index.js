function normalSum(a, b) {
	return a + b
}
console.log(`Soma normal: ${normalSum(2, 2)}`)



const anonymousSum = function (a, b) {
	return a + b
}
console.log(`Soma anônima: ${anonymousSum(2, 2)}`)




const arrowSum = (a, b) => {
	return a + b
}
console.log(`Soma arrow: ${arrowSum(2, 2)}`)




const subtract = (a, b) => a - b
console.log(`Subtração subtract: ${subtract(5, 2)}`)




const double = (num) => `O dobro de ${num} é ${num * 2}`
const number = 21
console.log(double(number))




const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"]
const startingWithP = towns.filter((town) => town[0] === "P")
console.log(startingWithP)




// Mesma função, só que escrita de outra forma
const teste = towns.filter((town) => {
	return town[0] === 'P'
})
console.log(teste)




// Mesma função, só que escrita de mais uma outra forma
const teste2 = towns.filter(function (town) {
	return town[0] === 'P'
})
console.log(teste2)
