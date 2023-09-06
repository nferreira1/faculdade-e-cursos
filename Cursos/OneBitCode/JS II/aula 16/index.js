function useLightTheme() {
	document.body.style.color = '#212529'
	document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme() {
	document.body.style.color = '#f1f5f9'
	document.body.style.backgroundColor = '#212529'
}

function switchTheme() {
	// Em JavaScript, o método .toggle() é usado para alternar a visibilidade de um elemento HTML, ou seja, mostra o elemento se estiver oculto ou oculta o elemento se ele estiver visível.
	// Neste caso ele está invertendo as classes
	document.body.classList.toggle('is-light')
	document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)
