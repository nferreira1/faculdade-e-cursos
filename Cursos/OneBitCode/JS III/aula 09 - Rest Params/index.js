function sum(...numbers) {
	return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2, 2, 2, 2, 2))


const arr = [1, 2]

const arr2 = [...arr, 1]
console.log(arr2)
console.log(arr)




const f = (...args) => console.log(args[0], args[args.length - 1])
console.log(f(1, 2, 3, 4, 5))
