// 11 - Destructuring

function mostrarDetalhesProduto({ nome, preco }: { nome: string, preco: number }) {
	return `O nome do produto é ${nome} e o preço é ${Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(preco)}`
}

const camiseta = { nome: 'Camiseta', preco: 49.90 }

console.log(mostrarDetalhesProduto(camiseta))
