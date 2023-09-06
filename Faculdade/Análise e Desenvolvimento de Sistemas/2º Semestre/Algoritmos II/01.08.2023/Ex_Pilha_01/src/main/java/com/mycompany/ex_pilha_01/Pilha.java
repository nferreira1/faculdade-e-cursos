/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.ex_pilha_01;

/**
 *
 * @author Nathan Ferreira
 */
public class Pilha {

    static int pilha[] = new int[10];
    static int pos = 0;

    static void push(int valor) {
        pilha[pos] = valor;
        pos++;
    }

    static int pop() {
        return pilha[--pos];
    }

    static int size() {
        return pos;
    }

    static int stacktop() {
        return pilha[pos];
    }

}
