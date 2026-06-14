import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../component/Layouts/Layout';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: wire to sendContactMessage(form) from services/api.js
    setSubmitted(true);
  };

  const infoCards = [
    { icon: 'bi-geo-alt-fill', title: 'Our Location', value: '123 Burger Lane, Food City, FC 456' },
    { icon: 'bi-telephone-fill', title: 'Phone Number', value: '+1 800 BURGER' },
    { icon: 'bi-envelope-fill', title: 'Email Address', value: 'hello@foodapp.com' },
    { icon: 'bi-clock-fill', title: 'Opening Hours', value: 'Mon–Sun: 10am – 11pm' },
  ];

  return (
    <Layout>
      <section style={{ background: 'var(--bg-coffee)', padding: '100px 0 60px', textAlign: 'center' }}>
        <Container>
          <h1 style={{ color: '#fff', fontSize: '3.5rem' }}>Contact Us</h1>
          <p style={{ color: 'var(--yellow)', marginTop: '10px' }}>Home / Contact</p>
        </Container>
      </section>

      {/* Info Cards */}
      <section style={{ padding: '70px 0 0', background: 'var(--light-grey)' }}>
        <Container>
          <Row className="g-4">
            {infoCards.map((card, idx) => (
              <Col sm={6} lg={3} key={idx}>
                <div className="text-center" style={{ background: '#fff', borderRadius: '10px', padding: '32px 20px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <div style={{ width: '64px', height: '64px', background: 'var(--yellow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <i className={`bi ${card.icon}`} style={{ fontSize: '24px', color: 'var(--bg-coffee)' }}></i>
                  </div>
                  <h6 style={{ fontFamily: 'var(--oswald-font)', fontWeight: 600, marginBottom: '8px' }}>{card.title}</h6>
                  <p style={{ color: 'var(--grey)', margin: 0, fontSize: '14px' }}>{card.value}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Form */}
      <section style={{ padding: '70px 0 80px', background: 'var(--light-grey)' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '48px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
                {submitted ? (
                  <div className="text-center py-4">
                    <i className="bi bi-check-circle-fill" style={{ fontSize: '4rem', color: '#28a745' }}></i>
                    <h3 className="mt-3" style={{ fontFamily: 'var(--oswald-font)' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--grey)' }}>We'll get back to you within 24 hours.</p>
                    <button className="btn order_now mt-3" onClick={() => setSubmitted(false)}>Send Another</button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-center mb-2" style={{ color: 'var(--light-red)' }}>Send Us a Message</h2>
                    <p className="text-center mb-4" style={{ color: 'var(--grey)' }}>We'd love to hear from you</p>
                    <form onSubmit={handleSubmit}>
                      <Row className="g-3">
                        <Col md={6}>
                          <label style={labelStyle}>Full Name *</label>
                          <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" style={inputStyle} />
                        </Col>
                        <Col md={6}>
                          <label style={labelStyle}>Email Address *</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" style={inputStyle} />
                        </Col>
                        <Col md={12}>
                          <label style={labelStyle}>Phone Number</label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 234 567 8900" style={inputStyle} />
                        </Col>
                        <Col md={12}>
                          <label style={labelStyle}>Message *</label>
                          <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="How can we help you?" style={{ ...inputStyle, resize: 'none' }} />
                        </Col>
                        <Col md={12} className="text-center mt-2">
                          <button type="submit" className="btn order_now" style={{ minWidth: '200px' }}>
                            <i className="bi bi-send me-2"></i>Send Message
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

const inputStyle = {
  width: '100%', border: '1px solid var(--light-grey-2)', borderRadius: '6px',
  padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'var(--roboto-font)',
  transition: 'border-color 300ms ease',
};
const labelStyle = {
  display: 'block', marginBottom: '6px', fontSize: '13px',
  fontWeight: 600, color: 'var(--light-black)', fontFamily: 'var(--oswald-font)', textTransform: 'uppercase',
};

export default Contact;