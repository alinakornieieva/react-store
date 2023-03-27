const initialState = {
    loadingStatus: 'idle',
    products: [],
}

export const fetchProducts = () => (dispatch) => {
    dispatch(productsFetching())
    fetch(`https://fakestoreapi.com/products`)
        .then(response => response.json())
        .then(json => dispatch(productsFetched(json)))
        .catch(() => dispatch(productsFetchingError()))
}

export const productsFetching = () => {
    return {type: 'PRODUCTS_FETCHING'}
}

export const productsFetched = (payload) => {
    return {type: 'PRODUCTS_FETCHED', payload}
}

export const productsFetchingError = () => {
    return {type: 'PRODUCTS_FETCHING_ERROR'}
}

export const changeOffset = (payload) => {
    return {type: 'CHANGE_OFFSET', payload}
}

const ProductRangeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PRODUCTS_FETCHING': 
            return {
                ...state,
                loadingStatus: 'fetching'
            }
        case 'PRODUCTS_FETCHED': 
            return {
                ...state,
                products: action.payload.map((item) => ({...item, amount: 0})),
                loadingStatus: 'idle'
            }
        case 'PRODUCTS_FETCHING_ERROR': 
        return {
            ...state,
            loadingStatus: 'error'
        }
        case 'CHANGE_OFFSET': 
        return {
            ...state,
            offset: action.payload
        }
        default: return state
    }
}

export default ProductRangeReducer