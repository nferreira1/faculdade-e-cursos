// 13 - Type alias x Interface

interface Pessoa {
	nome: string
}

interface Pessoa {
	idade: number
}

const algumaPessoa: Pessoa = { nome: 'Nathan', idade: 22 }

type typePessoa = {
	nome: string
}
