package br.senac;

public class Main {
	public static void main(String[] args) {
		ClienteFacade facade = new ClienteFacade();

		Produto p1 = new Produto("TV", "Eletrônicos", 2000);
		Produto p2 = new Produto("Geladeira", "Eletrodomésticos", 3000);
		Produto[] produtos = { p1, p2 };

		facade.criarCliente("João", "Rua Principal", 123, produtos);
		System.out.println(facade.obterDetalhesCliente());

		Produto p3 = new Produto("Microondas", "Eletrodomésticos", 500);
		facade.adicionarProdutoAoCliente(p3);

		System.out.println(facade.obterDetalhesCliente());
	}
}
