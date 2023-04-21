const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0]) // console.log(P, r, o, n, t, e, r, a)


const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')
console.log({ towns, townsCopy })



// Fazendo assim, será um novo array e não uma referência como no de cima, assim você cria um novo array com os mesmo valores
// Clonando arrays
const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })



// Clonando objetos
const townsObj = { ...towns }
const townsObjClone = { ...towns }

townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone })
