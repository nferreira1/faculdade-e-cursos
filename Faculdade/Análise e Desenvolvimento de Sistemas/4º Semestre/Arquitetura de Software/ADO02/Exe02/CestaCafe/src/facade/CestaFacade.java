package facade;

import composite.Component;
import composite.Composite;
import composite.Leaf;


public class CestaFacade {
	private Composite cesta;

	public CestaFacade(String nomeCesta) {
		cesta = new Composite(nomeCesta);
	}

	public void adicionarProdutoSimples(double preco, String nomeProduto) {
		Component produto = new Leaf(preco, nomeProduto);
		cesta.adicionar(produto);
	}

	public void adicionarCaixa(String nomeCaixa) {
		Composite caixa = new Composite(nomeCaixa);
		cesta.adicionar(caixa);
	}

	public void adicionarProdutoNaCaixa(Composite caixa, double preco, String nomeProduto) {
		Component produto = new Leaf(preco, nomeProduto);
		caixa.adicionar(produto);
	}

	public void removerProdutoSimples(double preco, String nomeProduto) {
		Component produto = new Leaf(preco, nomeProduto);
		cesta.remover(produto);
	}

	public double obterPrecoTotal() {
		return cesta.getPreco();
	}

	public String obterDetalhesCesta() {
		return cesta.toString();
	}
}
