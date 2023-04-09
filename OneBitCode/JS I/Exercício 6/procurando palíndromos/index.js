let palavra = prompt('Digite uma palavra: ')
let palavraInvertida = ''

for (let i = palavra.length - 1; i >= 0; i--) {
	palavraInvertida += palavra[i]
}

if (palavraInvertida === palavra) {
	alert('A palavra ' + palavra + ' é um palíndromo!\n')
	alert(palavra + ' === ' + palavraInvertida)
} else {
	alert('A palavra ' + palavra + ' não é um palíndromo!\n')
	alert(palavra + ' !== ' + palavraInvertida)
}
