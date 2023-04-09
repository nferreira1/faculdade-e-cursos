let pessoa = {
	nome: 'Nathan',
	idade: 22,
	dizerOla() {
		console.log('Olá, mundo! Meu nome é ' + this.nome + '!')
	}
}

console.log(pessoa)
console.log(pessoa.dizerOla())
