// 1 - Object.assign
// É usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino.

const obj = { nome: "Nathan", idade: 22, profissao: "Desenvolvedor" }
const copy = Object.assign({}, obj)
// ou

// const copy = { ...obj }

// ou

// const copy = {}
// Object.assign(copy, obj)

console.log(copy) // { nome: 'Nathan', idade: 22, profissao: 'Desenvolvedor' }


// 2 - Object.keys
// Retorna um array contendo os nomes de todas as propriedades enumeráveis de um determinado objeto.
const obj2 = { nome: "Nathan", idade: 22, profissao: "Desenvolvedor" }
console.log(Object.keys(obj2)) // [ 'nome', 'idade', 'profissao' ]


// 3 - Object.values
// Retorna um array contendo os valores de todas as propriedades enumeráveis de um determinado objeto.
const obj3 = { nome: "Nathan", idade: 22, profissao: "Desenvolvedor" }
console.log(Object.values(obj3)) // [ 'Nathan', 22, 'Desenvolvedor' ]


// 4 - Object.entries
// Retorna um array contendo todos os pares [chave, valor] das propriedades enumeráveis de um determinado objeto.
const obj4 = { nome: "Nathan", idade: 22, profissao: "Desenvolvedor" }
console.log(Object.entries(obj4)) // [[ 'nome', 'Nathan' ], [ 'idade', 22 ], [ 'profissao', 'Desenvolvedor' ]]


// 5 - Object.freeze
// Congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.
const obj5 = { nome: "Nathan", idade: 22, profissao: "Desenvolvedor" }
Object.freeze(obj5)
obj5.nome = "João"
console.log(obj5) // { nome: 'Nathan', idade: 22, profissao: 'Desenvolvedor' }


// 6 - Object.isFrozen
// Determina se um objeto está congelado.
console.log(Object.isFrozen(obj5)) // true
console.log(Object.isFrozen(obj)) // false


// 7 - Object.seal
// Sela um objeto, evitando que novas propriedades sejam adicionadas a ele e marcando todas as propriedades existentes como não configuráveis. Valores das propriedades atuais ainda podem ser alterados desde que essas propriedades sejam graváveis (writable).
const obj6 = { a: 1 }
Object.seal(obj6)
obj6.a = 2
console.log(obj6.a) // 2
obj6.b = 3
console.log(obj6.b) // undefined


// 8 - Object.isSealed
// Determina se um objeto está selado.
console.log(Object.isSealed(obj6)) // true
console.log(Object.isSealed(obj)) // false


// 9 - Object.is
//  Compara dois valores para ver se são o mesmo valor. É semelhante ao operador `===`, mas trata `NaN` como igual a `NaN` e `-0` como diferente de ` +0`
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(-0, +0)) // false
