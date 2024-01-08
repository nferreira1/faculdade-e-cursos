// 08 - Exemplo real com Method decorator

function checarSeUsuarioPostou() {
	return function (target: object, key: string | Symbol, descriptor: PropertyDescriptor) {
		const childFunction = descriptor.value
		// console.log(childFunction)

		descriptor.value = function (...args: any[]) {
			if (args[1] === true) {
				console.log('Usuário já postou!')
				return null
			} else {
				return childFunction.apply(this, args)
			}
		}

		return descriptor
	}
}

class Post {

	public jaPostado: boolean = false

	@checarSeUsuarioPostou()
	post(conteudo: string, jaPostado: boolean) {
		this.jaPostado = true
		console.log(`Post do usuário: ${conteudo}`)
	}
}

const novoPost = new Post()

// novoPost.post('Meu primeiro post!', novoPost.jaPostado)
// novoPost.post('Meu primeiro post!', novoPost.jaPostado)
