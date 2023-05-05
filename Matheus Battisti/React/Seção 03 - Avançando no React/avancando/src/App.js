import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

function App() {

	// const name = 'Nathan'
	const [userName] = useState('Maria')

	const cars = [
		{ id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0 },
		{ id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 343434 },
		{ id: 3, brand: 'renault', color: 'azul', newCar: false, km: 234 },
	]

	function showMessage() {
		console.log('Evento do componente pai!')
	}

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

			<ConditionalRender />

			{/* props */}
			<ShowUserName name={userName} />

			{/* destructuring*/}
			<CarDetails brand='chevrolet' km={100000} color='AZUL' newCar={false} />

			{/* reaproveitando */}
			<CarDetails brand='ford' color='rosa' km={100000} newCar={false} />
			<CarDetails brand='fiat' color='branco' km={0} newCar={true} />
			<CarDetails brand='fiat' color='branco' km={0} newCar={true} />

			{/* loop em array de obejtos */}
			{cars.map((car, i) => (
				<CarDetails key={i} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
			))}

			{/* cildren */}
			<Container myValue='testing'>
				<p>E este é o conteúdo</p>
			</Container>

			{/* executar função */}
			<ExecuteFunction myFunction={showMessage} />
		</div>
	)
}

export default App
