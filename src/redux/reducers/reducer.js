import {ActionTypes} from '../actions/actionTypes'

const initialState = {
	numberFloors: null,
	calculateLength: {x: '', y: ''},
	result: null,
	error: null,
	loader: false
}


export const mainReducer = (state = initialState, {type, payload}) => {

	switch (type) {
		case ActionTypes.SET_LOADER:
			return {
				...state,
				loader: payload.loader
			}
		case ActionTypes.SET_NUMBER_FLOORS:
			return {
				...state,
				numberFloors: payload.numberFloors
			}
		case ActionTypes.CALCULATE_LENGTH:
			return {
				...state,
				calculateLength: {
					...state.calculateLength,
					[payload.type]: payload.size
				}
			}
		case ActionTypes.SUCCESS_DATA:
			return {
				...state,
				result: payload.result,
				error: null,
			}
		case ActionTypes.ERROR_DATA:
			return {
				...state,
				error: payload.error,
			}
		case ActionTypes.CLEAR_DATA:
			return {
				...state,
				numberFloors: null,
				calculateLength: {x: '', y: ''},
				result: null,
				error: null,
				loader: false
			}
		default:
			return state;
	}
}
