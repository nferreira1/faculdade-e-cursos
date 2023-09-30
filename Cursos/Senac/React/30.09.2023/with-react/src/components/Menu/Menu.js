// Stylesheet
import style from './Menu.module.css'

const Menu = () => {
	return (
		<header>
			<div class={style.container}>
				<ul class={style.menu}>
					<li>Início</li>
					<li>Sobre</li>
					<li>Serviços</li>
					<li>Contato</li>
				</ul>
			</div>
		</header>
	)
}

export default Menu
