import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("Digite um número: ");
		int num1 = sc.nextInt();

		System.out.print("Digite um número: ");
		int num2 = sc.nextInt();

		double quadradoNum1 = Math.pow(num1, 2);
		double quadradoNum2 = Math.pow(num2, 2);

		double valorFinal = quadradoNum1 + quadradoNum2;

		System.out.printf("O resultado da soma dos quadrados dos dois números é de %.2f", valorFinal);

		sc.close();
	}
}
