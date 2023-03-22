import { useEffect, useState } from "react"
import { Container, Col, Row } from "react-bootstrap"
import './ProductRange.scss'

const ProductRange = () => {
    const [state, setState] = useState([])
    console.log(state)
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12')
        .then(response => response.json())
        .then(json => setState(json))
    }, [])
    return <div className="ProductRange">
        <Container>
            <Row>
                {state.map((item) => <Col key={item.id} xs={12} md={6} lg={4} xxl={3}>
                    <img src={item.images[0]} alt={item.title} />
                    <div>{item.title}</div>
                    </Col>)}
            </Row>
        </Container>
        <button>LOAD MORE</button>
    </div>
}

export default ProductRange