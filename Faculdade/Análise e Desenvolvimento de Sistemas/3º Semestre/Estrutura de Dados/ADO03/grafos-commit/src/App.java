import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class App {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Git git = new Git();
		int opcao;
		do {
			System.out.println("\nMenu:");
			System.out.println("1 - Adicionar Commit");
			System.out.println("2 - Fazer Merge");
			System.out.println("3 - Deletar Commit");
			System.out.println("4 - Exibir Commits");
			System.out.println("5 - Sair");
			System.out.print("Escolha uma opção: ");
			opcao = scanner.nextInt();
			scanner.nextLine();

			switch (opcao) {
				case 1:
					System.out.print("Digite o ID do commit: ");
					String id = scanner.nextLine();
					System.out.print("Digite o ID do commit pai (deixe em branco se não houver): ");
					String idPai = scanner.nextLine();
					List<String> pais = new ArrayList<>();
					if (!idPai.isEmpty()) {
						pais.add(idPai);
					}
					git.adicionarCommit(id, pais);
					break;
				case 2:
					System.out.print("Digite o ID do primeiro commit para o merge: ");
					String id1 = scanner.nextLine();
					System.out.print("Digite o ID do segundo commit para o merge: ");
					String id2 = scanner.nextLine();
					System.out.print("Digite o ID do novo commit de merge: ");
					String idMerge = scanner.nextLine();
					git.fazerMerge(idMerge, id1, id2);
					break;
				case 3:
					System.out.print("Digite o ID do commit a ser deletado: ");
					String idDel = scanner.nextLine();
					git.deletarCommit(idDel);
					break;
				case 4:
					git.exibirCommits();
					break;
				case 5:
					System.out.println("Saindo...");
					break;
				default:
					System.out.println("Opção inválida. Tente novamente.");
			}
		} while (opcao != 5);
		scanner.close();
	}
}
