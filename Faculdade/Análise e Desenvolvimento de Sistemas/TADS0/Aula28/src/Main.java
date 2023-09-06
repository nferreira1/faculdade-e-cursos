import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);

		System.out.print("Digite a sua primeira nota: ");
		double nota1 = entrada.nextDouble();

		System.out.print("Digite a sua primeira nota: ");
		double nota2 = entrada.nextDouble();

		double media = (nota1 + nota2) / 2;

		String situacao;

		if (media >= 6 && media <= 10) {
			situacao = "aprovado";
			System.out.println("A sua média foi " + media + ", portanto, você foi " + situacao + "!");
		} else if (media < 6 && media > 0) {
			situacao = "reprovado";
			System.out.println("A sua média foi " + media + ", portanto, você foi " + situacao + "!");
		} else {
			System.out.println("A sua média é inválida!");
		}

		entrada.close();
	}
}
