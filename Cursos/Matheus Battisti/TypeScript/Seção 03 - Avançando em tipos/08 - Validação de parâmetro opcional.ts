// 08 - Validação de parâmetro opcional

function mostrarNomeCompleto(nome: string, sobrenome?: string) {
	if (sobrenome != undefined) {
		return `Olá, ${nome} ${sobrenome}, tudo bem?`
	}

	return `${nome}`
}

mostrarNomeCompleto('Nathan', 'Ferreira')
mostrarNomeCompleto('Nathan')
