package Ex04;

public class ProdutoLeaf implements  Produto {
	private String nome;
	private double preco;

	public ProdutoLeaf(String nome, double preco) {
		this.nome = nome;
		this.preco = preco;
	}

	@Override
	public double getPreco() {
		return preco;
	}

	@Override
	public String toString() {
		return "Produto: " + nome + " | Preço: R$ " + preco;
	}
}
