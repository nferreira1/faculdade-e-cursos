import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class CampeonatoBrasileiro {

	public static void main(String[] args) {
		String diretorio = System.getProperty("user.dir") + "/data";
		Map<String, String> clubeEstado = new HashMap<>();
		Map<String, int[]> titulosPorClube = new HashMap<>();
		Map<String, int[]> titulosPorEstado = new HashMap<>();
		Set<String> todosOsClubes = new HashSet<>();
		Set<String> todosOsEstados = new HashSet<>();

		// Carregar mapeamento de clubes para estados
		try (BufferedReader br = new BufferedReader(new FileReader(diretorio + "/estados.txt"))) {
			String linha;
			while ((linha = br.readLine()) != null) {
				String[] partes = linha.split(",");
				if (partes.length == 2) {
					String clube = partes[0].trim();
					String estado = partes[1].trim();
					clubeEstado.put(clube, estado);
					todosOsClubes.add(clube);
					todosOsEstados.add(estado);
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		}

		// Lista de anos dos arquivos
		int[] anos = {
				2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
				2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
		};

		// Inicializar contagem de títulos, vice-campeonatos e terceiros lugares para
		// cada clube e estado
		for (String clube : todosOsClubes) {
			titulosPorClube.put(clube, new int[3]); // [títulos, vice, terceiro]
		}
		for (String estado : todosOsEstados) {
			titulosPorEstado.put(estado, new int[3]); // [títulos, vice, terceiro]
		}

		// Contabilizar títulos, vice-campeonatos e terceiros lugares por clube e por
		// estado
		for (int ano : anos) {
			String arquivo = diretorio + "/" + ano + ".txt";
			try (BufferedReader br = new BufferedReader(new FileReader(arquivo))) {
				// Pular a linha de cabeçalho
				br.readLine();

				// Processar as três primeiras colocações
				for (int i = 0; i < 3; i++) {
					String linhaClassificacao = br.readLine();
					if (linhaClassificacao != null && !linhaClassificacao.isEmpty()) {
						String clube = linhaClassificacao.split(",")[1]; // Supondo que o clube está na segunda coluna
						String estado = clubeEstado.get(clube);
						if (estado != null) {
							titulosPorClube.get(clube)[i]++;
							titulosPorEstado.get(estado)[i]++;
						}
					}
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		Scanner scanner = new Scanner(System.in);
		int escolha;

		limparTela();

		do {
			System.out.println("Escolha uma opção:");
			System.out.println("1. Listar títulos por clube");
			System.out.println("2. Listar títulos por estado");
			System.out.println("3. Listar títulos por clube e por estado com critérios de desempate");
			System.out.println("4. Sair");
			escolha = scanner.nextInt();

			switch (escolha) {
				case 1:
					limparTela();
					listarTitulosPorClube(titulosPorClube);
					break;
				case 2:
					limparTela();
					listarTitulosPorEstado(titulosPorEstado);
					break;
				case 3:
					limparTela();
					listarTitulosPorClubeComDesempate(titulosPorClube);
					listarTitulosPorEstadoComDesempate(titulosPorEstado);
					break;
				case 4:
					System.out.println("Saindo...");
					break;
				default:
					System.out.println("Opção inválida. Tente novamente.");
			}
		} while (escolha != 4);

		scanner.close();
	}

	private static void listarTitulosPorClube(Map<String, int[]> titulosPorClube) {
		List<Map.Entry<String, int[]>> listaTitulosPorClube = new ArrayList<>(titulosPorClube.entrySet());
		listaTitulosPorClube.sort((a, b) -> Integer.compare(b.getValue()[0], a.getValue()[0]));

		System.out.printf("%-20s %10s%n", "Clube", "Títulos");
		System.out.println("------------------------------------");
		for (Map.Entry<String, int[]> entry : listaTitulosPorClube) {
			System.out.printf("%-20s %10d%n", entry.getKey(), entry.getValue()[0]);
		}
	}

	private static void listarTitulosPorEstado(Map<String, int[]> titulosPorEstado) {
		List<Map.Entry<String, int[]>> listaTitulosPorEstado = new ArrayList<>(titulosPorEstado.entrySet());
		listaTitulosPorEstado.sort((a, b) -> Integer.compare(b.getValue()[0], a.getValue()[0]));

		System.out.printf("%-20s %10s%n", "Estado", "Títulos");
		System.out.println("------------------------------------");
		for (Map.Entry<String, int[]> entry : listaTitulosPorEstado) {
			System.out.printf("%-20s %10d%n", entry.getKey(), entry.getValue()[0]);
		}
	}

	private static void listarTitulosPorClubeComDesempate(Map<String, int[]> titulosPorClube) {
		List<Map.Entry<String, int[]>> listaTitulosPorClube = new ArrayList<>(titulosPorClube.entrySet());
		listaTitulosPorClube.sort((a, b) -> {
			int comp = Integer.compare(b.getValue()[0], a.getValue()[0]); // Comparar títulos
			if (comp != 0)
				return comp;
			comp = Integer.compare(b.getValue()[1], a.getValue()[1]); // Comparar vice
			if (comp != 0)
				return comp;
			return Integer.compare(b.getValue()[2], a.getValue()[2]); // Comparar terceiro
		});

		System.out.printf("%-20s %10s %10s %10s%n", "Clube", "Títulos", "Vice", "Terceiro");
		System.out.println("------------------------------------------------------------");
		for (Map.Entry<String, int[]> entry : listaTitulosPorClube) {
			System.out.printf("%-20s %10d %10d %10d%n", entry.getKey(), entry.getValue()[0], entry.getValue()[1],
					entry.getValue()[2]);
		}
	}

	private static void listarTitulosPorEstadoComDesempate(Map<String, int[]> titulosPorEstado) {
		List<Map.Entry<String, int[]>> listaTitulosPorEstado = new ArrayList<>(titulosPorEstado.entrySet());
		listaTitulosPorEstado.sort((a, b) -> {
			int comp = Integer.compare(b.getValue()[0], a.getValue()[0]); // Comparar títulos
			if (comp != 0)
				return comp;
			comp = Integer.compare(b.getValue()[1], a.getValue()[1]); // Comparar vice
			if (comp != 0)
				return comp;
			return Integer.compare(b.getValue()[2], a.getValue()[2]); // Comparar terceiro
		});

		System.out.printf("%-20s %10s %10s %10s%n", "Estado", "Títulos", "Vice", "Terceiro");
		System.out.println("------------------------------------------------------------");
		for (Map.Entry<String, int[]> entry : listaTitulosPorEstado) {
			System.out.printf("%-20s %10d %10d %10d%n", entry.getKey(), entry.getValue()[0], entry.getValue()[1],
					entry.getValue()[2]);
		}
	}

	private static void limparTela() {
		System.out.print("\033[H\033[2J");
		System.out.flush();
	}
}
