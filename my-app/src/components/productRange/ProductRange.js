import { useEffect } from "react"
import { Container, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../reducers/productsReducer"
import Spiner from "../spiner/Spiner"
import './ProductRange.scss'
import { createSelector } from 'reselect'
import { addPrice, addProduct } from "../../reducers/basketReducer"

const ProductRange = () => {
    const {loadingStatus} = useSelector((state) => state.productRange)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const filteredProductsSelector = createSelector(
        (state) => state.productRange.products,
        (state) => state.filter.currentFilter,
        (products, currentFilter) => {
            if (currentFilter === 'all') {
                return products
            } else {
                return products.filter((item) => item.category === currentFilter)
            }
        }
    )
    const onAddButtonClick = (item) => {
        dispatch(addPrice(item.price))
        dispatch(addProduct(item))
    }
    const filteredProducts = useSelector(filteredProductsSelector)
    const loading = loadingStatus === 'fetching' ? <Spiner/> : null
    const content = loadingStatus === 'idle' && filteredProducts.length > 0 ? <View onAddButtonClick={onAddButtonClick} filteredProducts={filteredProducts}/> : null
    const errorMessage = loadingStatus === 'error' ? <h5>Something went wrong...</h5> : null
    return <main>
        {loading}
        {errorMessage}
        {content}
    </main>
}

const View = ({filteredProducts, onAddButtonClick}) => {
    const {products} = useSelector((state) => state.basket)
    return <div className="ProductRange">
        <Container>
            <Row>
                {filteredProducts.map((item) => <Col className="col" key={item.id} xs={12} md={6} lg={4} xxl={3}>
                    <div className="img-div">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div>{item.title}</div>
                    <div className="price_btn">
                        <div>{item.price}$</div>
                        <button onClick={() => onAddButtonClick(item)}>+ Add <span className="border">{products.find((product) => product.id === item.id) ? products.find((product) => product.id === item.id).amount : 0}</span></button>
                    </div>
                </Col>)}
            </Row>
        </Container>
    </div>
}

export default ProductRange