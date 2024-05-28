import java.util.ArrayList;
import java.util.List;

public class No {
  String nome;
  List<Aresta> arestas;
  int distancia;
  No anterior;

  public No(String nome) {
    this.nome = nome;
    this.arestas = new ArrayList<>();
    this.distancia = Integer.MAX_VALUE;
    this.anterior = null;
  }

  public void adicionarAresta(Aresta aresta) {
    this.arestas.add(aresta);
  }
}
