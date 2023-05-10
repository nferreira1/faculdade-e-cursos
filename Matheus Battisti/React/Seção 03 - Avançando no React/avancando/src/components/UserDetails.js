const UserDetails = ({ name, age, job }) => {

	return (
		<div>
			<h2>Desafio 04</h2>
			<h4>NOME: {name.toUpperCase()}</h4>
			<p>IDADE: {age}</p>
			<p>PROFISSÃO: {job.toUpperCase()}</p>
			{age >= 18 ? (
				<p>Pode tirar habilitação!</p>
			) : (
				<p>Não pode tirar habilitação!</p>
			)}
		</div >
	)
}

export default UserDetails
