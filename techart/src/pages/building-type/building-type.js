import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import {Box} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

import './building-type.scss';
import MainTitle from '../../components/main-title/main-title'
import WrapperBlock from '../../components/wrapper-block/wrapper-block'
import List from '../../components/list/list'


export default function BuildingType() {

	const history = useHistory()

	const handleSubmit = () => {
		history.push('/number/floors')
	};


	const elements = [
		{
			title: 'Жилой дом',
			path: '/number/floors'
		},
		{
			title: 'Гараж',
			path: '/wall/material/2'
		}
	]

	return (
		<form onSubmit={handleSubmit} className="step stepOne">
			<MainTitle/>
			<FormControl component="fieldset">
				<FormLabel component="legend">Шаг 1</FormLabel>
				<WrapperBlock title="Что будем строить ?">
					<List elements={elements}/>
				</WrapperBlock>
				<Box className="buttons">
					<Button variant="outlined" color="primary">
						Отмена
					</Button>
					<Button type="submit" variant="contained" color="primary">
						Далее
					</Button>
				</Box>
			</FormControl>
		</form>
	);
}
