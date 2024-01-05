// 06 - Intersection types

interface Personagem {
	nome: string
}

interface Arma {
	tipo: string
	calibre: number
}

type PersonagemComArma = Personagem & Arma

const arnoldSchwarzenegger: PersonagemComArma = {
	nome: 'Arnold Schwarzenegger',
	tipo: 'Escopeta',
	calibre: 12
}

// console.log(arnoldSchwarzenegger)
