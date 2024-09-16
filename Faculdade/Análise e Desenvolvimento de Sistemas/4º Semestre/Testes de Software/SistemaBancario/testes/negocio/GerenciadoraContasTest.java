package negocio;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

public class GerenciadoraContasTest {

	private GerenciadoraContas gerenciadoraContas;
	private List<ContaCorrente> contasDoBanco;

	@Before
	public void before() {
		contasDoBanco = new ArrayList<>();
		gerenciadoraContas = new GerenciadoraContas(contasDoBanco);
	}

	@Test
	public void testTransfereValor() {
		// Montagem do cenário
		int idConta01 = 1;
		int idConta02 = 2;
		ContaCorrente conta01 = new ContaCorrente(idConta01, 200, true);
		ContaCorrente conta02 = new ContaCorrente(idConta02, 0, true);
		List<ContaCorrente> contasDoBanco = new ArrayList<>();
		contasDoBanco.add(conta01);
		contasDoBanco.add(conta02);
		gerenciadoraContas = new GerenciadoraContas(contasDoBanco);

		// Execução
		boolean sucesso = gerenciadoraContas.transfereValor(idConta01, 100, idConta02);

		// Verificações
		assertTrue(sucesso);
		assertTrue(conta02.getSaldo() == 100.0);
		assertTrue(conta01.getSaldo() == 100.0);
	}

	@Test
	public void testSaldoSuficienteEmAmbasAsContas() {

		ContaCorrente conta01 = new ContaCorrente(1, 200, true);
		ContaCorrente conta02 = new ContaCorrente(2, 0, true);
		contasDoBanco.add(conta01);
		contasDoBanco.add(conta02);

		boolean sucesso = gerenciadoraContas.transfereValor(1, 100, 2);

		assertTrue(sucesso);
		assertTrue(conta01.getSaldo() == 100);
		assertTrue(conta02.getSaldo() == 100);
	}

	@Test
	public void testSaldoInsuficientePositivoNaConta01() {

		ContaCorrente conta01 = new ContaCorrente(1, 100, true);
		ContaCorrente conta02 = new ContaCorrente(2, 0, true);
		contasDoBanco.add(conta01);
		contasDoBanco.add(conta02);

		boolean sucesso = gerenciadoraContas.transfereValor(1, 200, 2);
	
		assertTrue(sucesso);
		assertTrue(conta01.getSaldo() == -100);
		assertTrue(conta02.getSaldo() == 200);
	}

	@Test
	public void testSaldoInsuficienteNegativoNaConta01() {

		ContaCorrente conta01 = new ContaCorrente(1, -100, true);
		ContaCorrente conta02 = new ContaCorrente(2, 0, true);
		contasDoBanco.add(conta01);
		contasDoBanco.add(conta02);

		boolean sucesso = gerenciadoraContas.transfereValor(1, 200, 2);

		assertTrue(sucesso);
		assertTrue(conta01.getSaldo() == -300);
		assertTrue(conta02.getSaldo() == 200);
	}

	@Test
	public void testSaldoInsuficienteEmAmbasAsContas() {

		ContaCorrente conta01 = new ContaCorrente(1, -100, true);
		ContaCorrente conta02 = new ContaCorrente(2, -100, true);
		contasDoBanco.add(conta01);
		contasDoBanco.add(conta02);

		boolean sucesso = gerenciadoraContas.transfereValor(1, 200, 2);
		
		assertTrue(sucesso);
		assertTrue(conta01.getSaldo() == -300);
		assertTrue(conta02.getSaldo() == 100);
	}

}
