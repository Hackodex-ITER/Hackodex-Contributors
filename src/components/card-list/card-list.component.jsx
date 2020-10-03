import React from 'react';
import Card from '../Card/card.component';
import './card-list.styles.css';

const CardList = ({ users }) => {
	return (
		<div className="card-list">
			{users.map(user => (
        <Card key={user.id} user={user}/>
			))}
		</div>
	);
};

export default CardList;
