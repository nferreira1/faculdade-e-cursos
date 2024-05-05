/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sp.senac.nathanhenriquevieiraferreira;

/**
 *
 * @author Nathan Ferreira
 */
public abstract class ProdutoRestrito extends Produto {

    private int idadeMinima;

    public ProdutoRestrito(String nome, double preco, int quantidade, int idadeMinima) {
        super(nome, preco, quantidade);
        this.idadeMinima = idadeMinima;
    }

    @Override
    public void vender(double dinheiro, int idade) {
        if (idade < this.idadeMinima) {
            System.out.println("Comprador não tem idade para comprar o produto");
        } else {
            super.vender(dinheiro, idade);
        }
    }

    @Override
    public String toString() {
        return super.toString() + ", Idade mínima: " + this.idadeMinima;
    }
}
