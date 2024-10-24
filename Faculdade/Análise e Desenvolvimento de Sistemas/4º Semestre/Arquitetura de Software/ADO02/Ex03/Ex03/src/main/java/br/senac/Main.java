package br.senac;

public class Main {
	public static void main(String[] args) {
		PedidoFacade facade = new PedidoFacade();

		Produto p1 = new Produto(1, 100.0, "Eletrônico");
		Produto p2 = new Produto(2, 50.0, "Eletrodoméstico");

		facade.adicionarProdutoAoEstoque(p1, 10);
		facade.adicionarProdutoAoEstoque(p2, 5);

		facade.mostrarEstoque();

		facade.adicionarProdutoAoPedido(p1, 2);
		facade.adicionarProdutoAoPedido(p2, 3);

		facade.gerarCupomFiscal();

		facade.mostrarEstoque();
	}
}

