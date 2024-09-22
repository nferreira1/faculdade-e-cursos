package Ex01;

public class Ex01 {
	public static void main(String[] args) {

		EstoqueProdutos estoque = new EstoqueProdutos();
		estoque.carregarProdutos();

		Produto produto1 = new Produto(1, 23.0, "Limpeza");
		Produto produto2 = new Produto(2, 1543.0, "Eletrônico");

		Pedido pedido = new Pedido();
		ItemPedido item1 = new ItemPedido(1, produto1);
		ItemPedido item2 = new ItemPedido(2, produto2);

		pedido.adicionarItem(item1);
		pedido.adicionarItem(item2);

		pedido.cupomFiscal();

		estoque.remover(1, 1);
		estoque.remover(2, 2);

		System.out.println("Estoque após a compra:");
		System.out.println(estoque.verEstoque());
	}
}
