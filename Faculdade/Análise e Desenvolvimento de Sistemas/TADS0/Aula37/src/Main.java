import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);

		System.out.print("Quantas linhas: ");
		int tamanhoLinha = entrada.nextInt();

		System.out.print("Quantas colunas: ");
		int tamanhoColuna = entrada.nextInt();

		System.out.println();

		for (int i = 0; i < tamanhoLinha; i++) {
			for (int j = 0; j < tamanhoColuna; j++) {
				System.out.print("* ");
			}
			System.out.println();
		}
	}
}
