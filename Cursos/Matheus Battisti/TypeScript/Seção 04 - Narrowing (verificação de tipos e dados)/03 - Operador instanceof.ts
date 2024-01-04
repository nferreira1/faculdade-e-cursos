// 03 - Operador instanceof

class Usuario {
	public nome: string

	constructor(nome: string) {
		this.nome = nome
	}
}

class SuperUsuario extends Usuario {
	constructor(nome: string) {
		super(nome)
	}
}

const nathan = new Usuario('Nathan')
const joao = new SuperUsuario('João')

function exibirNomeUsuario(usuario: object) {
	if (usuario instanceof SuperUsuario) {
		console.log(`Olá ${usuario.nome}!`)
	} else if (usuario instanceof Usuario) {
		console.log(`Olá ${usuario.nome}, deseja ver os dados do sistema?`)
	}
}

// exibirNomeUsuario(joao)
// exibirNomeUsuario(nathan)
