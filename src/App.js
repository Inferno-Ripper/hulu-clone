import Header from './components/Header';
import Navbar from './components/Navbar';
import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Results from './components/Results';

function App() {
	return (
		<div className='app'>
			<Header />
			<Navbar />
			<Routes>
				<Route path=':genre' element={<Results />} />
			</Routes>
		</div>
	);
}

export default App;
