import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("Digite um número para saber a tabuada: ");
		int numero = sc.nextInt();

		System.out.print("Quer saber até qual tabuada: ");
		int tamanhoTabuada = sc.nextInt();

		int[] vetor = new int[++tamanhoTabuada];

		for (int i = 0; i < vetor.length; i++) {
			vetor[i] = numero * i;
		}

		for (int i : vetor) {
			System.out.println(numero + " x " + i + " = " + vetor[i]);
		}

		sc.close();
	}
}
