import { useState } from "react"

const ConditionalRender = () => {

	const [x] = useState(true)

	const [name, setName] = useState('João')

	return (
		<div>
			<h1>Isso será exibido?</h1>
			{x && <p>Se x for true, sim!</p>} {/* O que está do lado direito sempre será verdadeiro */}
			{!x && <p>Agora x é falso</p>}
			<h1>If ternario</h1>
			{name === 'Nathan' ? (
				<div>
					<p>O nome é Nathan</p>
				</div>
			) : (
				<div>
					<p>Nome não encontrado</p>
				</div>
			)}
			<button onClick={() => setName('Nathan')}>Clique aqui!</button>
		</div>
	)
}

export default ConditionalRender
