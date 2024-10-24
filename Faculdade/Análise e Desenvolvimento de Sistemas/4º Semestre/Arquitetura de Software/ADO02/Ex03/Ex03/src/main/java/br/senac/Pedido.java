package br.senac;

import java.util.ArrayList;
import java.util.List;

public class Pedido {
	private double valorTotal;
	private List<ItemPedido> lista;

	public Pedido() {
		lista = new ArrayList<>();
		valorTotal = 0.0;
	}

	public void adicionarItem(ItemPedido itemPedido) {
		lista.add(itemPedido);
		valorTotal += itemPedido.getProduto().getPreco() * itemPedido.getQuantidade();
	}

	public double calcularTotal() {
		return valorTotal;
	}

	public void cupomFiscal() {
		for (ItemPedido item : lista) {
			System.out.println(item);
		}
		System.out.println("Valor Total: " + calcularTotal());
	}
}
