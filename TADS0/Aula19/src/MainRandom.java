import java.util.Scanner;
import java.util.Random;

public class MainRandom {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		Random aleatorio = new Random();

		System.out.print("Digite um número: ");
		int numero = entrada.nextInt();

		int sorteado = aleatorio.nextInt(0, 11);

		boolean acertou = numero == sorteado;

		if (acertou) {
			System.out.println("Você ganhou!");
		} else {
			System.out.println("Você perdeu! O número sorteado foi " + sorteado);
		}

		entrada.close();

	}
}
