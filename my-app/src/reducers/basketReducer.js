const initialState = {
    totalPrice: 0,
    products: [],
    totalItemsCount: 0
}

export const addPrice = (payload) => {
    return {type: 'ADD_PRICE', payload}
}

export const addProduct = (payload) => {
    return {type: 'ADD_PRODUCT', payload}
}

export const deleteProduct = (payload) => {
    return {type: 'DELETE_PRODUCT', payload}
}

export const removePrice = (payload) => {
    return {type: 'REMOVE_PRICE', payload}
}

export const deleteAll = () => {
    return {type: 'DELETE_ALL'}
}

export const increaseAmount = (payload) => {
    return {type: 'INCREASE_AMOUNT', payload}
}

export const decreaseAmount = (payload) => {
    return {type: 'DECREASE_AMOUNT', payload}
}

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRICE':
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload
            }
        case 'ADD_PRODUCT':
            return {
                ...state,
                totalItemsCount: state.totalItemsCount + 1,
                products: state.products.find((item) => item.id === action.payload.id) ?
                    state.products.map((item) => {
                        if (item.id === action.payload.id) {
                            return {...item, amount: item.amount + 1}
                        }
                        return item
                    })
                : [...state.products, {...action.payload, amount: 1}]
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                totalItemsCount: state.totalItemsCount - 1,
                products: state.products.filter((item) => item.id !== action.payload)
            }
        case 'REMOVE_PRICE': 
            return {
                ...state,
                totalPrice: state.totalPrice !== 0 ? state.totalPrice - action.payload : 0
            }
        case 'DELETE_ALL': 
            return {
                ...state,
                totalPrice: 0,
                products: [],
                totalItemsCount: 0
            }
        case 'INCREASE_AMOUNT': 
            return {
                ...state,
                totalItemsCount: state.totalItemsCount + 1,
                products: state.products.find((item) => item.id === action.payload.id) ?
                    state.products.map((item) => {
                        if (item.id === action.payload.id) {
                            return {...item, amount: item.amount + 1}
                        }
                        return item
                    })
                : null
            }
        case 'DECREASE_AMOUNT': 
            return {
                ...state,
                totalItemsCount: state.totalItemsCount > 0 ? state.totalItemsCount - 1 : 0,
                products: state.products.find((item) => item.id === action.payload.id) && action.payload.amount !== 1 ?
                    state.products.map((item) => {
                        if (item.id === action.payload.id) {
                            return {...item, amount: item.amount - 1}
                        }
                        return item
                    })
                : state.products.filter((item) => item.id !== action.payload.id)
            }
        default: return state 
    }
}

export default BasketReducer