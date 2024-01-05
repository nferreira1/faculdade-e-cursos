// 09 - Herdando interfaces

interface mostrarTitulo {
	itemTitulo(): string
}

class BlogPost implements mostrarTitulo {

	titulo

	constructor(titulo: string) {
		this.titulo = titulo
	}

	itemTitulo(): string {
		return this.titulo
	}

}

const post = new BlogPost('Aprendendo TypeScript')

// console.log(post.itemTitulo())
