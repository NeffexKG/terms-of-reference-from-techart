import { applyMiddleware, createStore,compose } from 'redux'
import thunk from 'redux-thunk'
import {mainReducer} from './reducers/reducer'

const middlewares = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(...middlewares)))

store.subscribe(() => {
	console.log(store.getState())
})

export default store
