import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../component/Layouts/Layout';
import Section5 from '../Home/Section5';

const products = [
  { id: "s001", name: "Burger Sauce Bottle", price: 12.99, emoji: "🍶", tag: "Best Seller" },
  { id: "s002", name: "Custom Mug", price: 9.99, emoji: "☕", tag: "New" },
  { id: "s003", name: "Branded Cap", price: 19.99, emoji: "🧢", tag: "" },
  { id: "s004", name: "Tote Bag", price: 14.99, emoji: "👜", tag: "Popular" },
  { id: "s005", name: "Spice Kit", price: 24.99, emoji: "🧂", tag: "New" },
  { id: "s006", name: "Apron", price: 29.99, emoji: "👨‍🍳", tag: "" },
];

const Shop = () => (
  <Layout>
    <section style={{ background: 'var(--bg-coffee)', padding: '100px 0 60px', textAlign: 'center' }}>
      <Container>
        <h1 style={{ color: '#fff', fontSize: '3.5rem' }}>Shop</h1>
        <p style={{ color: 'var(--yellow)', marginTop: '10px' }}>Home / Shop</p>
      </Container>
    </section>

    <section style={{ padding: '80px 0', background: 'var(--light-grey)' }}>
      <Container>
        <h2 className="text-center mb-2" style={{ color: 'var(--light-red)' }}>Our Products</h2>
        <p className="text-center mb-5" style={{ color: 'var(--grey)' }}>Take a piece of us home with you</p>
        <Row>
          {products.map(p => (
            <Col sm={6} lg={4} key={p.id} className="mb-4">
              <div style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', transition: 'transform 300ms ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ background: 'var(--light-grey)', padding: '40px', textAlign: 'center', fontSize: '5rem' }}>
                  {p.emoji}
                </div>
                <div style={{ padding: '20px' }}>
                  <div className="d-flex justify-content-between align-items-start">
                    <h5 style={{ fontFamily: 'var(--oswald-font)', fontWeight: 600, marginBottom: '6px' }}>{p.name}</h5>
                    {p.tag && (
                      <span style={{ background: 'var(--yellow)', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '20px', whiteSpace: 'nowrap' }}>{p.tag}</span>
                    )}
                  </div>
                  <p style={{ color: 'var(--light-red)', fontWeight: 700, fontSize: '18px', margin: '8px 0 16px' }}>${p.price}</p>
                  <button className="btn order_now w-100" style={{ padding: '10px', fontSize: '15px' }}>
                    <i className="bi bi-bag me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    <Section5 />
  </Layout>
);

export default Shop;