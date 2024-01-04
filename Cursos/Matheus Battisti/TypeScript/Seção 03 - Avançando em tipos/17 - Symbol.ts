// 17 - Symbol

let symbolA: symbol = Symbol('a')
let symbolB = Symbol('a')

console.log(symbolA === symbolB) // false
console.log(symbolA == symbolB) // false

