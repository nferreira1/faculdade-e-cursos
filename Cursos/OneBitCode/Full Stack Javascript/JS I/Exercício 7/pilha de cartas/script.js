const baralho = []
let opcao = ''

do {
	opcao = prompt(
		'Cartas no baralho: ' + baralho.length + '\n' +
		'1 - Adicionar uma carta\n' +
		'2 - Puxar uma carta\n' +
		'3 - Sair'
	)

	switch (opcao) {
		case '1':
			const novaCarta = prompt('Digite o nome da carta: ')
			baralho.push(novaCarta)
			break
		case '2':
			const cartaPuxada = baralho.pop()
			if (!cartaPuxada) {
				alert('Não há nenhuma carta no baralho')
			} else {
				alert('A carta puxada foi ' + cartaPuxada)
			}
			break
		case '3':
			alert('Até logo!')
			break
		default:
			alert('Opção inválida! Digite novamente!')
	}

} while (opcao !== '3')
