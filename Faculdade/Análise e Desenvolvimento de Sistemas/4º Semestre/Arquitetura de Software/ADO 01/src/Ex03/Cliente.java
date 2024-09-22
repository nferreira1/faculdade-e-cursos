package Ex03;

import java.util.Scanner;

public class Cliente {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        try {

            System.out.print("Digite o tamanho do array: ");
            int tamanho = teclado.nextInt(); //criei um int com o nome de tamanho que vai receber do usuario o tamanho do array que ele deseja informar
            int[] arrayUsuario = new int[tamanho]; //dps eu crio um array que recebe como tamanho o mesmo valor que foi informado pelo usuario

            System.out.println("Digite os valores para o array:");
            for (int i = 0; i < tamanho; i++) { //aqui eu criei um for, onde enquanto o i for menor que o tamanho do array do usuario
                System.out.print("Valor " + (i + 1) + ": ");//ele vai ir digitando
                arrayUsuario[i] = teclado.nextInt();//
            }

            System.out.println("Escolha o método de ordenação:");
            System.out.println("0 - Insertion Sort");
            System.out.println("1 - Selection Sort");
            System.out.println("2 - Bubble Sort");

            int tipo = teclado.nextInt();

            OrdenacaoEnum.values()[tipo].ordenacao(arrayUsuario);

            System.out.println("Array ordenado:");
            for (int num : arrayUsuario) {
                System.out.print(num + " ");
            }
        } catch (ArrayIndexOutOfBoundsException ex) {
            System.out.println("Não existe essa opção, insira um valor entre 0 e 2!");
        }
    }
}
