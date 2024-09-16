/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package padrao;

/**
 *
 * @author nathan.hvferreira
 */
// CLASSE LEAF
public class Produto implements Component {

    private double preco;
    private String nome;

    public Produto() {

    }

    public Produto(double preco, String nome) {
        this.preco = preco;
        this.nome = nome;
    }

    @Override
    public double getPreco() {
        return preco;
    }

    @Override
    public String toString() {
        return "Produto{" + "preco=" + preco + ", nome=" + nome + '}';
    }

}
