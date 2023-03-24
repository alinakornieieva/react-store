import { useEffect } from "react"
import { Container, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../reducers/productsReducer"
import Spiner from "../spiner/Spiner"
import './ProductRange.scss'
import { createSelector } from 'reselect'

const ProductRange = () => {
    const {loadingStatus} = useSelector((state) => state.productRange)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
        // console.log(products)
    }, [])
    const filteredProductsSelector = createSelector(
        (state) => state.productRange.products,
        (state) => state.filter.currentFilter,
        (products, currentFilter) => {
            if (currentFilter === 'all') {
                return products
            } else {
                return products.filter((item) => item.category.name === currentFilter)
            }
        }
    )
    const filteredProducts = useSelector(filteredProductsSelector)
    console.log(filteredProducts)
    const loading = loadingStatus === 'fetching' ? <Spiner/> : null
    const content = loadingStatus === 'idle' ? <View products={filteredProducts}/> : null
    return <main className="ProductRange">
        {loading}
        {content}
    </main>
}

const View = ({products}) => {
    return <>
        <Container>
            <Row>
                {products.map((item) => <Col className="col" key={item.id} xs={12} md={6} lg={4} xxl={3}>
                    <img src={item.images[0]} alt={item.title} />
                    <div>{item.title}</div>
                    <div className="price_btn">
                        <div>{item.price}$</div>
                        <button>+ Add</button>
                    </div>
                    </Col>)}
            </Row>
        </Container>
        <button className="load_btn">LOAD MORE</button>
    </>
}

export default ProductRange