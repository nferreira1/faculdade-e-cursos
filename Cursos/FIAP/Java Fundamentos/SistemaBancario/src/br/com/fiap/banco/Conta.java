package br.com.fiap.banco;

import java.io.Serializable;

/**
 * Classe que abstrai uma Conta Bancária
 * 
 * @author Nathan Ferreira
 * @version 1.0
 */

public class Conta implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int agencia;
	private int numero;
	private double saldo;

	public Conta() {

	}

	/**
	 * Realiza um depósito na conta corrente
	 * 
	 * @param agencia O número da agência
	 * @param numero  O número da conta
	 * @param saldo   O valor quer será depositado
	 * @return O número do protocolo de confirmação
	 */

	public Conta(int agencia, int numero, double saldo) {

		this.agencia = agencia;
		this.numero = numero;
		this.saldo = saldo;

	}

	public int getAgencia() {
		return agencia;
	}

	public void setAgencia(int agencia) {
		this.agencia = agencia;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	/**
	 * Acrescenta um valor ao saldo da conta
	 * 
	 * @param valor que será depositado
	 */
	public void depositar(double valor) {
		this.saldo += valor;
	}

	/**
	 * Retira um valor do saldo da conta
	 * 
	 * @param valor que será depositado
	 * @see depositar
	 */
	public void retirar(double valor) {
		this.saldo -= valor;
	}

	/**
	 * Verifica o saldo da conta
	 * 
	 * @return valor do saldo da conta
	 */
	public double getSaldo() {
		return this.saldo;
	}

}
