package br.senac.edu.models;

public class Produto {

  private static int contadorId = 0;
  private int id;
  private String nome;
  private String descricao;
  private double preco;
  private int quantidade;

  public Produto() {

  }

  public Produto(String nome, String descricao, double preco, int quantidade) {
    this.id = ++contadorId;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  public int getId() {
    return id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getDescricao() {
    return descricao;
  }

  public void setDescricao(String descricao) {
    this.descricao = descricao;
  }

  public double getPreco() {
    return preco;
  }

  public void setPreco(double preco) {
    this.preco = preco;
  }

  public int getQuantidade() {
    return quantidade;
  }

  public void setQuantidade(int quantidade) {
    this.quantidade = quantidade;
  }

  @Override
  public String toString() {
    return "id: " + id + ",\nnome: " + nome + ",\ndescricao: " + descricao + String.format(", \npreço: %.2f", preco)
        + ",\nquantidade: " + quantidade + "\n";
  }
}
