// Serve para pegar o parametro que é passado no path do Route
import { useParams, Link } from "react-router-dom"

// Hooks
import { useFetch } from '../hooks/useFetch'

const Product = () => {

	// 4 - Rota dinâmica
	const { id } = useParams()

	// 5 - Carregamento de dado individual
	const url = `http://localhost:3000/products/${id}`
	const { dados: product, loading, error } = useFetch(url)

	return (
		<div>
			<p>ID do produto: {id}</p>
			{error && <p>{error}</p>}
			{loading && <p>Carregando...</p>}
			{product && (
				<div>
					<h1>{product.name}</h1>
					<p>{product.price}</p>
					{/* 6 - Nested Routes */}
					<Link to={`/products/${id}/info`}>Mais informações</Link>
					{/* ou */}
					{/* <Link to={`/products/${product.id}/info`}>Mais informações</Link> */}
				</div>
			)}
		</div>
	)
}

export default Product
