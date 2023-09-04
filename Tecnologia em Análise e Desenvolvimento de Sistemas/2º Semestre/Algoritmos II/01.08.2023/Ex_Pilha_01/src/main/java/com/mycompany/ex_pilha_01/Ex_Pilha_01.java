/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.ex_pilha_01;

/**
 *
 * @author Nathan Ferreira
 */
public class Ex_Pilha_01 {

    public static void main(String[] args) {
        Pilha p = new Pilha();

        System.out.println("Coloca dados na pilha!");

        p.push(4);
        System.out.println("Valor adicionado na pilha: " + 4);

        p.push(9);
        System.out.println("Valor adicionado na pilha: " + 9);

        p.push(5);
        System.out.println("Valor adicionado na pilha: " + 5);

        System.out.println("Tamanho da pilha: " + p.size());

        System.out.println("Pegando dado da pilha: " + p.pop());
        System.out.println("Pegando dado da pilha: " + p.pop());
        System.out.println("Pegando dado da pilha: " + p.pop());

    }
}
