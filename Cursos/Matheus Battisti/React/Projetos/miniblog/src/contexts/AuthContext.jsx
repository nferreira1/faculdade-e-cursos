// React
import { createContext } from 'react'

// Prop Types
import PropTypes from 'prop-types'

export const AuthContext = createContext()

export const AuthProvider = ({ children, value }) => {
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}

AuthProvider.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.element
	).isRequired,
	value: PropTypes.object
}
