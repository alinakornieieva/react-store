import {legacy_createStore as createStore, combineReducers} from 'redux'
import ProductRangeReducer from './reducers/productsReducer'
import FilterReducer from './reducers/filterReducer'

const reducers = combineReducers({productRange: ProductRangeReducer, filter: FilterReducer})

const store = createStore(reducers)

export default store