// 10 - Avançando em Union Types

function mostrarNivelUsuario(nivel: boolean | string) {

	if (typeof nivel === 'boolean') {
		return `Usuário não aprovado!`
	}

	return `O nível do usuário é: ${nivel}`
}
