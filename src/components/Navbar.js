import React from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
// getting request data
import request from '../utils/requests';

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div className='navbar'>
			{/* Object.entries returns an array of key and value. key being the name of the object eg (fetchTrending) and value being the data inside of that object eg (title and url)  */}
			{Object.entries(request).map(([key, { title, url }]) => {
				return (
					<h2 className='navbar__title' key={key} onClick={() => navigate(key)}>
						{title}
					</h2>
				);
			})}
			<div className='navbar__fade__right'></div>
		</div>
	);
};

export default Navbar;
