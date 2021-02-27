import React from 'react';
import {Link} from 'react-router-dom'

const List = ({elements}) => {
	return (
		<ul>
			{elements.map(({path, title}) => (
				<li key={title}>
					<Link to={path}>{title}</Link>
				</li>
			))}
		</ul>
	);
};

export default List;
