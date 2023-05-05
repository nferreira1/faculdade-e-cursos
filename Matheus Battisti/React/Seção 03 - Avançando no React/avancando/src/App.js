import './App.css';

import City from './assets/city.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
	return (
		<div className="App">
			<h1>Avançando no React</h1>
			{/* Imagem em public */}
			{/* Quando a imagem está na pasta public, pode-se acessar direto usando somente a / sem precisar colocar todo o caminho */}
			<div>
				<img src="/img1.jpg" alt="Paisagem" />
			</div>

			{/* Imagem em assets */}
			<div>
				<img src={City} alt="Cidade" />
			</div>

			<ManageData />

			<ListRender />
		</div>
	)
}

export default App
