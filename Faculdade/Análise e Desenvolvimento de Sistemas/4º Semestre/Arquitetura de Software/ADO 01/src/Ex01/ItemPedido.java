package Ex01;

public class ItemPedido {

	private int quantidade;
	private Produto produto;

	public ItemPedido(int quantidade, Produto produto) {
		this.quantidade = quantidade;
		this.produto = produto;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public Produto getPedido() {
		return produto;
	}

}
