const arr = ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragon', 'Legolas', 'Gimli']
console.log(arr)

// Adiciona elementos no final do array
// push
arr.push('Boromir')
console.log(arr)


// Adiciona elementos no começo do array
// unshift
arr.unshift('Boromir');
console.log(arr)


// Remove elementos no final do array
// pop
arr.pop()
console.log(arr)

// Remove elementos no começo do array
// shift
arr.shift()
console.log(arr)


// Pesquisa por elementos no array
// includes
const inclui = arr.includes('Boromir')
console.log(inclui)


// Devolve a posição do elemento pesquisado
// indexOf
const indice = arr.indexOf('Gandalf')
console.log(indice)


// Cria uma cópia de uma parte do array
// slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4) // Fazendo desta forma, é possível pegar os quatro(ou os últimos elementos que desejar) últimos elementos do array
console.log(hobbits)
console.log(outros)


// Junta dois ou mais arrays
// concat
const sociedade = hobbits.concat(outros, 'Boromir')
console.log(sociedade)


// Substitui um ou mais elementos do array por outros elementos
// splice
const elementosRemovidos = sociedade.splice(4, 2, 'Gandalf, O Cinzento')
console.log(elementosRemovidos)
console.log(sociedade)

// Iterar sobre os elementos
for (let i = 0; i < sociedade.length; i++) {
	const elemento = sociedade[i]
	console.log(elemento + ' se encontra na posição ' + i)
}


