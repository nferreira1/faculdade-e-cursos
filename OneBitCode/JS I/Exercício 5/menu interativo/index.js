let opcoes

do {
	opcoes = prompt(
		'BANCO ITAÚ\n' +
		'1 - PIX' +
		'\n2 - Tranferência Bancária' +
		'\n3 - Empréstimos' +
		'\n4 - Depósito' +
		'\n5 - Sair'
	)

	if (opcoes > 5 || opcoes < 1) {
		alert(
			'BANCO ITAÚ' +
			'\nVocê escolheu uma opção inválida, digite novamente!'
		)
	} else if (opcoes >= 1 || opcoes <= 5) {

		alert(
			'BANCO ITAÚ' +
			'\nSua opção selecionada foi ' + opcoes
		)
	}

	if (opcoes === '5') {
		alert(
			'BANCO ITAÚ' +
			'\nVocê escolheu sair, até logo 👋🏼'
		)
		break
	}
} while (opcoes !== '5')
