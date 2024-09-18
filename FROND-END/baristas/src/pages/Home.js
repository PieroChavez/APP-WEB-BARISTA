// src/pages/Home.js

import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">TripAdvisor Clone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Inicio</Nav.Link>
              <Nav.Link href="#">Destinos</Nav.Link>
              <Nav.Link href="#">Hoteles</Nav.Link>
              <Nav.Link href="#">Restaurantes</Nav.Link>
              <Nav.Link href="#">Atracciones</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section with Search Bar */}
      <div className="hero-section" style={{ background: 'url(/path/to/your/image.jpg) center/cover', height: '400px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Container>
          <h1>Explora el mundo con TripAdvisor Clone</h1>
          <Form className="search-bar mt-4">
            <Row>
              <Col>
                <FormControl type="text" placeholder="¿A dónde quieres ir?" />
              </Col>
              <Col>
                <Button variant="primary" type="submit">Buscar</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      {/* Featured Sections */}
      <Container className="my-5">
        <h2>Destinos Populares</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://source.unsplash.com/random/400x300?beach" />
              <Card.Body>
                <Card.Title>Playa del Carmen</Card.Title>
                <Card.Text>
                  Explora las hermosas playas y la vibrante vida nocturna.
                </Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://source.unsplash.com/random/400x300?city" />
              <Card.Body>
                <Card.Title>New York City</Card.Title>
                <Card.Text>
                  Descubre la ciudad que nunca duerme.
                </Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://source.unsplash.com/random/400x300?mountain" />
              <Card.Body>
                <Card.Title>Machu Picchu</Card.Title>
                <Card.Text>
                  Aventúrate en las antiguas ruinas incas.
                </Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
