import React from 'react';
import {Box, TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import MainTitle from '../../components/main-title/main-title'
import './number-floors.scss';
import {selectedNumberFloorsAction} from '../../redux/actions/action'
import WrapperBlock from '../../components/wrapper-block/wrapper-block'
import Title from '../../components/title/title'

const NumberFloors = () => {

	const numberFloors = useSelector(state => state.numberFloors)

	const dispatch = useDispatch()

	const history = useHistory()

	const handleChange = ({target: {value}}) => {
		dispatch(selectedNumberFloorsAction(value.replace(/[^0-9]/g, '')))

	}


	const handleSubmit = (e) => {
		if(numberFloors) {
			history.push(`/wall/material/1/`)
		} else {
			alert("Поле не может быть пустым")
		}
	}


	const cancelButton = () => {
		dispatch(selectedNumberFloorsAction(''))
		history.push('/')
	}

	return (
		<form className="step stepTwo" onSubmit={handleSubmit}>
			<MainTitle/>
				<Title  title="Шаг 2" />
				<WrapperBlock title="Количество этажей (число):">
					<TextField
						value={numberFloors}
						variant="outlined"
						onChange={handleChange}/>
				</WrapperBlock>
				<Box className="buttons">
					<Button variant="outlined" color="primary" onClick={cancelButton}>
						Отмена
					</Button>
					<Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
						Далее
					</Button>
				</Box>
		</form>
	);
};

export default NumberFloors;
