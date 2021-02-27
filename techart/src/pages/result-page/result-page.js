import React from 'react';
import {Redirect, useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {useDispatch, useSelector} from 'react-redux'
import './result-page.scss';
import MainTitle from '../../components/main-title/main-title'
import WrapperBlock from '../../components/wrapper-block/wrapper-block'
import Title from '../../components/title/title'
import {clearDataAction} from '../../redux/actions/action'

const ResultPage = () => {
	const result = useSelector(state => state.result)
	const history = useHistory()
	const dispatch = useDispatch()
	console.log('reuslt: ', result)



	const clearData = () => {
		dispatch(clearDataAction())
		history.push('/')
	}

	if(!result) {
		return <Redirect to="/" />
	}
	const checkStatus = result.result === 'ok'

	return (
		<>
			<div className="step">
				<MainTitle/>
				<Title title="Результат рассчета"/>
				<WrapperBlock title={checkStatus ? 'Успешно' : 'Ошибка'}>
					<div style={{color: checkStatus ? 'green' : 'red'}}>{result.message}</div>
				</WrapperBlock>
				<div className="buttons">
					<Button type="submit" variant="contained" color="primary" onClick={clearData}>
						Новый расчет
					</Button>
				</div>
			</div>
		</>
	);
};

export default ResultPage;
