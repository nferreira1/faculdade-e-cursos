// 06 - Argumentos opcionais

function saudacaoModerna(nome: string, saudacao?: string) {

	if (saudacao) {
		return `Olá, ${saudacao} ${nome}!`
	}

	return `Olá, ${nome}!`
}

// console.log(saudacaoModerna('Nathan', 'Dr.'))
// console.log(saudacaoModerna('Nathan'))
