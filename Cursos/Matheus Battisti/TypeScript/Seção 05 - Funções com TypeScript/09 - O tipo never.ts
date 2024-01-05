// 09 - O tipo never

function mostrarMensagemErro(msg: string): never {
	throw new Error(msg)
}

// mostrarMensagemErro('Erro qualquer')
