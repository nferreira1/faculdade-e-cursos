import './App.css'

// 1 - Config React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {
	return (
		<div className="App">
			<h1>React Router</h1>

			{/* 2 - Links com react router */}

			<BrowserRouter>
				<Navbar />
				{/* 9 - Search */}
				<SearchForm />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/products/:id' element={<Product />} />

					{/* 6 - Nested Routes */}
					<Route path='/products/:id/info' element={<Info />} />

					{/* 9 - Search */}
					<Route path='/search' element={<Search />} />

					{/* 10 - Redirect */}
					<Route path='/company' element={<Navigate to='/about' />} />

					{/* 7 - Página 404 */}
					<Route path='*' element={<NotFound />} />

				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
