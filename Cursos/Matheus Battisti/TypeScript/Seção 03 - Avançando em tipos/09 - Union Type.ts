// 09 - Union Type

function mostrarSaldo(saldo: number | string) {
	return `Saldo da conta R$ ${typeof saldo === 'number' ? Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(saldo) : saldo}`
}

mostrarSaldo(20)
mostrarSaldo('20')
