import java.util.Random;

public class Main {
	public static void main(String[] args) {
		Random aleatorio = new Random();

//		Irá ser gerado um número entre 0 e 10, o número final não é inclusivo
		int numero = aleatorio.nextInt(0, 11);

		System.out.println(numero);

	}
}
