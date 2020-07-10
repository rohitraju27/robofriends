import React from 'react';

const Card = ({ name, id, email }) => {
	return(
		<div className='tc bg-light-green dib pa3 bw2 br3 ma2 shadow-5 grow'>
			<img alt='robot' src={`https://robohash.org/${id}200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;