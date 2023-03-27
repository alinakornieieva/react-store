const initialState = {
    totalPrice: 0,
    totalItems: 0,
    products: []
}

export const addPrice = (payload) => {
    return {type: 'ADD_PRICE', payload}
}

export const addItem = () => {
    return {type: 'ADD_ITEM'}
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

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRICE':
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload
            }
        case 'ADD_ITEM':
            return {
                ...state,
                totalItems: state.totalItems + 1
            }
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                totalItems: state.totalItems - 1,
                products: state.products.filter((item) => item.id !== action.payload)
            }
        case 'REMOVE_PRICE': 
            return {
                ...state,
                totalPrice: state.totalPrice - action.payload
            }
        default: return state 
    }
}

export default BasketReducer