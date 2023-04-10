function register(ev) {
	console.log(ev)

	// O ev é o evento que foi disparado, ele é passado sempre quando o evento é disparado, sempre fica disponível

	//currentTarget = pega o elemento que acionou o evento
	const sectionElement = ev.currentTarget.parentNode

	const username = sectionElement.children.username.value
	const password = sectionElement.children.password.value
	const passwordConfirmation = sectionElement.children.passwordConfirmation.value


	if (password === passwordConfirmation) {
		alert('O usuário ' + username + ' foi registrado!')
	} else {
		alert('As senhas não correspondem!')
	}
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)


function removeListener() {
	button.removeEventListener('click', register)
	alert('O evento foi removido')
}

button.addEventListener('mouseover', function (ev) {
	console.log(ev.currentTarget)
})
