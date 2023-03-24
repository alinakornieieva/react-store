import {legacy_createStore as createStore, combineReducers} from 'redux'
import ProductRangeReducer from './reducers/productsReducer'

const reducers = combineReducers({productRange: ProductRangeReducer})

const store = createStore(reducers)

export default store