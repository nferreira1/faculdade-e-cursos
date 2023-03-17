import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("Digite o tamanho do array: ");
		int tamanhoArray = sc.nextInt();

		int[] array = new int[tamanhoArray];

		for (int i = 0; i < array.length; i++) {
			System.out.printf("Digite o %dº número: ", i + 1);
			array[i] = sc.nextInt();
		}

		System.out.println("Números digitados: ");
		for (int i = 0; i < array.length; i++) {
			System.out.println((i + 1) + "º " + array[i]);
		}
	}
}
