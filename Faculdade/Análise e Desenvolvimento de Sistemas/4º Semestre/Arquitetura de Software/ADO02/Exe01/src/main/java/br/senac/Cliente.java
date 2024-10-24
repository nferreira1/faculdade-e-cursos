package br.senac;


import java.util.Arrays;

public class Cliente {
	private String nome;
	private Endereco endereco;
	private Produto[] lista;

	public Cliente() {}

	public Cliente(String nome, Endereco endereco, Produto[] lista) {
		this.nome = nome;
		this.endereco = endereco;
		this.lista = lista;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public Produto[] getLista() {
		return lista;
	}

	public void setLista(Produto[] lista) {
		this.lista = lista;
	}

	@Override
	public String toString() {
		return "Cliente{" +
			"nome='" + nome + '\'' +
			", endereco=" + endereco +
			", lista=" + Arrays.toString(lista) +
			'}';
	}
}
