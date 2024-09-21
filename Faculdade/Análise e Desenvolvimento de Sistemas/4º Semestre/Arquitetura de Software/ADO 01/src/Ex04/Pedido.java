package Ex04;

import java.util.ArrayList;
import java.util.List;

public class Pedido {
	private String nomeCliente;
	private List<Produto> listaProdutos = new ArrayList<>();
	private int numeroPedido;
	private double totalCompra;

	public Pedido(String nomeCliente, int numeroPedido) {
		this.nomeCliente = nomeCliente;
		this.numeroPedido = numeroPedido;
	}

	public void adicionarProduto(Produto produto) {
		listaProdutos.add(produto);
		totalCompra += produto.getPreco();
	}

	public void exibirDetalhesPedido() {
		System.out.println("Pedido Nº: " + numeroPedido);
		System.out.println("Cliente: " + nomeCliente);
		System.out.println("Itens do pedido:");
		for (Produto produto : listaProdutos) {
			System.out.println(produto.toString());
		}
		System.out.println("Total da Compra: R$ " + totalCompra);
	}
}

