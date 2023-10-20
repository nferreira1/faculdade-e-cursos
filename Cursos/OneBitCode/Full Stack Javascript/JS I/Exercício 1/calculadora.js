const x = parseFloat(prompt("Informe o primeiro número: "));
const y = parseFloat(prompt("Informe o segundo número: "));

const soma = x + y;
const subtração = x - y;
const multiplicação = x * y;
const divisão = x / y;

alert(
	"Resultados:\n" +
	"\nO resultado da soma é de " + soma +
	"\nO resultado da subtração é de: " + subtração +
	"\nO resultado da multiplicação é de: " + multiplicação +
	"\nO resultado da divisão é de: " + divisão
);
