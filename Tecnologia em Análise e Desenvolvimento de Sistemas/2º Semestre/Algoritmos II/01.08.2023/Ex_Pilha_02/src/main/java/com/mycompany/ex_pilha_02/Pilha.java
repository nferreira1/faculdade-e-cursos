/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.ex_pilha_02;

/**
 *
 * @author Nathan Ferreira
 */
public class Pilha {

    private Object[] pilha;
    private int posPilha;

    public Pilha() {
        this.posPilha = -1;
        this.pilha = new Object[10];
    }

    public boolean pilhaVazia() {
        if (this.posPilha == -1) {
            return true;
        }
        return false;
    }

    public int tamanho() {
        if (this.pilhaVazia()) {
            return 0;
        }
        return this.posPilha + 1;
    }

    public Object exibeUltimoValor() {
        if (this.pilhaVazia()) {
            return null;
        }
        return this.pilha[this.posPilha];
    }

    public void push(Object valor) {
        if (this.posPilha < this.pilha.length) {
            this.pilha[++posPilha] = valor;
        }
    }

    public Object pop() {
        if (pilhaVazia()) {
            return null;
        }
        return this.pilha[this.posPilha--];
    }

}
