// 2 - Links com react router

import "./Navbar.css"

import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<nav>
			{/* Esse faz o redirecionamento da página trocando componente */}
			{/* <Link to="/">Home</Link>
			<Link to="/about">Sobre</Link> */}

			{/* Esse faz recarregando a página */}
			{/* <a href="/">Home</a> */}

			{/* 3 - NavLink */}
			<NavLink to='/'
			// className={({ isActive }) => (isActive ? 'esta-ativo' : 'nao-ativo')}
			>Home</NavLink>
			<NavLink to='/about'>Sobre</NavLink>
		</nav >
	)
}

export default Navbar
