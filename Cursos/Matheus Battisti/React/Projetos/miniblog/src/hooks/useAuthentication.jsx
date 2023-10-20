// React
import { useState, useEffect } from 'react'

// Firebase
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'

export const useAuthentication = () => {

	const [error, setError] = useState(null)
	const [carregando, setCarregando] = useState(null)

	// Cleanup
	// Lida com o vazamento de memória
	const [cancelado, setCancelado] = useState(false)

	const auth = getAuth()

	const checaCancelado = () => {
		if (cancelado) {
			return
		}
	}

	// Register
	const createUser = async (data) => {
		checaCancelado()
		setCarregando(true)
		setError(null)

		try {

			const { user } = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password,
			)

			await updateProfile(user, { displayName: data.displayName })

			setCarregando(false)

			return user
		} catch (error) {
			console.log(error.message)
			console.log(typeof error.message)

			let systemErrorMessage

			if (error.message.includes('Password')) {
				systemErrorMessage = 'A senha precisa ter 6 caracteres ou mais!'
			} else if (error.message.includes('email-already')) {
				systemErrorMessage = 'O e-mail já está em uso!'
			} else {
				systemErrorMessage = 'Ocorreu um erro ao criar o usuário!'
			}

			setError(systemErrorMessage)
			setCarregando(false)
		}
	}

	// Logout
	const logout = () => {
		checaCancelado()
		signOut(auth)
	}

	// Login
	const login = async (data) => {
		checaCancelado()
		setCarregando(true)
		setError(false)

		try {
			await signInWithEmailAndPassword(auth, data.email, data.password)
			setCarregando(false)
		} catch (error) {
			let systemErrorMessage

			if (error.message.includes('user-not-found')) {
				systemErrorMessage = 'Usuário não encontrado!'
			} else if (error.message.includes('wrong-password')) {
				systemErrorMessage = 'Usuário e/ou incorretos!'
			} else {
				systemErrorMessage = error.message
			}
			setError(systemErrorMessage)
			setCarregando(false)
		}
	}

	useEffect(() => {
		return () => setCancelado(true)
	}, [])

	return { auth, createUser, error, carregando, logout, login }

}
