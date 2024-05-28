import java.util.Scanner;

// import static org.junit.jupiter.api.Assertions.assertEquals;

// import org.junit.jupiter.api.Test;

public class Main {
  public static void main(String[] args) {
    Grafo grafo = new Grafo();

    String[] pontos = { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
        "T", "U", "V", "X" };
    for (String ponto : pontos) {
      grafo.adicionarNo(ponto);
    }

    grafo.adicionarAresta("A", "B", 300);
    grafo.adicionarAresta("B", "C", 47);
    grafo.adicionarAresta("C", "D", 62);
    grafo.adicionarAresta("C", "H", 141);
    grafo.adicionarAresta("D", "E", 8);
    grafo.adicionarAresta("E", "F", 13);
    grafo.adicionarAresta("E", "G", 230);
    grafo.adicionarAresta("H", "I", 138);
    grafo.adicionarAresta("I", "J", 153);
    grafo.adicionarAresta("J", "K", 512);
    grafo.adicionarAresta("K", "L", 135);
    grafo.adicionarAresta("L", "M", 20); // NÃO TINHA NA IMAGEM, ENTÃO COLOQUEI UM VALOR QUE ACHEI QUE ERA DE ACORDO
    grafo.adicionarAresta("L", "N", 187);
    grafo.adicionarAresta("N", "O", 108);
    grafo.adicionarAresta("O", "P", 82);
    grafo.adicionarAresta("P", "Q", 215);
    grafo.adicionarAresta("Q", "R", 97);
    grafo.adicionarAresta("R", "S", 33);
    grafo.adicionarAresta("R", "T", 243);
    grafo.adicionarAresta("S", "T", 207);
    grafo.adicionarAresta("S", "V", 38);
    grafo.adicionarAresta("T", "U", 22);
    grafo.adicionarAresta("V", "U", 210);
    grafo.adicionarAresta("V", "A", 370);
    grafo.adicionarAresta("U", "X", 107);
    grafo.adicionarAresta("X", "A", 317);

    Scanner sc = new Scanner(System.in);
    System.out.print("Digite o ponto de partida: ");
    String inicio = sc.nextLine().toUpperCase();
    System.out.print("Digite o ponto de chegada: ");
    String fim = sc.nextLine().toUpperCase();

    if (!grafo.nos.containsKey(inicio) || !grafo.nos.containsKey(fim)) {
      System.out.println("Ponto de partida ou chegada inválido.");
      sc.close();
      return;
    }

    grafo.encontrarEImprimirCaminhos(inicio, fim);

    sc.close();
  }
}
