package negocio;
/* Teste de Classe Aluno NATHAN HENRIQUE VIEIRA FERREIRA */

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class GerenciadoraClientesTest {

	private GerenciadoraClientes gerenciadoraClientes;
	private int idCliente1 = 1;
	private int idCliente2 = 2;

	@Before
	public void before() {

		Cliente cliente01 = new Cliente(idCliente1, "Nathan", 23, "nathan@email.com", 1, true);
		Cliente cliente02 = new Cliente(idCliente2, "Murilo", 20, "murilo@email.com", 1, true);

		List<Cliente> clientesDoBanco = new ArrayList<>();

		clientesDoBanco.add(cliente01);
		clientesDoBanco.add(cliente02);

		gerenciadoraClientes = new GerenciadoraClientes(clientesDoBanco);

	}

	@After
	public void after() {
		gerenciadoraClientes.limpa();
	}

	@Test
	public void testPesquisaCliente() {
		Cliente c = gerenciadoraClientes.pesquisaCliente(idCliente1);

		assertTrue(c.getId() == idCliente1);

	}

	@Test
	public void testRemoveCliente() {
		boolean clienteRemovido = gerenciadoraClientes.removeCliente(idCliente2);

		assertTrue(clienteRemovido);
		assertTrue(gerenciadoraClientes.getClientesDoBanco().size() == 1);
		assertNull(gerenciadoraClientes.pesquisaCliente(idCliente2));

	}

	@Test
	public void testClienteIdadeAceitavel() throws IdadeNaoPermitidaException {

		assertTrue(gerenciadoraClientes.validaIdade(18));
		assertTrue(gerenciadoraClientes.validaIdade(19));
		assertTrue(gerenciadoraClientes.validaIdade(64));
		assertTrue(gerenciadoraClientes.validaIdade(65));

		try {
			gerenciadoraClientes.validaIdade(17);
			fail("Deveria ter lançado IdadeNaoPermitidaException para idade 17");
		} catch (IdadeNaoPermitidaException e) {
			assertTrue(e.getMessage() == IdadeNaoPermitidaException.MSG_IDADE_INVALIDA);
		}

		try {
			gerenciadoraClientes.validaIdade(66);
			fail("Deveria ter lançado IdadeNaoPermitidaException para idade 66");
		} catch (IdadeNaoPermitidaException e) {
			assertTrue(e.getMessage() == IdadeNaoPermitidaException.MSG_IDADE_INVALIDA);
		}
	}

}
