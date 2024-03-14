package br.senac.edu;

import java.util.Scanner;

import br.senac.edu.models.Produto;

public class Main {
    public static void main(String[] args) {

        int opcao;
        Scanner sc = new Scanner(System.in);
        Estoque estoque = new Estoque(0);

        do {
            System.out.println("""
                    1 - Aumentar tamanho do estoque
                    2 - Ver tamanho do estoque
                    3 - Adicionar produto
                    4 - Remover produto
                    5 - Editar produto
                    6 - Buscar produto
                    7 - Listar produtos
                    8 - Sair
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
                    System.out.print("Digite o tamanho do estoque: ");
                    int capacidade = sc.nextInt();
                    estoque.setCapacidade(capacidade);
                    System.out.println("\033[H\033[2J");
                    System.out.println("Estoque modificado com sucesso!\n");
                    break;
                case 2:
                    System.out.println("\033[H\033[2J");
                    System.out.println("Tamanho do estoque: " + estoque.getCapacidade() + "\n");
                    break;
                case 3:
                    System.out.print("\033[H\033[2J");
                    System.out.print("Digite o nome do produto: ");
                    sc.nextLine();
                    String nome = sc.nextLine();
                    System.out.print("Digite a descrição do produto: ");
                    String descricao = sc.nextLine();
                    System.out.print("Digite o preço do produto: ");
                    double preco = sc.nextDouble();
                    System.out.print("Digite a quantidade do produto: ");
                    int quantidade = sc.nextInt();
                    System.out.print("\033[H\033[2J");
                    estoque.adicionar(new Produto(nome, descricao, preco, quantidade));
                    break;
                case 4:
                    System.out.print("Digite o id do produto: ");
                    int id = sc.nextInt();
                    System.out.print("\033[H\033[2J");
                    estoque.remover(id);
                    break;
                case 5:
                    System.out.print("Digite o id do produto: ");
                    id = sc.nextInt();
                    System.out.print("Digite o nome do produto: ");
                    sc.nextLine();
                    nome = sc.nextLine();
                    System.out.print("Digite a descrição do produto: ");
                    descricao = sc.nextLine();
                    System.out.print("Digite o preço do produto: ");
                    preco = sc.nextDouble();
                    System.out.print("Digite a quantidade do produto: ");
                    quantidade = sc.nextInt();
                    System.out.print("\033[H\033[2J");
                    estoque.editar(id, new Produto(nome, descricao, preco, quantidade));
                    break;
                case 6:
                    System.out.print("\033[H\033[2J");
                    System.out.print("Digite o id do produto: ");
                    id = sc.nextInt();
                    System.out.println();
                    System.out.println(estoque.buscar(id));
                    break;
                case 7:
                    System.out.print("\033[H\033[2J");
                    System.out.println(estoque.toString());
                    break;
                case 8:
                    System.out.println("Até logo! :)");
                    break;
                default:
                    System.out.println("\033[H\033[2J");
                    System.out.println("Opção inválida! Escolha novamente: \n");
                    break;
            }

        } while (opcao != 8);

        sc.close();
    }
}