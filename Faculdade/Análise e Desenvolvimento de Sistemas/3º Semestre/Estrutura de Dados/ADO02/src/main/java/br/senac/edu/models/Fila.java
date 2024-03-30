package br.senac.edu.models;

public class Fila<T> extends EstruturaEstatica<T> {

	public Fila() {
		super();
	}

	public Fila(int capacidade) {
		super(capacidade);
	}

	public boolean enfileira(T elemento) {
		return super.adiciona(elemento);
	}

	public T espiar(int posicao) {
		if (this.estaVazia()) {
			return null;
		}
		return this.elementos[posicao];
	}

	public T espiar() {
		if (this.estaVazia()) {
			return null;
		}
		return this.elementos[0];
	}

	public T desenfileira() {
		if (this.estaVazia()) {
			return null;
		}
		T elemento = this.elementos[0];
		this.remove(0);
		return elemento;
	}

	public T desenfileira(int posicao) {
		if (this.estaVazia()) {
			return null;
		}
		T elemento = this.elementos[posicao];
		this.remove(posicao);
		return elemento;
	}

}
