import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import ProductRangeReducer from './reducers/productsReducer'
import FilterReducer from './reducers/filterReducer'
import BasketReducer from './reducers/basketReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({productRange: ProductRangeReducer, filter: FilterReducer, basket: BasketReducer})

const store = createStore(reducers, applyMiddleware(thunk))

export default store