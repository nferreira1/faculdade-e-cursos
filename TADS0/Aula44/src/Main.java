import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Digite o tamanho do array: ");
		int tamanhoVetor = scanner.nextInt();

		int[] vetor = new int[tamanhoVetor];

		for (int i = 0; i < vetor.length; i++) {
			System.out.printf("Digite o %dº número: ", i + 1);
			vetor[i] = scanner.nextInt();
		}

		System.out.print("Valores digitados: ");
		for (int i : vetor) {
			System.out.printf("%d, ", i);
		}


//		int[] vetor = new int[3];
//		vetor[0] = 10;
//		vetor[1] = 20;
//		vetor[2] = 30;
//
////		forEach
//		for (int i : vetor) {
//			System.out.println(i);
//		}


		scanner.close();
	}
}
