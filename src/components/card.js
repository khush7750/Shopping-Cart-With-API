import React from "react"
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row,
} from "reactstrap"

const Cart = ({cartItem, removeItem, buyNow}) =>{
    let amount = 0;

    cartItem.forEach(item =>{
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    })

    return(
        <Container fluid>
            <h1 className = "text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item =>(
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                            <img height={80} src={item.tinyImage} />
                            </Col>

                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>price :- {item.productPrice}</span>
                                <button color="danger" onClick={() =>removeItem(item)}> Remove </button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>

            {/* / if everithing is empty */}
            { cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Grand Total
                        </CardHeader>
                        <CardBody>
                            Your Amount For {cartItem.length} Product is {amount}
                        </CardBody>
                        <CardFooter>
                            <Button  color="success" onClick= {buyNow}>Pay Here</Button>
                        </CardFooter>
                    </Card>
                ): (
                    <h1 className="text-warning">Card is Empty</h1>
                )};
        </Container>
    );
};

export default Cart