import	java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);

		System.out.print("Informe um número: ");
		int numero = entrada.nextInt();

		boolean x = numero != 5;

		System.out.println(x);

	}
}
