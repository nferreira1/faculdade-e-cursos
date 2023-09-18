// 1 - charAt
// Retorna o caractere no índice especificado
console.log('JavaScript'.charAt(7)) // t


// 2 - charCodeAt
// Retorna o código do caractere no índice especificado
console.log('JavaScript'.charCodeAt(7)) // 116


// 3 - concat
// Concatena uma ou mais strings e retorna uma nova string
console.log('Java'.concat('Script')) // JavaScript


// 4 - endsWith
// Verifica se uma string termina com os caracteres de outra string
console.log('JavaScript'.endsWith('Script')) // true


// 5 - includes
// Verifica se uma string pode ser encontrada dentro de outra string
console.log('JavaScript'.includes('vaScri')) // true


// 6 - indexOf
// Retorna o índice da primeira ocorrência de um valor especificado em uma string
console.log('JavaScript'.indexOf('a')) // 1


// 7 - lastIndexOf
// Retorna o índice da última ocorrência de um valor especificado em uma string
console.log('JavaScript'.lastIndexOf('a')) // 3


// 8 - repeat
// Retorna uma nova string com o número de cópias especificado
console.log('JavaScript'.repeat(3)) // JavaScriptJavaScriptJavaScript


// 9 - replace
// Substitui o valor especificado por outro valor em uma string
console.log('JavaScript'.replace('Java', 'Type')) // TypeScript


// 10 - search
// Pesquisa uma string para um valor especificado e retorna a posição da correspondência
console.log('JavaScript'.search('Script')) // 4


// 11 - slice
// Extrai uma parte de uma string e retorna uma nova string
console.log('JavaScript'.slice(0, 4)) // Java
// Pode-se também, pegar o(s) último(s) caractere de uma string
console.log('JavaScript'.slice(-1)) // t


// 12 - split
// Divide uma string em um array de substrings
console.log('JavaScript'.split('')) // [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]


// 13 - startsWith
// Verifica se uma string começa com os caracteres de outra string
console.log('JavaScript'.startsWith('Java')) // true


// 14 - trim
// Remove os espaços em branco do início e/ou fim de uma string
console.log(' JavaScript '.trim()) // JavaScript


// 15 - trimStart
// Remove os espaços em branco do início de uma string
console.log(' JavaScript '.trimStart()) // ' JavaScript'


// 16 - trimEnd
// Remove os espaços em branco do fim de uma string
console.log(' JavaScript '.trimEnd()) // 'JavaScript '


// 17 - toLowerCase
// Converte uma string em letras minúsculas
console.log('JavaScript'.toLowerCase()) // javascript


// 18 - toUpperCase
// Converte uma string em letras maiúsculas
console.log('JavaScript'.toUpperCase()) // JAVASCRIPT


// 19 - toString
// Retorna o valor de uma string
const num = 123
console.log(num.toString()) // '123'
