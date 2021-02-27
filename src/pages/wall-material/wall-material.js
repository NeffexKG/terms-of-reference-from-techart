import React from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {Box} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import {useDispatch} from 'react-redux'
import WrapperBlock from '../../components/wrapper-block/wrapper-block'
import List from '../../components/list/list'
import {selectedNumberFloorsAction} from '../../redux/actions/action'
import MainTitle from '../../components/main-title/main-title'




const WallMaterial = () => {
	const {type} = useParams()
	console.log('us: ', useParams())

	const house = [
		{
			title: 'Кирпич',
			path: `/wall/length/${type}/1`
		},
		{
			title: 'Шлакоблок',
			path: `/wall/length/${type}/2`
		},
		{
			title: 'Деревянный брус',
			path: `/wall/length/${type}/3`
		}
	]
	const garage = [
		{
			title: 'шлакоблок',
			path: `/wall/length/${type}/2`
		},
		{
			title: 'металл',
			path: `/wall/length/${type}/4`
		},
		{
			title: 'сендвич-панели',
			path: `/wall/length/${type}/5`
		}
	]




	const history = useHistory()


	const dispatch = useDispatch()


	const handleSubmit = () => {
		history.push(`/wall/length/${type}/1`)
	}

	const cancelButton = () => {
		dispatch(selectedNumberFloorsAction(''))
		history.push('/')
	}
	return (
		<div className="step">
			<MainTitle />
			{type === '1' ? 'Шаг 2' : 'Шаг 3'}
			<WrapperBlock title="Материал стен:">
				<List elements={type === "1" ? garage : house}/>
			</WrapperBlock>
			<Box className="buttons">
				<Button variant="outlined" color="primary" onClick={cancelButton}>
					Отмена
				</Button>
				<Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
					Далее
				</Button>
			</Box>
		</div>
	);
};

export default WallMaterial;
