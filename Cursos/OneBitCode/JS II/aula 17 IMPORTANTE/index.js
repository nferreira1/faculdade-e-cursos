const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function (e) {
	// input.value = input.value === '' ? 'Olá, mundo!' : ''
	input.value = 'Olá, mundo!'

	console.log(input.value) // Valor em tempo real
	console.log(input.getAttribute('value')) // Este pega o valor pré-definido do atributo no HTML
})


document.getElementById('type').addEventListener('click', function (e) {
	// input.type = input.type !== 'radio' ? 'radio' : 'text'

	input.setAttribute('type', 'radio')
})


document.getElementById('placeholder').addEventListener('click', function (e) {
	input.placeholder = 'Digite algo...'
})


document.getElementById('disabled').addEventListener('click', function (e) {
	input.setAttribute('disabled', !input.disabled)
})


document.getElementById('data').addEventListener('click', function (e) {
	const data = input.dataset.algumaCoisa
	console.log('O valor do atributo data-alguma é ' + data)

	input.dataset.algumaCoisa = 'Alguma outro valor'
	console.log('O valor do atributo data-alguma-coisa agora é ' + data)
})
