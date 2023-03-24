const initialState = {
    loadingStatus: 'idle',
    filters: []
}

export const fetchFilters = () => (dispatch) => {
    dispatch(filtersFetching())
    fetch('https://api.escuelajs.co/api/v1/categories')
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
        default: return state
    }
}

export default FilterReducer