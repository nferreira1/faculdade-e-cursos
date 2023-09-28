// 3 - Alterando o contexto
import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"

const ChangeCounter = () => {

	const { contador, setContador } = useContext(CounterContext)


	return (
		<div>
			<button onClick={() => setContador(contador + 1)}>Adicionar valor ao contador</button>
		</div>
	)
}

export default ChangeCounter
