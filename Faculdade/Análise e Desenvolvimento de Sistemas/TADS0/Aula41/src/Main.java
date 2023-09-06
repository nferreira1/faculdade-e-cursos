import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Digite um número: ");
		int numero = scanner.nextInt();

		do {
			System.out.println(numero);
			numero++;
		} while(numero <= 10);
	}
}
