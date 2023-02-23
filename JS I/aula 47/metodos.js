let pessoa = {
	nome: "Nathan",
	idade: 21,
	dizerOla() {
		console.log("Olá, mundo! Meu nome é " + this.nome); // this aponta para o próprio objeto
	}
}

console.log(pessoa);

pessoa.dizerOla()
