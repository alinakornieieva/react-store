import { Container, Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import './SelectedItemsPage.scss'

const SelectedItemsPage = () => {
    const {products} = useSelector((state) => state.basket)
    return <main className="SelectedItemsPage">
        <Container>
            <Row>
                {products.length === 0 ? <h5>No selected items...</h5> : products.map((item) => <Col className="col" key={item.id} xs={12} md={6} lg={4} xxl={3}>
                    <div className="img-div">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div>{item.title}</div>
                    <div className="price_btn">
                        <div>{item.price}$</div>
                        <button >Remove</button>
                    </div>
                </Col>)}
            </Row>
        </Container>
    </main>
}

export default SelectedItemsPage