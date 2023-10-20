const result = prompt("Escolha uma alternativa:\na)\nb)\nc)");

const result2 = parseFloat(result);

switch (result2) {
	case 1:
		alert("O resultado é a");
		break;
	case 2:
		alert("O resultado é b");
		break;
	case 3:
		alert("O resultado é c");
		break;
	default:
		alert("Finalizando...");
}
