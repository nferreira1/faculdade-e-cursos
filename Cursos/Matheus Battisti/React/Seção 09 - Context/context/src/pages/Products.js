// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"


const Products = () => {

	// const {contador} = useContext(CounterContext)

	const { contador } = useCounterContext()

	return (
		<div>
			<h1>Products</h1>
			<p>Valor do contador: {contador}</p>
		</div>
	)
}

export default Products
