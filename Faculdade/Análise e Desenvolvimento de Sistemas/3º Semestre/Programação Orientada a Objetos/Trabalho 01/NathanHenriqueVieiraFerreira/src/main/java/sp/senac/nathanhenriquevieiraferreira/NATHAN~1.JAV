package sp.senac.nathanhenriquevieiraferreira;

/**
 *
 * @author Nathan Ferreira
 */
public class NathanHenriqueVieiraFerreira {

	public static void main(String[] args) {
		Geladeira geladeira = new Geladeira(10);
		Mesa mesa = new Mesa(15);
		Cadeira cadeira = new Cadeira(20);
		Cerveja cerveja = new Cerveja(30);
		Leite leite = new Leite(50, 5);
		Queijo queijo = new Queijo(25, 10);

		geladeira.vender(2000, 30);
		mesa.vender(500, 25);
		cadeira.vender(100, 20);
		cerveja.vender(5, 19);
		leite.vender(3, 30);
		queijo.vender(20, 25);

		leite.passaDia();
		queijo.passaDia();

		System.out.println(geladeira);
		System.out.println(mesa);
		System.out.println(cadeira);
		System.out.println(cerveja);
		System.out.println(leite);
		System.out.println(queijo);
	}
}
