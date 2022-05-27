import { ThumbUpIcon } from '@heroicons/react/outline';
import React from 'react';
import '../styles/ThumbNail.css';
import { forwardRef } from 'react';

const ThumbNail = forwardRef(
	(
		{
			title,
			poster_path,
			overview,
			media_type,
			release_date,
			firest_air_date,
			vote_count,
		},
		ref
	) => {
		// base url is required to display the image on the browser
		const BASE_URL = 'https://image.tmdb.org/t/p/original/';

		return (
			<div ref={ref} className='thumbnail'>
				<img
					className='thumbnail__image'
					src={`${BASE_URL}${poster_path}`}
					alt='thumbnail image'
				/>
				<p className='thumbnail__overview'>{overview}</p>
				<h1 className='thumbnail__title'>{title}</h1>
				<div className='thumbnail__details'>
					<div>
						{media_type && `${media_type} `}
						{release_date || firest_air_date}
					</div>

					<div className='thumbnail__iconViewCount'>
						<ThumbUpIcon className='thumbnail__thumbUpIcon' /> {vote_count}
					</div>
				</div>
			</div>
		);
	}
);

export default ThumbNail;
