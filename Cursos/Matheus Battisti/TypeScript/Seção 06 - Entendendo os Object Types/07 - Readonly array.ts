// 07 - Readonly array

let arr: ReadonlyArray<string> = ['Maçã', 'Banana', 'Laranja']

// arr[3] = 'Pera'

arr.forEach((fruta) => {
	// console.log(fruta.toUpperCase())
})

arr = arr.map((fruta) => {
	return fruta.toUpperCase()
})

// console.log(arr)
