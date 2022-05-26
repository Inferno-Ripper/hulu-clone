import React from 'react';
import '../styles/Header.css';
import HeaderItem from './HeaderItem';

// icons
import {
	HomeIcon,
	BadgeCheckIcon,
	CollectionIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';

const Header = () => {
	return (
		<div className='header'>
			<div className='header__left'>
				<HeaderItem title='Home' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
				<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
				<HeaderItem title='SEARCH' Icon={SearchIcon} />
				<HeaderItem title='ACCOUNT' Icon={UserIcon} />
			</div>
			<div className='header__right'>
				<img
					src='https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png'
					alt='logo'
				/>
			</div>
		</div>
	);
};

export default Header;
