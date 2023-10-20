let opcao = ''
const listaDePacientes = []

do {
	let pacientes = ''
	for (let i = 0; i < listaDePacientes.length; i++) {
		pacientes += (i + 1) + 'º - ' + listaDePacientes[i] + '\n'
	}

	opcao = prompt(
		'1 - Novo paciente\n' +
		'2 - Consultar paciente\n' +
		'3 - Sair\n' +
		'Pacientes:\n' + pacientes
	)

	switch (opcao) {
		case '1':
			const novoPaciente = prompt('Digite o nome do paciente: ')
			listaDePacientes.push(novoPaciente)
			break
		case '2':
			if (listaDePacientes.length == 0) {
				alert('Não há pacientes na fila')
			} else {
				alert('O paciente consultado foi ' + listaDePacientes.shift())
			}
			break
		case '3':
			alert('Até logo!')
			break
		default:
			alert('Opção inválida! Tente novamente!')
			break
	}
} while (opcao !== '3')
3
