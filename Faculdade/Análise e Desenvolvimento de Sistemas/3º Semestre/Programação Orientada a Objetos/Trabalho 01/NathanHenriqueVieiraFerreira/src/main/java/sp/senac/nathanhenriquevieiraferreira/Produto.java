/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sp.senac.nathanhenriquevieiraferreira;

/**
 *
 * @author Nathan Ferreira
 */
public abstract class Produto {

    private String nome;
    private double preco;
    private int quantidade;

    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public void vender(double dinheiro, int idade) {
        if (this.quantidade <= 0) {
            System.out.println("Produto sem estoque");
        } else if (dinheiro < this.preco) {
            System.out.println("Dinheiro insuficiente");
        } else {
            this.quantidade--;
            System.out.println("Troco: " + (dinheiro - this.preco));
        }
    }

    public void comprarEstoque(int quantidade) {
        this.quantidade += quantidade;
    }

    @Override
    public String toString() {
        return "Nome: " + this.nome + ", Preço: " + this.preco + ", Quantidade no estoque: " + this.quantidade;
    }

    protected String getNome() {
        return nome;
    }

    protected double getPreco() {
        return preco;
    }

    protected int getQuantidade() {
        return quantidade;
    }

    protected void setNome(String nome) {
        this.nome = nome;
    }

    protected void setPreco(double preco) {
        this.preco = preco;
    }

    protected void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
}
