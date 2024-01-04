// 02 - Callback sem argumento

function saudacoes(nome: string) {
	return `Olá ${nome}!`
}

function preSaudacoes(f: (nome: string) => string, username: string) {

	console.log('Preparando a função!')

	const saudacao = f(username)

	console.log(saudacao)
}

// preSaudacoes(saudacoes, 'Nathan')
