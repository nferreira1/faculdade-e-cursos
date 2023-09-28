import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

import './App.css';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className="App">
			<h1>Context</h1>


			<BrowserRouter>

				<NavBar />

				<Routes>

					<Route path='/' element={<Home />}></Route>
					<Route path='/About' element={<About />}></Route>
					<Route path='/Products' element={<Products />}></Route>

				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
