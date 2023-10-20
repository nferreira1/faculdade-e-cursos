let options;

function areaTriangulo(base, altura) {
	base = parseFloat(prompt("Digite a base do triângulo: "));
	altura = parseFloat(prompt("Digite a altura do triângulo: "));
	return alert("A área do triângulo é de " + (base * altura) / 2);
}

function areaRetangulo(base, altura) {
	base = parseFloat(prompt("Digite a base do retângulo: "));
	altura = parseFloat(prompt("Digite a altura do retângulo: "));
	return alert("A área do retângulo é de " + base * altura);
}

function areaQuadrado(lado) {
	lado = parseFloat(prompt("Digite o lado do quadrado: "));
	return alert("A área do quadrado é de " + lado * lado);
}

function areaTrapezio(baseMenor, baseMaior, altura) {
	baseMenor = parseFloat(prompt("Digite a menor base do trapézio: "));
	baseMaior = parseFloat(prompt("Digite a maior base do trapézio: "))
	altura = parseFloat(prompt("Digite a altura do trapézio: "));
	return alert("A área do trapézio é de " + (baseMenor + baseMaior) * altura / 2);
}

function areaCirculo(raio) {
	raio = parseFloat(prompt("Digite o raio do circulo: "));
	return alert("A área do circulo é de " + 3.14 + (raio * raio));
}

do {
	options = prompt(
		"Calculadora Geométrica\n\n" +
		"Escolha uma opção abaixo: " +
		"\n1 - Área do triângulo." +
		"\n2 - Área do retângulo." +
		"\n3 - Área do quadrado." +
		"\n4 - Área do trapézio." +
		"\n5 - Área do círculo." +
		"\n6 - Sair"
	);

	switch (options) {
		case "1":
			areaTriangulo();
			break
		case "2":
			areaRetangulo();
			break
		case "3":
			areaQuadrado();
			break
		case "4":
			areaTrapezio();
			break
		case "5":
			areaCirculo();
			break
		case "6":
			alert("Encerrando...");
			break
		default:
			alert("Você inseriu uma opção inválida! Tente novamente!");
	}
} while (options !== "6");
