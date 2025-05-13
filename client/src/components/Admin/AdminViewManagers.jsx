import React from 'react'
import AdminNav from './AdminNav'
import '../../assets/css/AdminDashCompStyle.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBuilding, FaUser, FaEnvelope, FaPhone, FaMapMarker, FaBriefcase } from 'react-icons/fa';

function AdminViewManagers() {

    const managers = [
    {
      id: 1,
      image: "/path-to-image.jpg",
      organizationName: "Green Gardens Inc",
      fullName: "John Smith",
      address: "456 Park Avenue",
      email: "john@greengardens.com",
      phone: "+1234567890",
      organizationType: "Community Garden"
    },
    // Add more managers as needed
  ];

  return (
    <div>
      <AdminNav/>
          <Container className="manager-container">
      <h2 className="text-center mb-4">Organization Managers</h2>
      <Row>
        {managers.map((manager) => (
          <Col lg={4} md={6} className="mb-4" key={manager.id}>
            <Card className="manager-card">
              <div className="manager-image-container">
                <img
                  src={manager.image}
                  alt={manager.fullName}
                  className="manager-image"
                />
              </div>
              
              <Card.Body>
                <div className="organization-info">
                  <FaBuilding className="icon" />
                  <h5>{manager.organizationName}</h5>
                  <span className="org-type">
                    <FaBriefcase className="icon-small" />
                    {manager.organizationType}
                  </span>
                </div>

                <div className="manager-details">
                  <div className="detail-item">
                    <FaUser className="icon" />
                    <span>{manager.fullName}</span>
                  </div>

                  <div className="detail-item">
                    <FaEnvelope className="icon" />
                    <span>{manager.email}</span>
                  </div>

                  <div className="detail-item">
                    <FaPhone className="icon" />
                    <span>{manager.phone}</span>
                  </div>

                  <div className="detail-item">
                    <FaMapMarker className="icon" />
                    <span>{manager.address}</span>
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

export default AdminViewManagers