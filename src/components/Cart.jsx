import React, { useEffect, useState } from 'react';
import { Button, ListGroup, Row, Col, Form, Image } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup as="ul">
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col sm={6} md={3}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col sm={6} md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col sm={6} md={2}>
                  ₹ {prod.price}
                </Col>
                <Col sm={6} md={2}>
                  <Rating rating={prod.ratings}></Rating>
                </Col>
                <Col sm={6} md={1}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: 'Change_Cart_QTY',
                        payload: { id: prod.id, qty: e.target.value },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col sm={4} md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FROM_CART', payload: prod })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title"> Subtotal ({cart.length}) items </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
