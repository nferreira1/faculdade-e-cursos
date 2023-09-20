import './App.css';

// React
import { useState, useEffect } from 'react'

// 4 - Hook customizado
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {
	// const [produtos, setProdutos] = useState([])

	// 4 - Hook customizado
	const { dados: itens, httpConfig, loading, error } = useFetch(url)

	const [nome, setNome] = useState("")
	const [preco, setPreco] = useState("")

	// 1 - Resgatando dados
	// useEffect(() => {

	// 	async function fetchData() {
	// 		const response = await fetch(url)
	// 		const data = await response.json()

	// 		setProdutos(data)
	// 	}

	// 	fetchData()

	// }, [])


	// 2 - Adição de produtos
	const handleSubmit = async (e) => {
		e.preventDefault()

		const produto = { name: nome, price: preco }

		// const response = await fetch(url, {
		// 	method: 'POST',
		// 	headers: {
		// 		// O tipo de conteúdo a ser enviado pelo POST, que no caso é um JSON
		// 		'Content-Type': 'application/json'
		// 	},
		// 	// O body é o conteúdo que será enviado, que no caso é o produto
		// 	body: JSON.stringify(produto)
		// })


		// // 3 - Carregamento dinâmico
		// const produtoAdicionado = await response.json()
		// setProdutos(prevProdutos => [...prevProdutos, produtoAdicionado])

		// 5 - Refatorando o POST
		httpConfig(produto, 'POST')

		setNome("")
		setPreco("")
	}

	// 9 - Desafio
	const handleRemove = (id) => {
		httpConfig(id, 'DELETE')
	}

	return (
		<div className="App">
			<h1>Lista de produtos</h1>
			{/* 6 - Loading */}
			{loading && <p>Carregando dados...</p>}
			{error && <p>{error}</p>}

			{!loading && (
				<ul>
					{itens && itens.map(produto => (
						<li key={produto.id}>
							{produto.name} - R$ {produto.price}
							<button onClick={() => handleRemove(produto.id)}>Excluir</button>
						</li>
					))}
				</ul>
			)}

			<div className="add-product">
				<form onSubmit={handleSubmit}>

					<label>
						Nome
						<input type="text" value={nome} name='nome' onChange={e => setNome(e.target.value)} />
					</label>

					<label>
						Preço
						<input type="text" value={preco} name='preco' onChange={e => setPreco(e.target.value)} />
					</label>

					{/* 7 - state de loading no post */}
					{loading && <input type="submit" disabled value='Aguarde' />}
					{!loading && <input type="submit" value='Criar Produto' />}

				</form>
			</div>

		</div>
	);
}

export default App;
