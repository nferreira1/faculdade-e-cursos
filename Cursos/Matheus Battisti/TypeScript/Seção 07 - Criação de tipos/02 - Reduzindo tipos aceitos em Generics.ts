// 02 - Reduzindo tipos aceitos em Generics

function mostrarNomeProduto<T extends { nome: string }>(obj: T) {
	return `O nome do produto é ${obj.nome}`
}

const produto = {
	nome: 'Notebook',
	preco: 2000,
}

const produto2 = {
	nome: 'Monitor',
	preco: 400,
	desconto: .05,
}

// console.log(mostrarNomeProduto(produto))
// console.log(mostrarNomeProduto(produto2))
