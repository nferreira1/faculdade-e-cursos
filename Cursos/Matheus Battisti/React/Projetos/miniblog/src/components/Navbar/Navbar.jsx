// React
import { NavLink } from 'react-router-dom'
import { Fragment } from 'react'

// Hooks
import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../hooks/useAuthValue'

// Stylesheet
import styles from './Navbar.module.css'

const Navbar = () => {

	const { logout } = useAuthentication()
	const { user } = useAuthValue()




	return (
		<nav className={styles.navbar}>
			<NavLink to='/' className={styles.brand}>Mini<span>Blog</span></NavLink>
			<ul className={styles.links_list}>
				<li><NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink></li>
				<li><NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : '')}>Sobre</NavLink></li>
				{!user && (
					<Fragment>
						<li><NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : '')}>Entrar</NavLink></li>
						<li><NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : '')}>Cadastrar</NavLink></li>
					</Fragment>
				)}
				{user && (
					<Fragment>
						<li><NavLink to='/posts/create' className={({ isActive }) => (isActive ? styles.active : '')}>Novo Post</NavLink></li>
						<li><NavLink to='/dashboard' className={({ isActive }) => (isActive ? styles.active : '')}>Dashboard</NavLink></li>
					</Fragment>
				)}
				{user &&
					<li>
						<button onClick={logout}>Sair</button>
					</li>
				}
			</ul>
		</nav >
	)
}

export default Navbar
