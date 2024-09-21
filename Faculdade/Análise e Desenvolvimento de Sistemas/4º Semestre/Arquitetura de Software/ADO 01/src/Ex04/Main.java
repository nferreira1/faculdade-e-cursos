package Ex04;

public class Main {
	public static void main(String[] args) {
		ProdutoLeaf p1 = new ProdutoLeaf("Celular", 1500.00);
		ProdutoLeaf p2 = new ProdutoLeaf("Computador", 3500.00);
		ProdutoLeaf p3 = new ProdutoLeaf("Fone", 300.00);

		CaixaComposite caixa1 = new CaixaComposite("Eletrônicos");
		caixa1.adicionarProduto(p1);
		caixa1.adicionarProduto(p2);

		CaixaComposite caixa2 = new CaixaComposite("Acessórios");
		caixa2.adicionarProduto(p3);

		CaixaComposite carrinhoCompras = new CaixaComposite("Carrinho de Compras");
		carrinhoCompras.adicionarProduto(caixa1);
		carrinhoCompras.adicionarProduto(caixa2);

		Pedido pedido = new Pedido("Nathan", 1);
		pedido.adicionarProduto(carrinhoCompras);

		pedido.exibirDetalhesPedido();
	}
}
