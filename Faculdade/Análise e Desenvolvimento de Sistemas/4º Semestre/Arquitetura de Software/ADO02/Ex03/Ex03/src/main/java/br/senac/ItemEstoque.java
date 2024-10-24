package br.senac;

public class ItemEstoque {
	private Produto produto;
	private int quantidade;

	public ItemEstoque(Produto produto, int quantidade) {
		this.produto = produto;
		this.quantidade = quantidade;
	}

	// Getters e Setters
	public Produto getProduto() {
		return produto;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	@Override
	public String toString() {
		return "ItemEstoque{" + "produto=" + produto + ", quantidade=" + quantidade + '}';
	}
}
