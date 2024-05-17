import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

public class Git {
	Map<String, Commit> commits;

	public Git() {
		this.commits = new HashMap<>();
	}

	public boolean adicionarCommit(String id, List<String> idsPais) {
		limparTela();
		if (commits.containsKey(id)) {
			System.out.println("Erro: Já existe um commit com esse ID.");
			return false;
		}

		Commit novoCommit = new Commit(id);
		for (String idPai : idsPais) {
			Commit pai = commits.get(idPai);
			if (pai == null) {
				System.out.println("Erro: Commit pai com ID '" + idPai + "' não encontrado.");
				return false;
			}
			novoCommit.adicionarPai(pai);
		}
		commits.put(id, novoCommit);
		return true;
	}

	public boolean fazerMerge(String idNovoCommit, String idCommit1, String idCommit2) {
		limparTela();
		if (commits.containsKey(idNovoCommit)) {
			System.out.println("Erro: Já existe um commit com esse ID de merge.");
			return false;
		}

		Commit commit1 = commits.get(idCommit1);
		Commit commit2 = commits.get(idCommit2);
		if (commit1 == null || commit2 == null) {
			System.out.println("Erro: Um dos commits para o merge não foi encontrado.");
			return false;
		}

		List<String> idsPais = Arrays.asList(idCommit1, idCommit2);
		return adicionarCommit(idNovoCommit, idsPais);
	}

	public boolean deletarCommit(String idCommit) {
		limparTela();
		if (!commits.containsKey(idCommit)) {
			System.out.println("Erro: Commit com ID '" + idCommit + "' não encontrado.");
			return false;
		}

		Set<String> paraDeletar = new HashSet<>();
		coletarTodosDependentes(idCommit, paraDeletar);
		paraDeletar.forEach(commits::remove);
		return true;
	}

	private void coletarTodosDependentes(String idCommit, Set<String> paraDeletar) {
		limparTela();
		paraDeletar.add(idCommit);
		for (Commit commit : commits.values()) {
			for (Commit pai : commit.pais) {
				if (pai.id.equals(idCommit) && !paraDeletar.contains(commit.id)) {
					coletarTodosDependentes(commit.id, paraDeletar);
				}
			}
		}
	}

	public void exibirCommits() {
		limparTela();
		if (commits.isEmpty()) {
			System.out.println("Não há commits para exibir.");
			return;
		}

		List<String> sortedIds = new ArrayList<>(commits.keySet());
		Collections.sort(sortedIds);

		System.out.println("\nLista de Commits:");
		for (String id : sortedIds) {
			Commit commit = commits.get(id);
			String pais = commit.pais.stream()
					.map(pai -> pai.id)
					.collect(Collectors.joining(", "));
			System.out.println("ID: " + commit.id + (pais.isEmpty() ? "" : " - Pais: " + pais));
		}
	}

	public static void limparTela() {
		System.out.print("\033[H\033[2J");
		System.out.flush();
	}
}
