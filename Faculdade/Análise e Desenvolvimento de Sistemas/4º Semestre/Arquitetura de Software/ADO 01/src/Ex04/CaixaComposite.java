package Ex04;

import java.util.ArrayList;
import java.util.List;

public class CaixaComposite implements Produto {
	private String nome;
	private List<Produto> produtos = new ArrayList<>();

	public CaixaComposite(String nome) {
		this.nome = nome;
	}

	public void adicionarProduto(Produto produto) {
		produtos.add(produto);
	}

	@Override
	public double getPreco() {
		double total = 0;
		for (Produto produto : produtos) {
			total += produto.getPreco();
		}
		return total;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Caixa: ").append(nome).append("\n");
		for (Produto produto : produtos) {
			builder.append("  - ").append(produto.toString()).append("\n");
		}
		builder.append("  -> Preço total caixa: R$ ").append(getPreco()).append("\n");
		return builder.toString();
	}
}
