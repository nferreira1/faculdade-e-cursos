package Ex02;

import java.util.ArrayList;
import java.util.List;

public class Pedido  {

	private double valorTotal;
	private List<ItemPedido> itens = new ArrayList<>();

	public void adicionarItem(ItemPedido item) {
		itens.add(item);
	}

	public double calcularTotal() {
		for (ItemPedido item : itens) {
			valorTotal += item.getQuantidade() * item.getPedido().getPreco();
		}
		return valorTotal;
	}

	public void cupomFiscal() {
		System.out.println("Cupom fiscal");
		for (ItemPedido item : itens) {
			System.out.println("Produto: " + item.getPedido().getCodigo());
			System.out.println("Preço unitário: " + item.getPedido().getPreco());
			System.out.println("Quantidade: " + item.getQuantidade());
			System.out.println("Subtotal: " + item.getQuantidade() * item.getPedido().getPreco());
		}
		calcularTotal();
		System.out.println("Total: " + valorTotal);
	}

}
