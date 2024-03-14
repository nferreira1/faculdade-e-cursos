package br.senac.edu;

import br.senac.edu.models.Produto;

public class Estoque {

  private Produto[] produtos;

  public Estoque(int capacidade) {
    this.produtos = new Produto[capacidade];
  }

  public void adicionar(Produto produto) {

    if (getCapacidade() <= 0 || getCapacidade() == getQuantidadeProdutos()) {
      System.out.println("Não foi possível adicionar este produto ao estoque, pois o estoque já está cheio!\n");
      return;
    }

    for (int i = 0; i < produtos.length; i++) {
      if (produtos[i] == null) {
        produtos[i] = produto;
        break;
      }
    }

    System.out.println("Produto adicionado com sucesso!\n");
  }

  public void remover(int id) {

    if (buscar(id) == "Não foi possível buscar o produto, pois o produto com o id " + id + " não existe!\n"
        || buscar(id) == "Não foi possível buscar o produto, pois o estoque está vazio!\n") {
      System.out.println("Não foi possível remover o produto, pois este produto não existe!\n");
      return;
    }

    for (int i = 0; i < produtos.length; i++) {
      if (produtos[i] != null && produtos[i].getId() == id) {
        produtos[i] = null;
        break;
      }
    }

    System.out.println("Produto removido com sucesso!\n");
  }

  public void editar(int id, Produto produto) {

    if (buscar(id) == "Não foi possível buscar o produto, pois o produto com o id " + id + " não existe!\n"
        || buscar(id) == "Não foi possível buscar o produto, pois o estoque está vazio!\n") {
      System.out.println("Não foi possível editar o produto, pois este produto não existe!\n");
      return;
    }

    for (int i = 0; i < produtos.length; i++) {
      if (produtos[i] != null && produtos[i].getId() == id) {
        produtos[i] = produto;
        break;
      }
    }

    System.out.println("Produto editado com sucesso!\n");
  }

  public String buscar(int id) {

    for (Produto produto : this.produtos) {
      if (produto != null && produto.getId() == id) {
        return produto.toString();
      }
    }

    if (getQuantidadeProdutos() == 0) {
      return "Não foi possível buscar o produto, pois o estoque está vazio!\n";
    }

    return "Não foi possível buscar o produto, pois o produto com o id " + id + " não existe!\n";
  }

  public int getCapacidade() {
    return this.produtos.length;
  }

  public void setCapacidade(int capacidade) {

    if (capacidade < getQuantidadeProdutos()) {
      System.out.println("A quantidade de produtos em estoque é maior que a capacidade informada.");
      return;
    }

    Produto[] produtos = new Produto[capacidade];

    for (int i = 0; i < this.produtos.length; i++) {
      produtos[i] = this.produtos[i];
    }

    this.produtos = produtos;
  }

  public int getQuantidadeProdutos() {
    int quantidade = 0;

    for (Produto produto : this.produtos) {
      if (produto != null) {
        quantidade++;
      }
    }

    return quantidade;
  }

  @Override
  public String toString() {

    String produtos = "";

    for (Produto produto : this.produtos) {
      if (produto != null) {
        produtos += produto.toString() + "\n";
      }
    }

    return "Tamanho do estoque: " + getCapacidade() + "\nQuantidade de produtos em estoque: "
        + getQuantidadeProdutos()
        + "\nProdutos em estoque: \n" + "-------------------\n\n" + produtos + "-------------------\n";
  }
}
