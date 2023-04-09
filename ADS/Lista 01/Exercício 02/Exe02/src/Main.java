import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("Digite a base: ");
		int base = sc.nextInt();

		System.out.print("Digite o expoente: ");
		int expoente = sc.nextInt();

		double valorFinal = Math.pow(base, expoente);

		System.out.printf("O resultado final é %.2f", valorFinal);

		sc.close();
	}
}
