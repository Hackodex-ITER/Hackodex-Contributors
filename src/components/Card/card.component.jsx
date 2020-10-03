import React from 'react';
import './card.styles.css';

const Card = ({ user }) => {
	return (
		<div className="card-container">
			<img
				alt="contributor"
				src={user.avatar_url}
				width='240'
				height='200'
			/>
			<h2>@{user.login}</h2>
			<p>Contributions:<br/>{user.contributions}</p>
		</div>
	);
};

export default Card;
