import { useDispatch, useSelector } from "react-redux"
import { addPrice, addProduct, decreaseAmount, deleteAll, deleteProduct, increaseAmount, removePrice } from "../../reducers/basketReducer"
import './SelectedItemsPage.scss'

const SelectedItemsPage = () => {
    const {products} = useSelector((state) => state.basket)
    const dispatch = useDispatch()
    const onClickIncrease = (item) => {
        dispatch(increaseAmount(item))
        dispatch(addPrice(item.price))
    }
    const onClickDecrease = (item) => {
        dispatch(decreaseAmount(item))
        dispatch(removePrice(item.price))
    }
    const onClickItemDelete = (item) => {
        dispatch(deleteProduct(item))
        dispatch(removePrice(item.price * item.amount))
    }
    return <main className="SelectedItemsPage">
        {products.length > 0 ? <div className="delete-all" onClick={() => dispatch(deleteAll())}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
        </svg>
            Delete all</div> : null}
        {products.length === 0 ? <h5>No selected items...</h5> : products.map((item) =>  <div className="flex-div" key={item.id}>
                <svg onClick={() => onClickItemDelete(item)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                <img src={item.image} alt={item.title} />
                <div className="title-desc">
                    <div>{item.title}</div>
                    <div className="desc">{item.description}</div>
                </div>
                <div className="btn-section">
                    <button onClick={() => onClickIncrease(item)}>+</button>
                    <span>{item.amount}</span>
                    <button onClick={() => onClickDecrease(item)}>-</button>
                </div>
                <div className="price">{item.price}$</div>
            </div>
            )
        }
    </main>
}

export default SelectedItemsPage