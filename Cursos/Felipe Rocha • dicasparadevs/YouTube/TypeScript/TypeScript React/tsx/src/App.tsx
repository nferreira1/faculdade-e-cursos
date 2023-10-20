import './App.css';
import Button from './components/Button';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Button
					theme='dark'
					onClick={() => console.log('clicked')}
					options={{ variant: 'normal' }}
				>
					ENVIAR
				</Button>
			</header>
		</div>
	);
}

export default App;
