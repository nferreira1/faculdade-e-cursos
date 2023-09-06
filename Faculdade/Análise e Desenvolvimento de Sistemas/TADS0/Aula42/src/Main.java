import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		int opcao;

		do {
			System.out.println("CALCULADORA");
			System.out.print("1 - SOMAR\n2 - SUBTRAIR\n3 - MULTIPLICAR\n4 - DIVIDIR\n5 - SAIR\nSUA ESCOLHA: ");
			opcao = scanner.nextInt();
			System.out.println();

			if (opcao >= 1 && opcao < 5) {
				System.out.print("DIGITE UM NÚMERO: ");
				int num1 = scanner.nextInt();

				System.out.print("DIGITE OUTRO NÚMERO: ");
				int num2 = scanner.nextInt();

				if (opcao == 1) {
					System.out.printf("%d + %d = %d\n", num1, num2, num1 + num2);
				} else if (opcao == 2) {
					System.out.printf("%d - %d = %d\n", num1, num2, num1 - num2);
				} else if (opcao == 3) {
					System.out.printf("%d x %d = %d\n", num1, num2, num1 * num2);
				} else {
					System.out.printf("%d : %d = %d\n", num1, num2, num1 / num2);
				}
			} else if (opcao < 1 || opcao > 5) {
				System.out.println("VOCÊ INSERIU UMA OPÇÃO INVÁLIDA! DIGITE NOVAMENTE!\n");
			}


		} while (opcao != 5);

		scanner.close();
	}
}
