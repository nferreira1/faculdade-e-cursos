function register(element) {
	// children = pega a elemento filho do elemento selecionado
	// parentNode = pega o elemento pai do elemento selecionado
	const username = element.children.username.value
	const password = element.children.password.value
	const passwordConfirmation = element.children.passwordConfirmation.value

	console.log({ username, password, passwordConfirmation })
	if (password === passwordConfirmation) {
		alert('O ' + username + ' foi cadastrado!')
	} else {
		alert('As senhas não correspondem!')
	}
}
