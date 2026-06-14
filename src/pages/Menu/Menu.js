import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../component/Layouts/Layout';
import Cards from '../../component/Cards';
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";

const allItems = [
  { id: "0001", image: Image1, title: "Crispy Chicken", paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw", rating: 5, price: 99.15, category: "chicken" },
  { id: "0002", image: Image2, title: "Ultimate Bacon", paragraph: "House patty, cheddar cheese, bacon, onion, mustard", rating: 4.5, price: 99.32, category: "beef" },
  { id: "0003", image: Image3, title: "Black Sheep", paragraph: "American cheese, tomato relish, avocado, lettuce, red onion", rating: 4, price: 69.15, category: "beef" },
  { id: "0004", image: Image4, title: "Vegan Burger", paragraph: "House patty, cheddar cheese, bacon, onion, mustard", rating: 3.5, price: 99.25, category: "vegan" },
  { id: "0005", image: Image5, title: "Double Burger", paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes", rating: 3.0, price: 59.25, category: "beef" },
  { id: "0006", image: Image6, title: "Turkey Burger", paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles", rating: 3, price: 79.18, category: "chicken" },
  { id: "0007", image: Image7, title: "Smokey House", paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles", rating: 2.5, price: 99.19, category: "beef" },
  { id: "0008", image: Image8, title: "Classic Burger", paragraph: "cheddar cheese, ketchup, mustard, pickles, onion", rating: 2.0, price: 89.12, category: "beef" },
];

const categories = ["all", "beef", "chicken", "vegan"];

const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key="half" className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? allItems
    : allItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <section style={{ background: 'var(--bg-coffee)', padding: '100px 0 60px', textAlign: 'center' }}>
        <Container>
          <h1 style={{ color: '#fff', fontSize: '3.5rem' }}>Our Menu</h1>
          {/* <p style={{ color: 'var(--yellow)', marginTop: '10px' }}>Home / Menu</p> */}
        </Container>
      </section>

      <section className="menu_section">
        <Container>
          {/* Category Filter */}
          <Row className="mb-5">
            <Col className="text-center">
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '8px 24px',
                      border: '2px solid',
                      borderColor: activeCategory === cat ? 'var(--light-red)' : 'var(--light-grey-2)',
                      background: activeCategory === cat ? 'var(--light-red)' : 'transparent',
                      color: activeCategory === cat ? '#fff' : 'var(--light-black)',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontFamily: 'var(--oswald-font)',
                      fontWeight: 500,
                      fontSize: '15px',
                      textTransform: 'uppercase',
                      transition: 'all 300ms ease',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Col>
          </Row>

          <Row>
            {filtered.map((item) => (
              <Cards
                key={item.id}
                id={item.id}
                image={item.image}
                rating={item.rating}
                title={item.title}
                paragraph={item.paragraph}
                price={item.price}
                renderRatingIcons={renderRatingIcons}
              />
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Menu;