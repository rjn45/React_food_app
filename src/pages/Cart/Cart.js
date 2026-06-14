import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../../component/Layouts/Layout';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, incrementQty, decrementQty, clearCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <Layout>
        <section style={{ padding: '120px 0', background: 'var(--light-grey)', minHeight: '60vh' }}>
          <Container className="text-center">
            <i className="bi bi-bag-x" style={{ fontSize: '5rem', color: 'var(--light-grey-2)' }}></i>
            <h2 className="mt-4">Your Cart is Empty</h2>
            <p className="text-muted mt-2">Looks like you haven't added anything yet.</p>
            <Link to="/menu" className="btn order_now mt-4">Browse Menu</Link>
          </Container>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section style={{ padding: '120px 0 60px', background: 'var(--light-grey)', minHeight: '60vh' }}>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 style={{ color: 'var(--light-red)' }}>Your Cart</h2>
                <button
                  onClick={clearCart}
                  style={{
                    background: 'none',
                    border: '1px solid var(--light-grey-2)',
                    padding: '6px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: 'var(--grey)',
                  }}
                >
                  <i className="bi bi-trash me-1"></i> Clear Cart
                </button>
              </div>

              <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
                <Table responsive className="mb-0">
                  <thead style={{ background: 'var(--light-grey)' }}>
                    <tr>
                      <th style={{ padding: '16px', fontFamily: 'var(--oswald-font)', fontWeight: 500 }}>Item</th>
                      <th style={{ padding: '16px', fontFamily: 'var(--oswald-font)', fontWeight: 500 }}>Price</th>
                      <th style={{ padding: '16px', fontFamily: 'var(--oswald-font)', fontWeight: 500 }}>Qty</th>
                      <th style={{ padding: '16px', fontFamily: 'var(--oswald-font)', fontWeight: 500 }}>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} style={{ borderBottom: '1px solid var(--light-grey)' }}>
                        <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.title}
                              style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                            />
                            <div>
                              <strong style={{ fontFamily: 'var(--oswald-font)', fontSize: '15px' }}>{item.title}</strong>
                              <p className="mb-0" style={{ fontSize: '12px', color: 'var(--grey)' }}>{item.paragraph}</p>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '16px', verticalAlign: 'middle', color: 'var(--grey)' }}>
                          ${item.price.toFixed(2)}
                        </td>
                        <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                          <div className="d-flex align-items-center gap-2">
                            <button
                              onClick={() => decrementQty(item.id)}
                              style={qtyBtnStyle}
                            >−</button>
                            <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 600 }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => incrementQty(item.id)}
                              style={{ ...qtyBtnStyle, background: 'var(--yellow)', borderColor: 'var(--yellow)' }}
                            >+</button>
                          </div>
                        </td>
                        <td style={{ padding: '16px', verticalAlign: 'middle', fontWeight: 600 }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            style={{ background: 'none', border: 'none', color: 'var(--light-red)', cursor: 'pointer', fontSize: '18px' }}
                          >
                            <i className="bi bi-x-circle"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              <div className="mt-4">
                <Link to="/menu" style={{ color: 'var(--light-red)', fontWeight: 600 }}>
                  <i className="bi bi-arrow-left me-1"></i> Continue Shopping
                </Link>
              </div>
            </Col>

            <Col lg={4} className="mt-4 mt-lg-0">
              <div style={{ background: '#fff', borderRadius: '8px', padding: '28px' }}>
                <h4 style={{ borderBottom: '2px solid var(--light-grey)', paddingBottom: '16px', marginBottom: '20px' }}>
                  Order Summary
                </h4>
                <div className="d-flex justify-content-between mb-3">
                  <span style={{ color: 'var(--grey)' }}>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span style={{ color: 'var(--grey)' }}>Delivery</span>
                  <span style={{ color: 'green' }}>Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong style={{ fontFamily: 'var(--oswald-font)', fontSize: '18px' }}>Total</strong>
                  <strong style={{ fontSize: '18px', color: 'var(--light-red)' }}>${totalPrice.toFixed(2)}</strong>
                </div>
                <button
                  className="btn order_now w-100"
                  style={{ background: 'var(--light-red)', color: '#fff', borderColor: 'var(--light-red)' }}
                >
                  Proceed to Checkout
                </button>
                <Link to="/login" className="d-block text-center mt-3" style={{ fontSize: '14px', color: 'var(--grey)' }}>
                  Have an account? <span style={{ color: 'var(--light-red)' }}>Sign in</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

const qtyBtnStyle = {
  width: '28px',
  height: '28px',
  border: '1px solid var(--light-grey-2)',
  background: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 700,
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
};

export default Cart;