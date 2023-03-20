package br.com.fiap.banco;

public class Teste {
	
	public static void main(String[] args) {
		
		Conta cc = new Conta();
		cc.saldo = 50.0;
		cc.agencia = 0001;
		cc.numero = 12345;
		
		cc.depositar(1000);
		
		System.out.println(cc.verificarSaldo());
		
		
		Conta poupanca = new Conta(0001, 01234, 1000);
		poupanca.retirar(50);
		
		System.out.println(poupanca.verificarSaldo());
		
		
	}

}
