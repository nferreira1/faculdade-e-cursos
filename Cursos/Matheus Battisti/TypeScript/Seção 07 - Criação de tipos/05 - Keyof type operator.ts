// 05 - Keyof type operator

type Personagem = {
	nome: string
	idade: number
	permissaoDirigir: boolean
}

type P = keyof Personagem

function mostrarPersonagemNome(obj: Personagem, nome: P) {
	return `${obj[nome]}`
}

const personagem: Personagem = {
	nome: 'Nathan',
	idade: 22,
	permissaoDirigir: true
}

// console.log(mostrarPersonagemNome(personagem, 'nome'))
