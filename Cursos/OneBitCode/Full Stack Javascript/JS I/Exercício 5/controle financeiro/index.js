let opcoes
let dinheiro = parseFloat(prompt('Qual a quantia de dinheiro disponível? '))

do {
	opcoes = prompt(
		'BANCO ITAÚ' +
		'\nSaldo: ' + dinheiro +
		'\n1 - Depositar dinheiro' +
		'\n2 - Sacar dinheiro' +
		'\n3 - Sair'
	)

	if (opcoes === '1') {
		dinheiro += parseFloat(prompt('BANCO ITAÚ' +
			'\nDigite a quantia de dinheiro que deseja depositar: '
		))
	} else if (opcoes === '2') {
		dinheiro -= parseFloat(prompt('BANCO ITAÚ' +
			'\nDigite a quantia de dinheiro que deseja sacar: '
		))
	} else if (opcoes === '3') {
		alert('BANCO ITAÚ' +
			'\nVocê escolheu sair! Até logo 👋🏼'
		)
	} else {
		alert('BANCO ITAÚ' +
			'\nVocê digitou uma opção inválida, digite novamente!'
		)
	}

} while (opcoes !== '3')
