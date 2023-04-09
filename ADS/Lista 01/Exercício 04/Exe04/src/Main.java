import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("Digite um número para saber o seu consecutivo: ");
		int num1 = sc.nextInt();

		System.out.print("Digite um número para saber o seu consecutivo: ");
		int num2 = sc.nextInt();

		int proximoNum1 = num1 + 1;
		int proximoNum2 = num2 + 1;

		System.out.printf("O número consecutivo do %d é %d\n", num1, proximoNum1);
		System.out.printf("O número consecutivo do %d é %d\n", num2, proximoNum2);

		sc.close();
	}
}
