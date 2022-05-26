import React from 'react';
import '../styles/HeaderItem.css';

const HeaderItem = ({ Icon, title }) => {
	return (
		<div className='headerItem'>
			<Icon className='headerItem__icon' />
			<p>{title}</p>
		</div>
	);
};

export default HeaderItem;
