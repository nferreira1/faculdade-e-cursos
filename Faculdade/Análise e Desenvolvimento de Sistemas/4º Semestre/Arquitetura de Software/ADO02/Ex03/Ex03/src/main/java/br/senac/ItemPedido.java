package br.senac;

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

	public Produto getProduto() {
		return produto;
	}

	@Override
	public String toString() {
		return "ItemPedido{" + "quantidade=" + quantidade + ", produto=" + produto + '}';
	}
}

