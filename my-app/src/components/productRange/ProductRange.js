import { useEffect } from "react"
import { Container, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { productsFetched, productsFetching, productsFetchingError } from "../../reducers/productsReducer"
import Spiner from "../spiner/Spiner"
import './ProductRange.scss'

const ProductRange = () => {
    const {products, loadingStatus} = useSelector((state) => state.productRange)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productsFetching())
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12')
        .then(response => response.json())
        .then(json => dispatch(productsFetched(json)))
        .catch(() => dispatch(productsFetchingError()))
    }, [])
    const loading = loadingStatus === 'fetching' ? <Spiner/> : null
    const content = loadingStatus === 'idle' ? <View products={products}/> : null
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