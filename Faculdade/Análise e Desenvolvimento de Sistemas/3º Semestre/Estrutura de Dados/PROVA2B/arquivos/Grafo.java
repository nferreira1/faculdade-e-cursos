import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Grafo {
  Map<String, No> nos;

  public Grafo() {
    nos = new HashMap<>();
  }

  public void adicionarNo(String nome) {
    nos.put(nome, new No(nome));
  }

  public void adicionarAresta(String de, String para, int peso) {
    No noDe = nos.get(de);
    No noPara = nos.get(para);
    noDe.adicionarAresta(new Aresta(noPara, peso));
    noPara.adicionarAresta(new Aresta(noDe, peso)); // Grafo não-direcionado
  }

  public void encontrarTodosOsCaminhos(String inicio, String fim, List<String> caminhoAtual,
      List<List<String>> todosOsCaminhos) {
    caminhoAtual.add(inicio);

    if (inicio.equals(fim)) {
      todosOsCaminhos.add(new ArrayList<>(caminhoAtual));
    } else {
      No noAtual = nos.get(inicio);
      for (Aresta aresta : noAtual.arestas) {
        if (!caminhoAtual.contains(aresta.destino.nome)) {
          encontrarTodosOsCaminhos(aresta.destino.nome, fim, caminhoAtual, todosOsCaminhos);
        }
      }
    }

    caminhoAtual.remove(caminhoAtual.size() - 1);
  }

  public int calcularDistancia(List<String> caminho) {
    int distancia = 0;
    for (int i = 0; i < caminho.size() - 1; i++) {
      No noAtual = nos.get(caminho.get(i));
      for (Aresta aresta : noAtual.arestas) {
        if (aresta.destino.nome.equals(caminho.get(i + 1))) {
          distancia += aresta.peso;
          break;
        }
      }
    }
    return distancia;
  }

  public void encontrarEImprimirCaminhos(String nomeInicio, String nomeFim) {
    List<List<String>> todosOsCaminhos = new ArrayList<>();
    encontrarTodosOsCaminhos(nomeInicio, nomeFim, new ArrayList<>(), todosOsCaminhos);

    if (todosOsCaminhos.isEmpty()) {
      System.out.println("Nenhum caminho encontrado.");
      return;
    }

    List<String> caminhoMaisCurto = null;
    List<String> caminhoMaisLongo = null;
    int menorDistancia = Integer.MAX_VALUE;
    int maiorDistancia = Integer.MIN_VALUE;

    for (List<String> caminho : todosOsCaminhos) {
      int distancia = calcularDistancia(caminho);
      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        caminhoMaisCurto = caminho;
      }
      if (distancia > maiorDistancia) {
        maiorDistancia = distancia;
        caminhoMaisLongo = caminho;
      }
    }

    System.out.println("Caminho mais curto:");
    imprimirCaminho(caminhoMaisCurto);
    System.out.println("Distância total: " + menorDistancia + " metros");

    System.out.println("Caminho mais longo:");
    imprimirCaminho(caminhoMaisLongo);
    System.out.println("Distância total: " + maiorDistancia + " metros");
  }

  private void imprimirCaminho(List<String> caminho) {
    if (caminho == null) {
      System.out.println("Nenhum caminho encontrado.");
      return;
    }
    for (int i = 0; i < caminho.size(); i++) {
      System.out.print(caminho.get(i));
      if (i < caminho.size() - 1) {
        System.out.print(" -> ");
      }
    }
    System.out.println();
  }
}
