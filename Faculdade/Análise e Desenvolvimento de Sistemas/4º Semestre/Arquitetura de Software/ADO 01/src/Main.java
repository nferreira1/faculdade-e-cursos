import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		boolean continuar = true;

		while (continuar) {
			System.out.println("Selecione qual exercício deseja executar:");
			System.out.println("1 - Exercício 01");
			System.out.println("2 - Exercício 02");
			System.out.println("3 - Exercício 03");
			System.out.println("4 - Exercício 04");
			System.out.println("0 - Sair");
			System.out.print("Sua escolha: ");

			int escolha = scanner.nextInt();

			switch (escolha) {
				case 1:
					Ex01.Main.main(args);
					break;
				case 2:
					Ex02.Main.main(args);
					break;
				case 3:
					Ex03.Main.main(args);
					break;
				case 4:
					Ex04.Main.main(args);
					break;
				case 0:
					continuar = false;
					System.out.println("Até logo 👋");
					break;
				default:
					System.out.println("Escolha inválida.");
					break;
			}
			System.out.println();
		}
		scanner.close();
	}
}
