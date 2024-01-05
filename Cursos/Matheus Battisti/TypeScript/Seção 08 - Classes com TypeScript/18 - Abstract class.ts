// 18 - Abstract class

abstract class AbstractClass {
	public abstract get getNome(): string
}

class AbstractClass2 extends AbstractClass {

	constructor(private nome: string) {
		super()
		this.nome = nome
	}

	public get getNome(): string {
		return this.nome
	}
}
