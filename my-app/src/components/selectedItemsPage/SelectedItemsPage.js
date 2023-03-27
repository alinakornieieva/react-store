import { useDispatch, useSelector } from "react-redux"
import { deleteAll, deleteProduct, removePrice } from "../../reducers/basketReducer"
import './SelectedItemsPage.scss'

const SelectedItemsPage = () => {
    const {products} = useSelector((state) => state.basket)
    const dispatch = useDispatch()
    const onProductDeleteClick = (item) => {
        dispatch(deleteProduct(item.id))
        dispatch(removePrice(item.price))
    }
    return <main className="SelectedItemsPage">
        {products.length > 0 ? <div className="delete-all" onClick={() => dispatch(deleteAll())}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
        </svg>
            Delete all</div> : null}
        {products.length === 0 ? <h5>No selected items...</h5> : products.map((item) => <div className="flex-div" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="title-desc">
                    <div>{item.title}</div>
                    <div className="desc">{item.description}</div>
                </div>
                <div className="btn-section">
                    <button>+</button>
                    <span>{item.amount}</span>
                    <button>-</button>
                </div>
                <div className="price">{item.price}$</div>
            </div>
            )
        }
    </main>
}
// return <main className="SelectedItemsPage">
// <Container>
//     <Row>
//         {products.length === 0 ? <h5>No selected items...</h5> : products.map((item) => <Col className="col" key={item.id} xs={12} md={6} lg={4} xxl={3}>
//             <div className="img-div">
//                 <img src={item.image} alt={item.title} />
//             </div>
//             <div>{item.title}</div>
//             <div>{item.amount}</div>
//             <div className="price_btn">
//                 <div>{item.price}$</div>
//                 <button onClick={() => onProductDeleteClick(item)}>Remove</button>
//             </div>
//         </Col>)}
//     </Row>
// </Container>
// </main>

export default SelectedItemsPage