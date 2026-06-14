import React from 'react';
import { Col, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function Cards({ id, image, rating, title, paragraph, price, renderRatingIcons }) {
  const { addToCart, cartItems } = useCart();

  const inCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = () => {
    addToCart({ id, image, title, paragraph, price, rating });
  };

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <div className="add_to_card">
              <button
                onClick={handleAddToCart}
                style={{
                  background: inCart ? "var(--light-red)" : "var(--yellow)",
                  color: inCart ? "#fff" : "var(--light-black)",
                  border: "none",
                  display: "inline-block",
                  fontSize: "1rem",
                  lineHeight: 1,
                  fontWeight: 700,
                  padding: "8px 14px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "all 300ms ease",
                }}
              >
                <i className={`bi ${inCart ? "bi-bag-check" : "bi-bag"} me-2`}></i>
                {inCart ? "Added" : "Add To Cart"}
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;