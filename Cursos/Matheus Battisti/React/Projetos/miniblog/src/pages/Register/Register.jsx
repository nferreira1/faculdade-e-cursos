// React
import { useState, useEffect } from 'react'

// Hooks
import { useAuthentication } from '../../hooks/useAuthentication'

// Styles
import styles from './Register.module.css'

const Register = () => {

	const [user, setUser] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})
	const [error, setError] = useState('')

	const { createUser, error: authError, carregando } = useAuthentication()

	const handleSubmit = async e => {
		e.preventDefault()

		setError('')

		if (user.password !== user.confirmPassword) {
			setError('As senhas precisam ser iguais!')
			return
		}

		const NewUser = {
			...user
		}

		delete NewUser.confirmPassword;

		const resposta = await createUser(NewUser)

		console.log(NewUser)
		console.log(resposta)
	}

	useEffect(() => {
		if (authError) {
			setError(authError)
		}
	}, [authError])

	return (
		<div className={styles.register}>
			<h1>Cadastra-se para postar</h1>

			<p>Crie o seu usuário e compartilhe as suas histórias</p>

			<form onSubmit={handleSubmit}>

				<label>
					<span>Nome:</span>
					<input
						type='text'
						name='displayName'
						placeholder='Nome do usuário'
						required
						value={user.displayName}
						onChange={e => setUser({ ...user, displayName: e.target.value })}
					/>
				</label>

				<label>
					<span>Email:</span>
					<input
						type='email'
						name='email'
						placeholder='E-mail do usuário'
						required
						value={user.email}
						onChange={e => setUser({ ...user, email: e.target.value })}
					/>
				</label>

				<label>
					<span>Senha:</span>
					<input
						type='password'
						name='password'
						placeholder='Senha do usuário'
						required
						value={user.password}
						onChange={e => setUser({ ...user, password: e.target.value })}
					/>
				</label>

				<label>
					<span>Confirmação de senha:</span>
					<input
						type='password'
						name='confirmPassword'
						placeholder='Confirme a sua senha'
						required
						value={user.confirmPassword}
						onChange={e => setUser({ ...user, confirmPassword: e.target.value })}
					/>
				</label>

				{!carregando && <button className='btn'>Cadastrar</button>}
				{carregando && <button className='btn' disabled>Aguarde</button>}
				{error && <p className='error'>{error}</p>}

			</form>
		</div>
	)
}

export default Register
