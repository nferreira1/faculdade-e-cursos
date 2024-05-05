/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sp.senac.nathanhenriquevieiraferreira;

/**
 *
 * @author Nathan Ferreira
 */
public abstract class ProdutoPerecivel extends Produto {

    private int validade;

    public ProdutoPerecivel(String nome, double preco, int quantidade, int validade) {
        super(nome, preco, quantidade);
        this.validade = validade;
    }

    @Override
    public void vender(double dinheiro, int idade) {
        if (this.validade <= 0) {
            System.out.println("Produto Vencido");
        } else {
            super.vender(dinheiro, idade);
        }
    }

    public void passaDia() {
        this.validade--;
    }

    @Override
    public String toString() {
        return super.toString() + ", Dias para vencer: " + this.validade;
    }
}
