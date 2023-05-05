import { useState } from "react"

const ListRender = () => {
	const [list] = useState(['Matheus', 'Pedro', 'Josias'])

	const [users, setUsers] = useState([
		{ id: 1, name: 'João', age: 31 },
		{ id: 2, name: 'Pedro', age: 32 },
		{ id: 3, name: 'Nathan', age: 22 },
	])

	const deleteRandom = () => {
		const randomNumber = Math.floor(Math.random() * 4)

		// ● Previous state é um recurso que nos permite pegar o dado em seu valor original dentro de um set de dado;
		// ● Isso é muito utilizado para modificar listas, pois temos o valor antigo e transformamos em um valor novo;
		// ● O primeiro argumento de um set sempre será o previous state;
		setUsers((prevUsers) => {
			return prevUsers.filter((user) => randomNumber !== user.id)
		})
	}

	return (
		<div>
			<ul>
				{list.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
			{/*
			● Iterar listas sem a propriedade key nos gera um warning, podemos verificar isso no console;
			● O React precisa de uma chave única em cada um dos itens iterados;
			● Isso serve para ajudá-lo na renderização do componente;
			● Geralmente teremos um array de objetos e podemos colocar key como
			alguma chave única, como o id de algum dado;
			● Em último caso devemos utilizar o index do método map;
			*/}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name} - {user.age}</li>
				))}
			</ul>
			<button onClick={deleteRandom}>Delete random user</button>
		</div>
	)
}

export default ListRender
