import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react'
import Title from './components/Title';
import CarDetails from './components/CarDetails';

function App() {

	const n = 15
	const [name] = useState('Nathan')
	const redTitle = true

	// Desafio 05
	const cars = [
		{ id: 1, brand: 'Audi', year: '2010', color: 'red' },
		{ id: 2, brand: 'Ford', year: '2020', color: 'blue' },
		{ id: 3, brand: 'Chevrolet', year: '2023', color: 'pink' },
	]

	return (
		<div className="App">
			{/* CSS global */}
			<h1>React com CSS</h1>

			{/* CSS do componente */}
			<MyComponent />
			<p>Este paragrafo é do app.js</p>

			{/* Inline CSS */}
			<p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
				Este elemento foi estilizado de forma inline
			</p>

			{/* CSS inline dinâmico */}
			<h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>CSS dinâmico</h2>
			<h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>CSS dinâmico</h2>
			<h2 style={name === 'Nathan' ? { color: "green", backgroundColor: "#000" } : null}>Teste nome</h2>

			{/* Classe dinâmica */}
			<h2 className={redTitle ? 'red-title' : 'title'}>Este título vai ter classe dinâmica</h2>

			{/* CSS modules */}
			<Title />

			{/* Desafio 05 */}
			{cars.map((car) => (
				<CarDetails keys={car.id} car={car} />
			))}

		</div >
	);
}

export default App;
