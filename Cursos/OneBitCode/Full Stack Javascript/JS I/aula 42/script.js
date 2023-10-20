function dobro(x) {
	alert("O dobro de " + x + " é " + (x * 2));
}

// dobro(5);
// dobro(7);
// dobro();


function dizerOla(nome = "mundo") {
	alert("Olá, " + nome + "!");
}

// dizerOla("Nathan");
// dizerOla()

function soma(a, b, c, d, e) {
	alert("O resultado da soma é " + (a + b));
}

// soma(7, 6);


function criarUsuario(nome, email, senha, tipo = "admin") {
	const usuario = {
		nome, // nome: nome,
		email, // email: email,
		senha, // senha: senha,
		tipo // tipo: tipo
	}

	console.log(usuario);
}

function muitosParametros(nome, telefone, endereço, aniversario, email, senha) {
	// ...
}
muitosParametros("nome", "telefone", "endereço", "aniversario", "email", "senha");



function objetoComoParametro(usuario) {
	usuario.nome
	usuario.telefone
	usuario.endereço
	usuario.aniversario
	usuario.email
	usuario.senha
}
const dadosDoUsuario = {
	nome: "NOME",
	telefone: "TELEFONE",
	endereço: "ENDEREÇO",
	aniversario: "ANIVERSARIO",
	email: "EMAIL",
	senha: "SENHA",
}
objetoComoParametro(dadosDoUsuario);

console.log(objetoComoParametro)
console.log(dadosDoUsuario);
