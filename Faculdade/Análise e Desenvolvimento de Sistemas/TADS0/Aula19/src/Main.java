import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);

		System.out.print("Digite a sua primeira nota: ");
		double nota1 = entrada.nextDouble();

		System.out.print("Digite a sua segunda nota: ");
		double nota2 = entrada.nextDouble();

		double media = (nota1 + nota2) / 2;

		boolean aprovado = media >= 6;

		System.out.print("A sua média foi " + media);

		if (media >= 6) {
			System.out.println(", portanto você foi aprovado! " + "(" + aprovado + ")");
		} else {
			System.out.println(", portanto você foi reprovado! " + "(" + aprovado + ")");
		}

		entrada.close();
	}
}
