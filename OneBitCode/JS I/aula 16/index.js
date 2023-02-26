const age = prompt("Informe a sua idade: ");

if (age > 18) {
	alert("Você é maior de idade!");
} else if (age > 12) {
	alert("Você é menor de idade!");
} else if (age > 4) {
	alert("Você é criança!");
} else {
	alert("Você é baby!");
}


// Operador Ternário
const result = (6 === 6) ? "true" : "false";
console.log(result);

const result1 = (6 === 5) ? "true" : "false";
console.log(result1);
