import { useEffect } from "react"
import { Container, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeOffset, fetchProducts } from "../../reducers/productsReducer"
import Spiner from "../spiner/Spiner"
import './ProductRange.scss'
import { createSelector } from 'reselect'
import Skeleton from "../skeleton/Skeleton"

const ProductRange = () => {
    const {loadingStatus, offset} = useSelector((state) => state.productRange)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
        // console.log(products)
    }, [])
    const onLoadMoreClick = () => {
        dispatch(changeOffset(offset + 12))
        dispatch(fetchProducts(offset))
    }
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
    const filteredProducts = useSelector(filteredProductsSelector)
    console.log(filteredProducts)
    const loading = loadingStatus === 'fetching' ? <Spiner/> : null
    const content = loadingStatus === 'idle' && filteredProducts.length > 0 ? <View onLoadMoreClick={onLoadMoreClick} products={filteredProducts}/> : null
    const skeleton =  loadingStatus === 'idle' && filteredProducts.length === 0 ? <Skeleton/> : null
    return <main>
        {loading}
        {content}
        {skeleton}
    </main>
}

const View = ({products, onLoadMoreClick}) => {
    return <div className="ProductRange">
        <Container>
            <Row>
                {products.map((item) => <Col className="col" key={item.id} xs={12} md={6} lg={4} xxl={3}>
                    <div className="img-div">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div>{item.title}</div>
                    <div className="price_btn">
                        <div>{item.price}$</div>
                        <button>+ Add</button>
                    </div>
                    </Col>)}
            </Row>
        </Container>
    </div>
}

export default ProductRange