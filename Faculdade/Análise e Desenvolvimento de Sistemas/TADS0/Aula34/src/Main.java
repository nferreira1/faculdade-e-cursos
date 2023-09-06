import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);

		System.out.print("Digite um número: ");
		int numero = entrada.nextInt();

		int i = 0;

		while (i <= 10) {

			int mult = numero * i;

			System.out.printf("%d x %d = %d\n", numero, i, mult);

			i++;
		}

	}
}
