// 02 - Interface como parâmetro opcional

interface Usuario {
	nome: string
	role?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'
}

function mostrarDetalhesUsuario(usuerio: Usuario) {
	if (usuerio.role) {
		return `O nome do usuário é ${usuerio.nome} e o cargo é ${usuerio.role}`
	}
	return `O nome do usuário é ${usuerio.nome} e o cargo não foi informado`
}

const u1: Usuario = {
	nome: 'Nathan',
	role: 'gerente'
}

const u2: Usuario = {
	nome: 'Nathan',
}

// console.log(mostrarDetalhesUsuario(u1))
// console.log(mostrarDetalhesUsuario(u2))
