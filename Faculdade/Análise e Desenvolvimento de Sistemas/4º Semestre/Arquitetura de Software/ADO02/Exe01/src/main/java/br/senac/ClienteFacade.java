package br.senac;

import java.util.Arrays;

public class ClienteFacade {
	private static ClienteFacade instanciaUnica;
	private Cliente cliente;

	public ClienteFacade() {}

	public static ClienteFacade getInstancia() {
		if (instanciaUnica == null) {
			instanciaUnica = new ClienteFacade();
		}
		return instanciaUnica;
	}

	public void criarCliente(String nome, String rua, int numero, Produto[] produtos) {
		Endereco endereco = new Endereco(rua, numero);
		cliente = new Cliente(nome, endereco, produtos);
	}

	public String obterDetalhesCliente() {
		return cliente.toString();
	}

	public void adicionarProdutoAoCliente(Produto produto) {
		Produto[] novaLista = Arrays.copyOf(cliente.getLista(), cliente.getLista().length + 1);
		novaLista[novaLista.length - 1] = produto;
		cliente.setLista(novaLista);
	}
}
