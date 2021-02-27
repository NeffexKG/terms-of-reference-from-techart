import React from 'react';
import {Box, CircularProgress, TextField} from '@material-ui/core'
import './wall-length.scss';
import MainTitle from '../../components/main-title/main-title'
import WrapperBlock from '../../components/wrapper-block/wrapper-block'
import Button from '@material-ui/core/Button'
import {useHistory, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {calculateAction, calculateThunk} from '../../redux/actions/action'

const WallLength = () => {
	const state = useSelector(state => state)

	const {calculateLength, numberFloors, loader} = state;

	const {type, material} = useParams()
	const history = useHistory()

	const dispatch = useDispatch()

	const handleChange = ({target: {value, name}}) => {
		dispatch(calculateAction(name, value.replace(/[^0-9]/g, '')))
	}

	const redirect  = () => history.push('/result/page')

	const calculateSubmit = () => {
		const {x, y} = calculateLength
		const existNumberFloors = numberFloors ? numberFloors : ''
		dispatch(calculateThunk(type, existNumberFloors, material, x, y, redirect))
	}

	return (
		<div className="step">
			<MainTitle/>
			{type === 'garage' ? 'Шаг 3' : 'Шаг 4'}
			<WrapperBlock title="Длина стен (в метрах):">
				<Box display="flex">
					<TextField
						value={calculateLength.x}
						onChange={handleChange} name="x"
					/>
					<span>x</span>
					<TextField
						value={calculateLength.y}
						onChange={handleChange} name="y"
					/>
				</Box>
			</WrapperBlock>
			<Box className="buttons">
				<Button variant="outlined" color="primary">
					Отмена
				</Button>
				<Button disabled={loader} type="submit" variant="contained" color="primary" onClick={calculateSubmit}>
					{loader ? <CircularProgress size={24} /> : "Расчитать"}
				</Button>
			</Box>
		</div>
	);
};

export default WallLength;
