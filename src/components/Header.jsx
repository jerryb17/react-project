import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Badge,
  Button,
  Form,
} from 'react-bootstrap';

import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
const Header = () => {
  const {
    state: { cart },
    dispatch,
    prodDispatch,
  } = CartState();
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      style={{ height: 80 }}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="logo">
            Shopping Logo
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <Form.Control
            style={{ width: 300 }}
            placeholder="search product"
            className="m-auto"
            onChange={(e) =>
              prodDispatch({
                type: 'Filter_By_Search',
                payload: e.target.value,
              })
            }
          ></Form.Control>
        </Navbar.Text>

        <Nav>
          <Dropdown className="cart" align="end">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 300 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartItem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetails">
                        <span>{prod.name}</span>
                        <span>₹{prod.price.split('.')[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="30px"
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                          dispatch({ type: 'REMOVE_FROM_CART', payload: prod })
                        }
                      />
                      <Link to="/cart">
                        <Button style={{ width: '95%', margin: '10px' }}>
                          Go to Cart
                        </Button>
                      </Link>
                    </span>
                  ))}
                </>
              ) : (
                <span className="empty" style={{ padding: 10 }}>
                  {' '}
                  Cart is empty
                </span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
