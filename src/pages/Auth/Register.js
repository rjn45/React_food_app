import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../component/Layouts/Layout';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setError("Passwords don't match");
      return;
    }
    setError('');
    // TODO: call registerUser(form) from services/api.js
    console.log('Register:', form);
    navigate('/login');
  };

  const field = (name, label, type = 'text', placeholder = '') => (
    <div className="mb-3">
      <label style={labelStyle}>{label}</label>
      <input type={type} value={form[name]} onChange={e => setForm({...form, [name]: e.target.value})} required placeholder={placeholder} style={inputStyle} />
    </div>
  );

  return (
    <Layout>
      <section style={{ padding: '100px 0 80px', background: 'var(--light-grey)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div style={{ background: '#fff', borderRadius: '14px', padding: '48px 40px', boxShadow: '0 4px 24px rgba(0,0,0,0.09)' }}>
                <div className="text-center mb-4">
                  <div style={{ width: '70px', height: '70px', background: 'var(--yellow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <i className="bi bi-person-plus-fill" style={{ fontSize: '2rem', color: 'var(--bg-coffee)' }}></i>
                  </div>
                  <h2 style={{ color: 'var(--bg-coffee)', marginBottom: '4px' }}>Create Account</h2>
                  <p style={{ color: 'var(--grey)', margin: 0 }}>Join us and start ordering</p>
                </div>

                {error && (
                  <div style={{ background: '#fff3f3', border: '1px solid var(--light-red)', borderRadius: '6px', padding: '10px 14px', marginBottom: '16px', color: 'var(--light-red)', fontSize: '14px' }}>
                    <i className="bi bi-exclamation-circle me-2"></i>{error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>{field('name', 'Full Name', 'text', 'John Doe')}</Col>
                    <Col md={6}>{field('phone', 'Phone Number', 'tel', '+1 234 567 8900')}</Col>
                  </Row>
                  {field('email', 'Email Address', 'email', 'you@example.com')}
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <label style={labelStyle}>Password</label>
                        <div style={{ position: 'relative' }}>
                          <input type={showPass ? 'text' : 'password'} value={form.password} onChange={e => setForm({...form, password: e.target.value})} required placeholder="Min 8 chars" style={{ ...inputStyle, paddingRight: '40px' }} />
                          <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--grey)' }}>
                            <i className={`bi ${showPass ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>{field('confirm', 'Confirm Password', 'password', 'Repeat password')}</Col>
                  </Row>
                  <button type="submit" className="btn order_now w-100 mt-2" style={{ padding: '14px', fontSize: '16px' }}>
                    Create Account
                  </button>
                </form>

                <div className="text-center mt-4" style={{ paddingTop: '20px', borderTop: '1px solid var(--light-grey)' }}>
                  <p style={{ color: 'var(--grey)', margin: 0, fontSize: '14px' }}>
                    Already have an account?{' '}
                    <Link to="/login" style={{ color: 'var(--light-red)', fontWeight: 700 }}>Sign In</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

const inputStyle = { width: '100%', border: '1px solid var(--light-grey-2)', borderRadius: '8px', padding: '12px 14px', fontSize: '15px', outline: 'none', fontFamily: 'var(--roboto-font)' };
const labelStyle = { display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--light-black)', fontFamily: 'var(--oswald-font)', textTransform: 'uppercase' };

export default Register;