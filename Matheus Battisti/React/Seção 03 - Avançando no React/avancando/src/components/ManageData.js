import { useState } from 'react'

const ManageData = () => {

	let someData = 10

	// useState serve para re-renderizar a página, inicialmente é passado um valor para o useState e quando o botão é clicado, ele re-renderiza a página para exibir o valor
	const [number, setNumber] = useState(15)

	return (
		<div>
			<div>
				<p>Valor: {someData}</p>
				<button onClick={() => someData = 15}>Mudar variável</button>
			</div>
			<div>
				<p>Valor: {number}</p>
				<button onClick={() => setNumber(25)}>Mudar o state</button>
			</div>
		</div>
	)
}

export default ManageData
