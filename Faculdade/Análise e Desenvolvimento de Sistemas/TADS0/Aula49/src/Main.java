import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("Informe a quantidade de notas: ");
		byte quantidadeNotas = sc.nextByte();

		float[] notas = new float[quantidadeNotas];
		float somaNotas = 0;

		for (byte i = 0; i < notas.length; i++) {
			System.out.printf("Digite a sua %dº nota: ", i + 1);
			notas[i] = sc.nextFloat();
			somaNotas += notas[i];
		}

		System.out.printf("A sua média foi %.2f!", somaNotas / notas.length);

		sc.close();
	}
}
