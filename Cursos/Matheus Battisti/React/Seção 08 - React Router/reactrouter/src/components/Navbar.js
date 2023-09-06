import "./Navbar.css"

import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<nav>
			{/* Esse faz o redirecionamento da página trocando componente */}
			<Link to="/">Home</Link>
			<Link to="/about">Sobre</Link>

			{/* Esse faz recarregando a página */}
			{/* <a href="/">Home</a> */}
		</nav>
	)
}

export default Navbar
