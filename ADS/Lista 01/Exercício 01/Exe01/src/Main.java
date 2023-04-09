import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("Digite um número: ");
		int num1 = sc.nextInt();

		System.out.print("Digite um número: ");
		int num2 = sc.nextInt();

		System.out.printf("O produto destes números é de %d", num1 * num2);

		sc.close();
	}
}
