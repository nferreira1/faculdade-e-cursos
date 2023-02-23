function calcularMedia(a, b) {
	const media = (a + b) / 2;
	return media;
}
const resultado = calcularMedia(7, 2);
console.log(resultado);





function criarProduto(nome, preco) {
	const produto = {
		nome, // nome: nome
		preco, // preco: preco
		estoque: 1
	}
	return produto;
}
const notebook = criarProduto("Intel i3", 2500);
console.log(notebook);
// ou
console.log(criarProduto("Intel i3", 2500));





function areaRetangular(base, altura) {
	const area = base * altura;
	return area;
	// ou
	return base * altura;
}
console.log(areaRetangular(3, 5));





function areaQuadrada(lado) {
	return areaRetangular(lado, lado); // está usando a mesma função da função de cima, que é o fator multiplicador
}
console.log(areaQuadrada(9));





function maioridade(idade) {
	if (idade >= 18) {
		return "Maior de idade"
	} else {
		return "Menor de idade"
	}
}
console.log(maioridade(29));
console.log(maioridade(13));
