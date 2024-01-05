// 1 - Importação de arquivos

import importSaudacoes from './01 - Importação de arquivos'

importSaudacoes()


// 02 - Importação de variáveis

import { x } from './02 - Importação de variáveis'

console.log(x)


// 03 - Múltiplas importações
import { a, b, minhaFuncao } from './03 - Múltiplas importações'

console.log(a)
console.log(b)
minhaFuncao()


// 04 - Alias de importação

import { algumNome as nome } from './04 - Alias de importação'

console.log(nome)


// 05 - Importação de diversos itens

import * as numbers from './05 - Importando diversos itens'

console.log(numbers)


// 06 - Importando tipos

import { Humano } from './06 - Importando tipos'

class Usuario implements Humano {
	public nome: string
	public idade: number

	constructor(nome: string, idade: number) {
		this.nome = nome
		this.idade = idade
	}

	public get getNome(): string {
		return this.nome
	}

	public get getIdade(): number {
		return this.idade
	}
}

const nathan = new Usuario('Nathan', 22)
