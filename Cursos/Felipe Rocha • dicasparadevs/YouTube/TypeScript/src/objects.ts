// Type
type User = {
	id: number
	name: string
	email?: string // Com o ?, ele torna opcional
	password?: string
	orders: Order[]
	register(): string
}

type Order = {
	productId: string
	price: number
}

const user: User = {
	id: 1,
	name: 'Nathan',
	orders: [{ productId: '1', price: 10 }],
	register() {
		return 'user'
	}
}

const printLog = (message: string): void => { }
printLog(user.password!)


// Unions
type Author = {
	books: string[]
}

const author: Author & User = {
	id: 2,
	name: 'Nathan',
	orders: [],
	books: ['Livro 1', 'Livro 2'],
	register() {
		return 'author'
	}
}


// Interfaces
interface UserInterface {
	readonly name: string
	email: string
}

const emailUser: UserInterface = {
	name: 'Nathan',
	email: ''
}

interface AuthorInterface {
	books: string[]
}

const newAuthor: AuthorInterface & UserInterface = {
	name: 'Nathan',
	email: '',
	books: []
}

type Grade = number | string
const grade: Grade = 1
