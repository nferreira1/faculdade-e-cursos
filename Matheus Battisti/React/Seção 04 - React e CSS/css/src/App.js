import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react'

function App() {

	const n = 15
	const [name] = useState('Nathan')
	const redTitle = true

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
		</div >
	);
}

export default App;
