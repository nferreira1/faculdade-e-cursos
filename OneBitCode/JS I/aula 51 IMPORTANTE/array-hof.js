const personagens = [
	{ nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
	{ nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
	{ nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
	{ nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
	{ nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
	{ nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
	{ nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Cria um novo array com base no existente
// Sem o Map

// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
// 	nomes.push(personagens[i].nome)
// }
// console.log(nomes)

// Com o map
const nomes = personagens.map(function (personagem) {
	return personagem.nome
})
console.log(nomes)



// Filtra elementos especificos de um array existente e cria um array novo
// Sem o Filter
// const orcs = []
// for (let i = 0; i < personagens.length; i++) {
// 	if (personagens[i].raca === 'Orc') {
// 		orcs.push(personagens[i])
// 	}
// }
// console.log(orcs)

// Com o Filter
const orcs = personagens.filter(function (personagem) {
	return personagem.raca === 'Orc'
})
console.log(orcs)



// Serve para transformar um array em um outra coisa (pode ser objeto, número, string, etc)
// Reduce

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
	return valorAcumulado + personagem.nivel
}, 0)
console.log(nivelTotal)

const racas = personagens.reduce(function (valorAcumulado, personagem) {
	if (valorAcumulado[personagem.raca]) {
		valorAcumulado[personagem.raca].push(personagem)
	} else {
		valorAcumulado[personagem.raca] = [personagem]
	}

	return valorAcumulado
}, {})
console.log(racas)



// Ordena os elementos do array (altera o array original)
// Sort
const personagensOrdenados = personagens.slice().sort(function (a, b) {
	return a.nivel - b.nivel
})
console.log(personagens)
console.log(personagensOrdenados)
