import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../component/Layouts/Layout';
import Section2 from '../Home/Section2';
import Pizza from "../../assets/about/pizza.png";

const About = () => {
  return (
    <Layout>
      {/* Page Banner */}
      <section style={{ background: 'var(--bg-coffee)', padding: '100px 0 60px', textAlign: 'center' }}>
        <Container>
          <h1 style={{ color: '#fff', fontSize: '3.5rem' }}>About Us</h1>
          <p style={{ color: 'var(--yellow)', marginTop: '10px' }}>Home / About</p>
        </Container>
      </section>

      {/* Reuse home about section */}
      <Section2 />

      {/* Story Section */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img src={Pizza} className="img-fluid" alt="Our Story" style={{ maxWidth: '60%', display: 'block', margin: '0 auto' }} />
            </Col>
            <Col lg={6}>
              <h2 style={{ color: 'var(--light-red)', marginBottom: '20px' }}>Our Story</h2>
              <p style={{ color: 'var(--grey)', fontSize: '17px', lineHeight: 1.8 }}>
                We started with a simple dream — to make the best burgers in town and deliver them
                fresh to your door. Our kitchen uses only the finest ingredients sourced locally,
                and every recipe is crafted with passion.
              </p>
              <p style={{ color: 'var(--grey)', fontSize: '17px', lineHeight: 1.8, marginTop: '16px' }}>
                From humble beginnings, we've grown into a community favourite, serving thousands
                of happy customers every week with the same love and dedication as day one.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default About;