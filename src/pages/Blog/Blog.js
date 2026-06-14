import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../component/Layouts/Layout';

const posts = [
  { id: 1, title: "The Secret Behind Our Crispy Patties", date: "June 2, 2025", category: "Recipes", readTime: "4 min", emoji: "🍔", excerpt: "Ever wondered what makes our patties so irresistibly crispy on the outside while staying juicy inside? We reveal the technique." },
  { id: 2, title: "Top 5 Burger Pairings You Need to Try", date: "May 18, 2025", category: "Tips", readTime: "3 min", emoji: "🍟", excerpt: "Drinks, sides, sauces — we break down the perfect pairings for each burger on our menu." },
  { id: 3, title: "How We Source Our Ingredients Locally", date: "May 5, 2025", category: "Behind the Scenes", readTime: "5 min", emoji: "🥬", excerpt: "From farms within 50 miles of our kitchen — learn about the farmers and producers we partner with." },
  { id: 4, title: "Our Vegan Menu: Plant-Based Done Right", date: "April 22, 2025", category: "Health", readTime: "3 min", emoji: "🌿", excerpt: "Going vegan doesn't mean giving up flavour. Our plant-based options are packed with taste and nutrition." },
  { id: 5, title: "Behind the Kitchen: A Day in Our Life", date: "April 10, 2025", category: "Behind the Scenes", readTime: "6 min", emoji: "👨‍🍳", excerpt: "Follow our head chef through a full day at the restaurant — prep, rush hour, and everything in between." },
  { id: 6, title: "Summer Special: New Items on the Menu", date: "March 28, 2025", category: "News", readTime: "2 min", emoji: "☀️", excerpt: "We're launching 3 exciting new items this summer. Here's a sneak peek at what's coming to the menu." },
];

const categoryColors = {
  Recipes: 'var(--light-red)',
  Tips: 'var(--bg-coffee)',
  'Behind the Scenes': '#6c757d',
  Health: '#28a745',
  News: 'var(--yellow)',
};

const Blog = () => (
  <Layout>
    <section style={{ background: 'var(--bg-coffee)', padding: '100px 0 60px', textAlign: 'center' }}>
      <Container>
        <h1 style={{ color: '#fff', fontSize: '3.5rem' }}>Our Blog</h1>
        <p style={{ color: 'var(--yellow)', marginTop: '10px' }}>Home / Blog</p>
      </Container>
    </section>

    <section style={{ padding: '80px 0', background: 'var(--light-grey)' }}>
      <Container>
        <Row>
          {posts.map(post => (
            <Col md={6} lg={4} key={post.id} className="mb-4">
              <div style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 300ms ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ background: 'var(--light-grey)', padding: '40px', textAlign: 'center', fontSize: '4rem' }}>{post.emoji}</div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span style={{ background: categoryColors[post.category] || 'var(--grey)', color: post.category === 'News' ? '#333' : '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>{post.category}</span>
                    <span style={{ color: 'var(--grey)', fontSize: '12px' }}><i className="bi bi-clock me-1"></i>{post.readTime} read</span>
                  </div>
                  <h5 style={{ fontFamily: 'var(--oswald-font)', fontWeight: 600, lineHeight: 1.3, marginBottom: '10px' }}>{post.title}</h5>
                  <p style={{ color: 'var(--grey)', fontSize: '14px', flex: 1 }}>{post.excerpt}</p>
                  <div className="d-flex align-items-center justify-content-between mt-3" style={{ borderTop: '1px solid var(--light-grey)', paddingTop: '12px' }}>
                    <span style={{ color: 'var(--grey)', fontSize: '12px' }}><i className="bi bi-calendar3 me-1"></i>{post.date}</span>
                    <button style={{ background: 'none', border: 'none', color: 'var(--light-red)', fontWeight: 700, cursor: 'pointer', fontSize: '13px', fontFamily: 'var(--oswald-font)' }}>
                      Read More <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  </Layout>
);

export default Blog;