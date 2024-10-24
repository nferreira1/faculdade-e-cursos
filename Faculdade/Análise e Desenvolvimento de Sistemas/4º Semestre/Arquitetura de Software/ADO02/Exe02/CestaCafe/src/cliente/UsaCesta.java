package cliente;

import composite.*;
import facade.CestaFacade;

/*
*  Professor Gerson Risso
*/
public class UsaCesta {

	public static void main(String[] args) {
		CestaFacade cestaFacade = new CestaFacade("Cesta de café");

		cestaFacade.adicionarProdutoSimples(12.56, "café");
		cestaFacade.adicionarProdutoSimples(10.26, "leite");
		cestaFacade.adicionarProdutoSimples(6.12, "pão de queijo");

		Composite caixaDeBombons = new Composite("Caixa de bombom");
		cestaFacade.adicionarProdutoNaCaixa(caixaDeBombons, 9.78, "bombom licor");
		cestaFacade.adicionarProdutoNaCaixa(caixaDeBombons, 8.23, "bombom cereja");

		cestaFacade.adicionarCaixa("Caixa de bombom");

		System.out.println(cestaFacade.obterDetalhesCesta());
		System.out.println("Total: " + cestaFacade.obterPrecoTotal());
	}

}
