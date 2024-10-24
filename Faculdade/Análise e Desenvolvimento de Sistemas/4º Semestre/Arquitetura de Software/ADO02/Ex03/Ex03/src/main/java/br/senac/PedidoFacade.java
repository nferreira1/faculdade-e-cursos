package br.senac;

public class PedidoFacade {
	private Pedido pedido;
	private Estoque estoque;

	public PedidoFacade() {
		pedido = new Pedido();
		estoque = new Estoque();
	}

	public void adicionarProdutoAoPedido(Produto produto, int quantidade) {
		if (estoque.removerProdutoEstoque(produto, quantidade)) {
			ItemPedido item = new ItemPedido(quantidade, produto);
			pedido.adicionarItem(item);
		}
	}

	public void gerarCupomFiscal() {
		pedido.cupomFiscal();
	}

	public void adicionarProdutoAoEstoque(Produto produto, int quantidade) {
		estoque.adicionarProduto(produto, quantidade);
	}

	public void mostrarEstoque() {
		for (ItemEstoque item : estoque.getEstoque()) {
			System.out.println(item);
		}
	}
}
