package br.senac;

import java.util.ArrayList;
import java.util.List;

public class Estoque {
	private List<ItemEstoque> listaEstoque;

	public Estoque() {
		listaEstoque = new ArrayList<>();
	}

	public void adicionarProduto(Produto produto, int quantidade) {
		ItemEstoque itemEstoque = new ItemEstoque(produto, quantidade);
		listaEstoque.add(itemEstoque);
	}

	public List<ItemEstoque> getEstoque() {
		return listaEstoque;
	}

	public boolean removerProdutoEstoque(Produto produto, int quantidade) {
		for (ItemEstoque itemEstoque : listaEstoque) {
			if (itemEstoque.getProduto().getCodigo() == produto.getCodigo()) {
				if (itemEstoque.getQuantidade() >= quantidade) {
					itemEstoque.setQuantidade(itemEstoque.getQuantidade() - quantidade);
					return true;
				} else {
					System.out.println("Quantidade insuficiente no estoque.");
					return false;
				}
			}
		}
		System.out.println("Produto não encontrado no estoque.");
		return false;
	}
}

