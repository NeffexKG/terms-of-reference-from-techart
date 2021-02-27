import {ActionTypes} from './actionTypes'
import {instance} from '../../api/instance'


const setLoaderAction = (loader) => ({
	type: ActionTypes.SET_LOADER,
	payload: {loader}
})



const selectedNumberFloors = (numberFloors) => ({
	type: ActionTypes.SET_NUMBER_FLOORS,
	payload: {numberFloors}
})

export const selectedNumberFloorsAction = (numberFloors) => dispatch => {
	try {
		dispatch(selectedNumberFloors(numberFloors))
	} catch (e) {
		throw new Error(e)
	}
}


export const calculateAction = (type, size) => ({
	type: ActionTypes.CALCULATE_LENGTH,
	payload: {size, type}
})


const resultDataAction = (result) => ({
	type: ActionTypes.SUCCESS_DATA,
	payload: {result}
})


export const calculateThunk = (building, height, material, x, y, redirect) => async dispatch => {
	dispatch(setLoaderAction(true))
	try {
		const result = await instance.get(`?building=${building}${height ? `&height=${height}` : ''}&material=${material}&sizex=${x}&sizey=${y}`)
		setLoaderAction(false)
		dispatch(resultDataAction(result.data))
		redirect()
	} catch (e) {
		setLoaderAction(false)
	}
}


export const clearDataAction = () => ({
	type: ActionTypes.CLEAR_DATA
})
