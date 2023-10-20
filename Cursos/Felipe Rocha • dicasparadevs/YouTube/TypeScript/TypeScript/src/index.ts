// Tipos básicos
let age: number = 5
const firstName: string = 'Nathan'
const isValid: boolean = true
let idk: any = 5

idk = '12'

const ids: number[] = [1, 2, 3, 4, 5]
const names: string[] = ['Nathan', 'John', 'Mary']
const booleans: boolean[] = [true, false, true]


// Tupla
const person: [number, string] = [0, 'Nathan']

// Lista de tuplas
const people: [number, string][] = [
	[0, 'Nathan'],
	[1, 'Mary'],
	[2, 'John'],
]


// Intersections
const productId: number | string = 5


// Enum
enum Direction {
	up = 1,
	down = 2,
	left = 3,
	right = 4,
}

const direction = Direction.up


// Type Assertions
const itemName: any = 'Boné'
// let itemId = itemName as string
// ou
let idemId = <string>itemName

console.log(direction)

