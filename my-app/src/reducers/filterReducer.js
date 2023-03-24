const initialState = {
    loadingStatus: 'idle',
    filters: [],
    currentFilter: 'all'
}

export const fetchFilters = () => (dispatch) => {
    dispatch(filtersFetching())
    fetch('https://fakestoreapi.com/products/categories')
        .then((data) => data.json())
        .then((json) => dispatch(filtersFetched(json)))
        .catch(() => dispatch(filtersFetchingError()))
}

export const filtersFetching = () => {
    return {type: 'FILTERS_FETCHING'}
}

export const filtersFetched = (payload) => {
    return {type: 'FILTERS_FETCHED', payload}
}

export const filtersFetchingError = () => {
    return {type: 'FILTERS_FETCHING_ERROR'}
}

export const activeFilterChanged = (payload) => {
    return {type: 'ACTIVE_FILTER_CHANGED', payload}
}

const FilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FILTERS_FETCHING': 
            return {
                ...state,
                loadingStatus: 'fetching'
            }
        case 'FILTERS_FETCHED': 
            return {
                ...state,
                filters: action.payload,
                loadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR': 
            return {
                ...state,
                loadingStatus: 'error'
            }
        case 'ACTIVE_FILTER_CHANGED': 
            return {...state,
            currentFilter: action.payload
            }
        default: return state
    }
}

export default FilterReducer