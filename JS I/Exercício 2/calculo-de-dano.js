const nomePersonagem01 = prompt('Digite o nome do personagem que irá atacar: ')
const poderAtaquePersonagem01 = parseFloat(prompt('Digite o poder de ataque do ' + nomePersonagem01))

const nomePersonagem02 = prompt('Digite o nome do personagem que irá defender: ')
let pontosVidaPersonagem02 = parseFloat(prompt('Digite os pontos de vida do ' + nomePersonagem02))
const poderDefesaPersonagem02 = parseFloat(prompt('Digite o poder de defesa do ' + nomePersonagem02))
const escudo = prompt('O ' + nomePersonagem02 + ' possuí escudo? (S/N)')

let dano = 0

if ((poderAtaquePersonagem01 > poderDefesaPersonagem02) && (escudo === 'N')) {
	dano = poderAtaquePersonagem01 - poderDefesaPersonagem02
} else if ((poderAtaquePersonagem01 > poderDefesaPersonagem02) && (escudo === 'S')) {
	dano = (poderAtaquePersonagem01 - poderDefesaPersonagem02) / 2
}

pontosVidaPersonagem02 -= dano

alert(nomePersonagem01 + ' causou ' + dano + ' pontos de dano em ' + nomePersonagem02);

alert('Nome do personagem atacante: ' + nomePersonagem01 +
	'\nPoder de ataque: ' + poderAtaquePersonagem01 +

	'\nNome do personagem defensor ' + nomePersonagem02 +
	'\nPoder de defesa: ' + poderDefesaPersonagem02 +
	'\nPontos de vida do ' + nomePersonagem02 + ' após o ataque: ' + pontosVidaPersonagem02 +
	'\nO ' + nomePersonagem02 + ' possui escudo? ' + escudo)
