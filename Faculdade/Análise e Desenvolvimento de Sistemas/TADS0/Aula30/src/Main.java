import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);

		System.out.print("Informe o valor da compra: ");
		double valorTotal = entrada.nextDouble();

		System.out.print("Informe o cupom de desconto: ");
		String cupom = entrada.next();

//		Para comparar Strings, deve se usar o equals ao invés do ==. O equals compara tanto letra maiúscula, quanto minúscula, ele é equivalente ao === do JavaScript.
//		Há também o equalsIgnoreCase, este ignora o tamanho das letras, o que importa é digitar a String igual, ele é equivalente ao == do JavaScript.
		if (cupom.equals("DESC100") && valorTotal > 100) {
			valorTotal -= 100;
		} else if (cupom.equals("DESC10") && valorTotal < 100) {
			valorTotal -= 10;
		}

		System.out.print("O valor com o desconto aplicado, será de " + valorTotal);

		entrada.close();
	}
}
