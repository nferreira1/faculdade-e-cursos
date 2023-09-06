let firstName = prompt("Digite o seu nome: ");
let lastName = prompt("Digite o seu último nome: ");
let camp = prompt("Digite o seu campo de estudo: ");
let yearBirth = prompt("Digite o seu ano de nascimento: ");

alert(
	"Recruta cadastrado com sucesso!\n" +
	"\nNome completo: " + firstName + " " + lastName +
	"\nCampo de estudo: " + camp +
	"\nIdade: " + (2022 - yearBirth)
);
