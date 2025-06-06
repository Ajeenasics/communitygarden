import React from 'react'
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaTree, FaCut, FaMountain } from 'react-icons/fa';
import "../../assets/css/Community.css";
function CommunityHomePage() {
  return (
    
          <div className="landscaping-home">
      {/* Navigation */}
      {/* <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/logo.png" alt="Gardener" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#services">SERVICES</Nav.Link>
              <Nav.Link href="#about">ABOUT US</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
              <Button variant="warning" className="contact-btn">CONTACT</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <div className="hero-content">
            <p className="subtitle">SUSTAINABLE FUTURE GARDEN</p>
            <h1>Landscaping & smart<br />green solutions</h1>
            <div className="hero-buttons">
              <Button variant="warning" className="me-3">ABOUT US</Button>
              <Button variant="outline-light">PROJECTS</Button>
            </div>
            <div className="architect-info">
              <img src="/images/architect.jpg" alt="Architect" />
              <div>
                <p>SAN FRANCISCO</p>
                <p>Architect Roman Smith</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <Container>
          <h2>LEADER IN LANDSCAPING</h2>
          <h3>Services</h3>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Super illud
            nemo non d est non deterrean labore.
          </p>
          
          <Row className="g-4">
            <Col md={3}>
              <Card className="service-card">
                <Card.Body>
                  <FaLeaf className="service-icon" />
                  <Card.Title>Maintenance</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <Button variant="link">Read more →</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="service-card">
                <Card.Body>
                  <FaTree className="service-icon" />
                  <Card.Title>Tree Care</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <Button variant="link">Read more →</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="service-card">
                <FaCut className="service-icon" />
                <Card.Body>
                  <Card.Title>Pruning</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <Button variant="link">Read more →</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="service-card">
                <Card.Body>
                  <FaMountain className="service-icon" />
                  <Card.Title>Landscaping</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <Button variant="link">Read more →</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="outline-dark">SERVICES</Button>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>ABOUT US</h2>
              <h3>A beautiful garden is<br />a work of <span className="text-warning">Art.</span></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <Button variant="warning">ABOUT US</Button>
            </Col>
            <Col md={6}>
              <img src="/images/gardener.jpg" alt="Gardener" className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Container>
          <Row>
            <Col md={4}>
              <h2>What we<br />did so far</h2>
            </Col>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <div className="stat-item">
                    <h3>350+</h3>
                    <p>COMPLETED PROJECTS</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="stat-item">
                    <h3>12+</h3>
                    <p>YEARS EXPERIENCE</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="stat-item">
                    <h3>5+</h3>
                    <p>TEAM MEMBERS</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <Container>
          <Row>
            <Col md={6}>
              <div className="project-grid">
                <img src="/images/project1.jpg" alt="Project 1" className="img-fluid" />
                <img src="/images/project2.jpg" alt="Project 2" className="img-fluid" />
                <img src="/images/project3.jpg" alt="Project 3" className="img-fluid" />
                <img src="/images/project4.jpg" alt="Project 4" className="img-fluid" />
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div className="project-content">
                <p>PROJECTS</p>
                <h3>A peak of our landscape <span className="text-warning">creations</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button variant="outline-dark">PROJECTS</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default CommunityHomePage

