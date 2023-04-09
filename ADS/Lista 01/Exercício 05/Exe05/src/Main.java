import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("Digite o lado de um quadrado: ");
		int ladoQuadrado = sc.nextInt();

		int area = ladoQuadrado * ladoQuadrado;

		System.out.printf("A área do quadrado é de %d", area);

		sc.close();
	}
}
