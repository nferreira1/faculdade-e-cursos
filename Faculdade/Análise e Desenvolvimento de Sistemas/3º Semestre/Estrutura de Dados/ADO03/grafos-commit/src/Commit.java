import java.util.ArrayList;
import java.util.List;

class Commit {
	String id;
	List<Commit> pais;

	public Commit(String id) {
		this.id = id;
		this.pais = new ArrayList<>();
	}

	public void adicionarPai(Commit pai) {
		this.pais.add(pai);
	}
}
