import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../styles/HeaderStyle.css";
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../assets/logo/logo.png";
import { useCart } from "../../context/CartContext";

function Header() {
  const [nav, setNav] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue = document?.documentElement?.scrollTop;
      scrollValue > 100 ? setNav(true) : setNav(false);
    };
    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              <Nav.Link as={NavLink} to="/menu">Our Menu</Nav.Link>
              <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
              <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
              <Nav.Link as={NavLink} to="/login">
                <i className="bi bi-person me-1"></i>Login
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  {totalItems > 0 && (
                    <em className="roundpoint">{totalItems}</em>
                  )}
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
// already written above — checking for login link