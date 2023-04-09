const imoveis = []
let opcao

do {
	opcao = prompt(
		'Cadastro de imóveis\n' +
		'Quantidade de imóveis cadastrados: ' + imoveis.length + '\n' +
		'1 - Cadastrar imóvel\n' +
		'2 - Ver imóveis cadastrados\n' +
		'3 - Sair'
	)

	switch (opcao) {
		case '1':
			const imovel = {}
			imovel.nomeProprietario = prompt('Digite o nome do proprietário: ')
			imovel.quantQuartos = parseFloat(prompt('Digite a quantidade de quartos: '))
			imovel.quantBanheiros = parseFloat(prompt('Digite a quantidade de banheiros: '))
			imovel.garagem = prompt('Possui garagem? (s/n)')

			do {
				switch (imovel.garagem) {
					case 's':
						imovel.quantGaragem = parseFloat(prompt('Digite a quantidade de vagas na garagem: '))
						break
					case 'n':
						imovel.quantGaragem = 0
						break
					default:
						alert('Opção inválida! Digite novamente!')
				}
			} while (imovel.garagem !== 's' && imovel.garagem !== 'n')

			const confirmacao = confirm(
				'Deseja salvar esta imovel?\n' +
				'Nome do proprietário: ' + imovel.nomeProprietario + '\n' +
				'Quantidade de quartos: ' + imovel.quantQuartos + '\n' +
				'Quantidade de banheiros: ' + imovel.quantBanheiros + '\n' +
				'Possui garagem: ' + imovel.garagem + '\n' +
				'Quantas vagas tem na garagem: ' + imovel.quantGaragem
			)

			if (confirmacao == true) {
				imoveis.push(imovel)
				alert('Imóvel cadastrado com sucesso!')
			} else {
				alert('Retornando ao menu!')
			}

			console.log(imovel)
			break
		case '2':
			if (imoveis.length === 0) {
				alert('Não há nenhum imóvel cadastrado!')
			} else {
				for (let i = 0; i < imoveis.length; i++) {
					alert(
						'Imovel ' + (i + 1) + 'º' + '\n' +
						'Nome do proprietário: ' + imoveis[i].nomeProprietario + '\n' +
						'Quantidade de quartos: ' + imoveis[i].quantQuartos + '\n' +
						'Quantidade de banheiros: ' + imoveis[i].quantBanheiros + '\n' +
						'Possui garagem: ' + imoveis[i].garagem + '\n' +
						'Quantas vagas tem na garagem: ' + imoveis[i].quantGaragem
					)
				}
			}
			break
		case '3':
			alert('Até logo!')
			break
		default:
			alert('Opção inválida! Digite novamente!')
	}

} while (opcao !== '3')
