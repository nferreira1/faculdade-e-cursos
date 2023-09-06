import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);

		System.out.print("Digite um número: ");
		double numero = entrada.nextDouble();

		double fatorial = 1;

		for (double i = numero; i >= 1; i--) {
			fatorial *= i;
		}

		System.out.printf("O fatorial de %.2f é %.2f",numero, fatorial);

		entrada.close();
	}
}
