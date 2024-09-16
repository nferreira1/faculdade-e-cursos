/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package padrao;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author nathan.hvferreira
 */
// CLASSE COMPOSITE
public class Container implements Component {

    private List<Component> listaProdutos;
    private String nome;

    public Container(String nome) {
        this.listaProdutos = new ArrayList<>();
        this.nome = nome;
    }

    public void add(Component component) {
        listaProdutos.add(component);
    }

    public void remove(Component component) {
        listaProdutos.remove(component);
    }

    @Override
    public double getPreco() {

        double total = 0;

        for (Component c : listaProdutos) {
            total += c.getPreco();
        }

        return total;
    }

    @Override
    public String toString() {
        return "Container{" + "listaProdutos=" + listaProdutos + ", nome=" + nome + '}';
    }

}
