// 01 - Integração Express + TS

// console.log('Express + TS')



// 02 - Iniciando o Express

import express, { NextFunction, Request, Response } from 'express'

export const app = express()

app.get('/', (req, res) => {
	return res.send('Hello Express + TS')
})

app.listen(3000, () => {
	console.log('Server is running')
})



// 03 - Rota com POST

app.use(express.json())

app.post('/api/produto', (req, res) => {
	console.log(req.body)

	return res.send('Produto adicionado com sucesso!')
})



// 11 - Middlewares em todas as rotas

function mostrarPath(req: Request, res: Response, next: NextFunction) {
	console.log(`Path: ${req.path}`)
	next()
}

app.use(mostrarPath)



// 04 - Rota para qualquer verbo

app.all('/api/produto/check', (req, res) => {

	// req.method = verbo HTTP

	if (req.method === 'POST') {
		return res.send('Inseriu algum registro')
	} else if (req.method === 'GET') {
		return res.send('Leu algum registro')
	} else {
		return res.send('Não podemos realizar esta operação!')
	}

})



// 5 - Interfaces do Express

app.get('/api/interfaces', (req: Request, res: Response) => {

	return res.send('Utilizando as interfaces do Express')

})



// 06 - Enviando JSON

app.get('/api/json', (req: Request, res: Response) => {

	return res.json({
		nome: 'Camiseta',
		preco: 39.90,
		cor: 'Branca',
		tamanhos: ['P', 'M', 'G']
	})

})



// 07 - Router parameters

app.get('/api/produto/:id', (req: Request, res: Response) => {

	console.log(req.params)

	const id = req.params.id

	if (id === '1') {

		const produto = {
			id: 1,
			nome: 'Camiseta',
			preco: 39.90,
			cor: 'Branca',
			tamanhos: ['P', 'M', 'G']
		}

		return res.json(produto)
	}

	return res.send(`Produto não encontrado!`)
})



// 08 - Rotas mais complexas

app.get('/api/produto/:id/review/:reviewId', (req: Request, res: Response) => {

	console.log(req.params)

	const produtoId = req.params.id
	const reviewId = req.params.reviewId

	return res.send(`Acessando a review ${reviewId} do produto ${produtoId}`)
})



// 09 - Router handler

function getUser(req: Request, res: Response) {
	console.log(`Resgatando o usuário com o id: ${req.params.id}`)

	return res.send(`Usuário com o id ${req.params.id} encontrado!`)
}

app.get('/api/usuario/:id', getUser)



// 10 - Middlewares

function checarUsuario(req: Request, res: Response, next: NextFunction) {
	if (req.params.id === '1') {
		console.log('Acesso concedido!')
		next()
	}

	return res.send('Acesso negado!')
}

app.get('/api/usuario/:id/access', checarUsuario, (req: Request, res: Response) => {

	return res.json({ message: 'Bem-vindo ao área administrativa!' })

})



// 12 - Interfaces de Requisição e Resposta

app.get(
	'/api/usuario/:id/detalhes/:nome',
	(req: Request<{ id: string, nome: string }>, res: Response<{ status: boolean }>) => {
		console.log(`ID: ${req.params.id}`)
		console.log(`Nome: ${req.params.nome}`)

		return res.json({ status: true })
	}
)



// 13 - Tratando erros

app.get('/api/erro', (req: Request, res: Response) => {

	try {
		throw new Error('Algo deu errado!')
	} catch (e: any) {
		return res.status(500).json({ message: e.message })
	}
})

