import Ex01.Ex01;
import Ex02.Ex02;
import Ex03.Cliente;
import Ex04.Ex04;

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
			System.out.println("3 - Exercício 04");
			System.out.println("0 - Sair");
			System.out.print("Sua escolha: ");

			int escolha = scanner.nextInt();

			switch (escolha) {
				case 1:
					Ex01.main(args);
					break;
				case 2:
					Ex02.main(args);
					break;
				case 3:
					Cliente.main(args);
					break;
				case 4:
					Ex04.main(args);
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
