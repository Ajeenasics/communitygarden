import React from 'react'
import AdminNav from './AdminNav'
import '../../assets/css/AdminDashCompStyle.css';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaBox, FaLeaf, FaHashtag } from 'react-icons/fa';

function AdminViewResources() {
    const resources = [
    {
      id: 1,
      image: "/path-to-image.jpg",
      name: "Garden Tools Set",
      type: "Equipment",
      quantity: 15
    },
     {
      id: 2,
      image: "/path-to-image.jpg",
      name: "Garden Tools Set",
      type: "Equipment",
      quantity: 15
    },
     {
      id: 3,
      image: "/path-to-image.jpg",
      name: "Garden Tools Set",
      type: "Equipment",
      quantity: 15
    },
     {
      id: 4,
      image: "/path-to-image.jpg",
      name: "Garden Tools Set",
      type: "Equipment",
      quantity: 15
    },
    // Add more resources here
  ];
  return (
    <div>
      <AdminNav/>
       <Container className="resource-container">
      <h2 className="text-center mb-4">Available Resources</h2>
      <Row>
        {resources.map((resource) => (
          <Col lg={3} md={4} sm={6} className="mb-4" key={resource.id}>
            <Card className="resource-card">
              <div className="resource-image-wrapper">
                <img
                  src={resource.image}
                  alt={resource.name}
                  className="resource-image"
                />
              </div>
              
              <Card.Body>
                <div className="resource-name">
                  <FaBox className="icon" />
                  <h5>{resource.name}</h5>
                </div>

                <div className="resource-info">
                  <Badge bg="success" className="type-badge">
                    <FaLeaf className="badge-icon" />
                    {resource.type}
                  </Badge>
                  
                  <div className="quantity-info">
                    <FaHashtag className="icon" />
                    <span>Quantity: {resource.quantity}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    </div>
  )
}

export default AdminViewResources