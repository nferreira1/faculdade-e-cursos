package br.senac.edu.models;

public class Pessoa {

  private String nome;
  private int idade;
  private boolean gestante;
  private Sexo sexo;
  private Prioridade prioridade;

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public int getIdade() {
    return idade;
  }

  public void setIdade(int idade) {
    this.idade = idade;
  }

  public boolean isGestante() {
    return gestante;
  }

  public void setGestante(boolean gestante) {
    this.gestante = gestante;
  }

  public Sexo getSexo() {
    return sexo;
  }

  public void setSexo(Sexo sexo) {
    this.sexo = sexo;
  }

  public Prioridade getPrioridade() {
    return prioridade;
  }

  public void setPrioridade(Prioridade prioridade) {
    this.prioridade = prioridade;
  }

  public Pessoa(String nome, int idade, boolean gestante, Sexo sexo, Prioridade prioridade) {
    this.nome = nome;
    this.idade = idade;
    this.gestante = gestante;
    this.sexo = sexo;
    this.prioridade = prioridade;
  }

  @Override
  public String toString() {
    return """
        Nome: %s
        Idade: %d
        Sexo: %s
        Prioridade: %s
        """.formatted(this.nome, this.idade, this.sexo, this.prioridade);
  }

}
