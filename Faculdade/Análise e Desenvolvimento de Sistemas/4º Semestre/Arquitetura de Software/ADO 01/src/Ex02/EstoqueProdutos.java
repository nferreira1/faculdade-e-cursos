package Ex02;

import java.util.ArrayList;
import java.util.List;

public class EstoqueProdutos implements Estoque {

	Produto produto;
	int quantidade;

	public EstoqueProdutos(Produto produto, int quantidade) {
		this.produto = produto;
		this.quantidade = quantidade;
	}

	public EstoqueProdutos() {

	}

	public Produto getProduto() {
		return produto;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	private List<EstoqueProdutos> estoque = new ArrayList<>();

	@Override
	public void carregarProdutos() {
		estoque.add(new EstoqueProdutos(new Produto(1, 10.0, "Alimento"), 50));
		estoque.add(new EstoqueProdutos(new Produto(2, 1543.0, "Eletrônico"), 20));
		estoque.add(new EstoqueProdutos(new Produto(3, 23.0, "Limpeza"), 100));
	}

	@Override
	public boolean remover(int id, int quantidade) {
		for (EstoqueProdutos item : estoque) {
			if (item.getProduto().getCodigo() == id) {
				if (item.getQuantidade() >= quantidade) {
					item.setQuantidade(item.getQuantidade() - quantidade);
					return true;
				} else {
					return false;
				}
			}
		}
		return false;
	}

	@Override
	public List<String> verEstoque() {
		List<String> estoqueAtual = new ArrayList<>();
		for (EstoqueProdutos item : estoque) {
			estoqueAtual.add("Produto: " + item.getProduto().getCodigo() +
				", Categoria: " + item.getProduto().getCategoria() +
				", Quantidade: " + item.getQuantidade() +
				", Preço: " + item.getProduto().getPreco());
		}
		return estoqueAtual;
	}
}
