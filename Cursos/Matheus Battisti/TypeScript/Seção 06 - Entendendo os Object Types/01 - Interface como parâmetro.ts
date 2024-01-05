// 01 - Interface como parâmetro

interface Produto {
	nome: string
	preco: number
	disponivel: boolean
}

function mostrarDetalhesProdutos(produto: Produto) {
	return `O nome do produto é ${produto.nome}, o preço é ${produto.preco} e está ${produto.disponivel ? 'disponível' : 'indisponível'}`
}

const camiseta: Produto = {
	nome: 'Camiseta',
	preco: 49.9,
	disponivel: true
}

// console.log(mostrarDetalhesProdutos({ nome: 'Notebook', preco: 2000, disponivel: true }))
// console.log(mostrarDetalhesProdutos(camiseta))
