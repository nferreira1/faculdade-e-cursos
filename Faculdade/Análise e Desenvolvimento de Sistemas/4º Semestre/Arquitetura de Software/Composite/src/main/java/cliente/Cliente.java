/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cliente;

import padrao.Component;
import padrao.Container;
import padrao.Produto;

/**
 *
 * @author nathan.hvferreira
 */
public class Cliente {

    public static void main(String[] args) {

        Container cesta = new Container("Cesta manhã");
        Component produto1 = new Produto(8.98, "Café");
        Component produto2 = new Produto(5.23, "Leite");
        cesta.add(produto2);
        cesta.add(produto1);

        Component produto3 = new Produto(1.67, "Torrada");
        Component produto4 = new Produto(1.67, "Torrada");
        Component produto5 = new Produto(1.67, "Torrada");
        Component produto6 = new Produto(1.67, "Torrada");
        Container caixaTorrada = new Container("Caixa de Torrada");

        caixaTorrada.add(produto3);
        caixaTorrada.add(produto4);
        caixaTorrada.add(produto5);
        caixaTorrada.add(produto6);

        cesta.add(caixaTorrada);

        System.out.println(cesta);
        System.out.println(cesta.getPreco());

    }

}
