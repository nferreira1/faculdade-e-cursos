// React
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Firebase
// eslint-disable-next-line no-unused-vars
import { db } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

// Contexts
import { AuthProvider } from './contexts/AuthContext'

// Hooks
import { useAuthentication } from './hooks/useAuthentication'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'

// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// Styles
import './App.css'

function App() {

	const [user, setUser] = useState(undefined)
	const { auth } = useAuthentication()

	const carregandoUsuario = user === undefined

	useEffect(() => {

		onAuthStateChanged(auth, (user) => {
			setUser(user)
		})

	}, [auth])

	if (carregandoUsuario) {
		return <p>Carregando...</p>
	}

	return (
		<div>
			<AuthProvider value={{ user }}>
				<BrowserRouter>
					<Navbar />
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
							<Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
							<Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to='/' />} />
							<Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/' />} />
						</Routes>
					</div>
				</BrowserRouter>

				<Footer />
			</AuthProvider>
		</div>
	)
}

export default App
