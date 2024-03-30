package br.senac.edu;

import java.util.Scanner;

import br.senac.edu.models.Fila;
import br.senac.edu.models.Pessoa;
import br.senac.edu.models.Prioridade;
import br.senac.edu.models.Sexo;

public class Main {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int opcao;
		Fila<Pessoa> fila = new Fila<Pessoa>();
		int contadorPrioritario = 0;

		System.out.println("\033[H\033[2J");

		do {
			System.out.println("SISTEMA DE FILA DE ATENDIMENTO\n");

			System.out.println("""
					1 - Adicionar pessoa
					2 - Atender pessoa
					3 - Listar fila
					4 - Sair
					""");

			System.out.print("Escolha uma opção: ");

			try {
				opcao = sc.nextInt();
			} catch (Exception e) {
				System.out.println("\033[H\033[2J");
				System.out.println("Digite apenas números!\n");
				opcao = 0;
				sc.next();
				continue;
			}

			switch (opcao) {
				case 1:
					System.out.println("\033[H\033[2J");
					System.out.println("Adicionar pessoa\n");

					System.out.print("Digite o nome da pessoa: ");
					sc.nextLine();
					String nome = sc.nextLine();

					System.out.print("Digite a idade da pessoa: ");
					int idade = sc.nextInt();

					System.out.println("Digite o sexo da pessoa: ");
					int opcaoSexo = 0;
					do {
						System.out.println("""
								1 - Masculino
								2 - Feminino
								""");
						try {
							opcaoSexo = sc.nextInt();
						} catch (Exception e) {
							System.out.println("\033[H\033[2J");
							System.out.println("Digite apenas números!\n");
							opcaoSexo = 0;
							sc.next();
							continue;
						}
					} while (opcaoSexo < 1 || opcaoSexo > 2 || opcaoSexo == 0);
					Sexo sexo = opcaoSexo == 1 ? Sexo.Masculino : Sexo.Feminino;

					int opcaoGestante = 0;
					if (sexo == Sexo.Feminino) {

						do {
							System.out.println("""
									A mulher é gestante?
									1 - Sim
									2 - Não
									""");
							try {
								opcaoGestante = sc.nextInt();
							} catch (Exception e) {
								System.out.println("\033[H\033[2J");
								System.out.println("Digite apenas números!\n");
								opcaoGestante = 0;
								sc.next();
								continue;
							}
						} while (opcaoGestante < 1 || opcaoGestante > 2 || opcaoGestante == 0);
					}

					Prioridade prioridade;
					if (opcaoGestante == 1) {
						prioridade = Prioridade.Gestante;
					} else if (idade >= 60) {
						prioridade = Prioridade.Idoso;
					} else {
						prioridade = Prioridade.Normal;
					}

					fila.enfileira(new Pessoa(nome, idade, opcaoGestante == 1, sexo, prioridade));

					System.out.println("\033[H\033[2J");
					System.out.println("Pessoa adicionada com sucesso!\n");
					break;

				case 2:
					System.out.println("\033[H\033[2J");

					if (fila.estaVazia()) {
						System.out.println("A fila está vazia!\n");
						break;
					}

					boolean atendimentoRealizado = false;
					for (int i = 0; i < fila.tamanho() && !atendimentoRealizado; i++) {
						Pessoa pessoa = fila.espiar(i);
						boolean ehPrioritario = pessoa.getPrioridade() == Prioridade.Gestante
								|| pessoa.getPrioridade() == Prioridade.Idoso;

						if (ehPrioritario && contadorPrioritario < 3) {
							System.out.println(pessoa.toString());
							fila.desenfileira(i);
							contadorPrioritario++;
							atendimentoRealizado = true;
						} else if (!ehPrioritario && contadorPrioritario >= 3) {
							System.out.println(pessoa.toString());
							fila.desenfileira(i);
							contadorPrioritario = 0;
							atendimentoRealizado = true;
						} else if (!ehPrioritario && fila.tamanho() == 1) {
							System.out.println(pessoa.toString());
							fila.desenfileira(i);
							contadorPrioritario = 0;
							atendimentoRealizado = true;
						}
					}

					if (!atendimentoRealizado && contadorPrioritario < 3) {
						Pessoa pessoa = fila.espiar(0);
						System.out.println(pessoa.toString());
						fila.desenfileira(0);
						if (pessoa.getPrioridade() != Prioridade.Normal) {
							contadorPrioritario++;
						} else {
							contadorPrioritario = 0;
						}
					}
					break;
				case 3:
					System.out.println("\033[H\033[2J");

					if (fila.estaVazia()) {
						System.out.println("A fila está vazia!\n");
						break;
					}

					System.out.println("Listar fila\n");

					for (int i = 0; i < fila.tamanho(); i++) {
						Pessoa pessoa = fila.espiar(i);

						System.out.println(pessoa.toString());

					}

					break;
				case 4:
					System.out.println("\033[H\033[2J");
					System.out.println("Saindo...\n");
					break;
				default:
					System.out.println("\033[H\033[2J");
					System.out.println("Opção inválida! Digite novamente!\n");
					break;
			}

		} while (opcao != 4 || opcao < 1 || opcao > 4 || opcao == 0);

		sc.close();
	}
}
