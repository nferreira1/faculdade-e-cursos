import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Informe a quantidade de notas: ");
        byte quantidadeNotas = sc.nextByte();

        float[] numeros = new float[quantidadeNotas];
        float maiorNota = 0;
        float menorNota = 0;
        float media = 0;

        for (int i = 0; i < numeros.length; i++) {
            System.out.printf("Informe a %dº nota: ", i + 1);
            numeros[i] = sc.nextFloat();
            if (numeros[i] > maiorNota) {
                maiorNota = numeros[i];
            } else {
                menorNota = numeros[i];
            }
            media += numeros[i];
        }

        System.out.printf("A sua média foi %.2f\n", media / numeros.length);
        System.out.printf("A sua maior nota foi %.2f\n", maiorNota);
        System.out.printf("A sua menor nota foi %.2f\n", menorNota);

        sc.close();
    }
}