import React from 'react';
import './wrapper-block.scss';
import {Card, CardContent, CardHeader} from '@material-ui/core'

const WrapperBlock = ({children, title}) => {
	return (
			<Card className="block">
				<CardHeader subheader={title} />
				<CardContent>
					{children}
				</CardContent>
			</Card>
	);
};

export default WrapperBlock;
