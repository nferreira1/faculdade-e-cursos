const a = 0 // false

const b = null // false

const c = 'teste' // true

console.log(a || b || c)

// O Operador de Coalescência Nula, verifica se é null ou undefined, se for, ele pula para o proximo, senão, ele irá imprimir no console.
console.log(a ?? b ?? c)
console.log(b ?? c)



// O || verifica todos menos o número 0, já o ??, verifica todos, inclusive o 0
