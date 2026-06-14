import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../component/Layouts/Layout';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: call loginUser(form) from services/api.js, save JWT token
    console.log('Login:', form);
    navigate('/');
  };

  return (
    <Layout>
      <section style={{ padding: '100px 0 80px', background: 'var(--light-grey)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={5}>
              <div style={{ background: '#fff', borderRadius: '14px', padding: '48px 40px', boxShadow: '0 4px 24px rgba(0,0,0,0.09)' }}>
                <div className="text-center mb-4">
                  <div style={{ width: '70px', height: '70px', background: 'var(--yellow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <i className="bi bi-person-fill" style={{ fontSize: '2rem', color: 'var(--bg-coffee)' }}></i>
                  </div>
                  <h2 style={{ color: 'var(--bg-coffee)', marginBottom: '4px' }}>Welcome Back</h2>
                  <p style={{ color: 'var(--grey)', margin: 0 }}>Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label style={labelStyle}>Email Address</label>
                    <div style={{ position: 'relative' }}>
                      <i className="bi bi-envelope" style={iconStyle}></i>
                      <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required placeholder="you@example.com" style={{ ...inputStyle, paddingLeft: '40px' }} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label style={labelStyle}>Password</label>
                    <div style={{ position: 'relative' }}>
                      <i className="bi bi-lock" style={iconStyle}></i>
                      <input type={showPass ? 'text' : 'password'} value={form.password} onChange={e => setForm({...form, password: e.target.value})} required placeholder="••••••••" style={{ ...inputStyle, paddingLeft: '40px', paddingRight: '40px' }} />
                      <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--grey)' }}>
                        <i className={`bi ${showPass ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                      </button>
                    </div>
                    <div className="text-end mt-1">
                      <button type="button" style={{ background: 'none', border: 'none', color: 'var(--light-red)', fontSize: '13px', cursor: 'pointer', padding: 0 }}>Forgot Password?</button>
                    </div>
                  </div>
                  <button type="submit" className="btn order_now w-100" style={{ padding: '14px', fontSize: '16px' }}>
                    Sign In
                  </button>
                </form>

                <div className="text-center mt-4" style={{ paddingTop: '20px', borderTop: '1px solid var(--light-grey)' }}>
                  <p style={{ color: 'var(--grey)', margin: 0, fontSize: '14px' }}>
                    Don't have an account?{' '}
                    <Link to="/register" style={{ color: 'var(--light-red)', fontWeight: 700 }}>Sign Up</Link>
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
const iconStyle = { position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--grey)', fontSize: '16px' };

export default Login;