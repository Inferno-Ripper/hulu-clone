import Header from './components/Header';
import Navbar from './components/Navbar';
import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className='app'>
			<Header />
			<Navbar />
		</div>
	);
}

export default App;
