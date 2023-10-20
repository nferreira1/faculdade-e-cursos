// React
import { useContext } from 'react'

// Contexts
import { AuthContext } from '../contexts/AuthContext'

export const useAuthValue = () => {

	const context = useContext(AuthContext)

	if (!context) {
		console.log('Contexto não encontrado')
	}

	return context
}
