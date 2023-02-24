const numero = parseFloat(prompt('Digite um número para saber a tabuada até o 20: '))
for (let i = 1; i <= 20; i++) {
	console.log(
		numero + ' x ' + i + ' = ' + numero * i
	)
}
