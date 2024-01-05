// 08 - Conditional types

interface A { }

interface B extends A { }

interface Teste {
	mostrarNome(): string
}

type MeuTipo2 = B extends A ? number : string

const algumValor: MeuTipo2 = 10

type MeuTipo3 = Teste extends { mostrarNome(): number } ? string : boolean

