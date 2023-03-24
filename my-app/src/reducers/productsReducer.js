const initialState = {
    loadingStatus: 'idle',
    products: []
}

export const fetchProducts = () => (dispatch) => {
    dispatch(productsFetching())
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12')
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
                products: action.payload,
                loadingStatus: 'idle'
            }
        case 'PRODUCTS_FETCHING_ERROR': 
        return {
            ...state,
            loadingStatus: 'error'
        }
        default: return state
    }
}

export default ProductRangeReducer