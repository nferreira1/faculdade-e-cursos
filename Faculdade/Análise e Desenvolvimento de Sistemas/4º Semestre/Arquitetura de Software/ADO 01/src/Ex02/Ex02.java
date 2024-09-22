package Ex02;

public class Ex02 extends  Thread {

	public static void main(String[] args)  {
		Ex02 m1 = new Ex02();
		Ex02 m2 = new Ex02();
		Ex02 m3 = new Ex02();

		m1.start();
		m2.start();
		m3.start();
	}

	@Override
	public void run() {
		Estoque estoque = Singleton.getInstanciarEstoque();

		System.out.println(estoque.hashCode());
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