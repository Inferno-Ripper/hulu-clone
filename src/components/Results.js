import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import requests from '../utils/requests';
import '../styles/Results.css';
import ThumbNail from './ThumbNail';
import FlipMove from 'react-flip-move';

const Results = () => {
	const [reqData, setReqData] = useState([]);

	const { genre } = useParams();

	useEffect(() => {
		const getData = async () => {
			// requesting data from tmdb api
			const request = await fetch(
				`https://api.themoviedb.org/3${
					requests[genre]?.url || request.fetchTrending.url
				}`
			);

			// converting the response to json format
			const response = await request.json();

			// storing the json data in state
			setReqData(response.results);
		};

		getData();
	}, [genre]);

	return (
		<FlipMove className='results'>
			{reqData.map(
				({
					title,
					poster_path,
					overview,
					media_type,
					release_date,
					firest_air_date,
					vote_count,
					id,
				}) => {
					return (
						<ThumbNail
							title={title}
							poster_path={poster_path}
							overview={overview}
							media_type={media_type}
							release_date={release_date}
							firest_air_date={firest_air_date}
							vote_count={vote_count}
							key={id}
						/>
					);
				}
			)}
		</FlipMove>
	);
};

export default Results;
