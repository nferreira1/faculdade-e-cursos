/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.ex_pilha_02;

/**
 *
 * @author Nathan Ferreira
 */
public class Ex_Pilha_02 {

    public static void main(String[] args) {
        Pilha p = new Pilha();

        p.push("Portuguesa");
        p.push("Frango com Catupiry");
        p.push("Calabresa");
        p.push("Quatro Queijos");
        p.push(10);


        while (!p.pilhaVazia()) {
            System.out.println(p.pop());
        }

    }
}
