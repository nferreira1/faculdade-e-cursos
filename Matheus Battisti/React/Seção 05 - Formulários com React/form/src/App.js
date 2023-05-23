import './App.css';
import MyForm from './components/MyForm';


function App() {
	return (
		<div className="App">
			<h2>FORMS</h2>
			<MyForm user={{ name: 'Nathan', email: 'nathan.1402@hotmail.com', bio: 'breve', role: 'admin' }} />
		</div>
	);
}

export default App;
