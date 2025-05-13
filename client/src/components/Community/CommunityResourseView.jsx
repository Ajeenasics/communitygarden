import React from "react";
import { Button } from "react-bootstrap";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import { FaCalendar, FaUser, FaFolder } from "react-icons/fa";
import { FaBox, FaList, FaHashtag } from 'react-icons/fa';

import "../../assets/css/ResourseStyling.css";
import CommunityResourceNav from "./CommunityResourceNav";
import { Link } from "react-router-dom";
function CommunityResourseView() {

    const resources = [
    {
      id: 1,
      name: "Garden Tools Set",
      type: "Tools Guide",
      quantity: 15,
      image: "/path-to-image1.jpg"
    },
    {
      id: 2,
      name: "Organic Seeds",
      type: "Gardening Tips",
      quantity: 100,
      image: "/path-to-image2.jpg"
    },
    {
      id: 3,
      name: "Plant Care Kit",
      type: "Plant Care",
      quantity: 25,
      image: "/path-to-image3.jpg"
    }
  ];


  return (
    <div>
      <CommunityResourceNav />
      
            <Container className="resource-view-container">
        <h2 className="text-center mb-4">Available Resources</h2>
        <Row>
          {resources.map((resource) => (
            <Col md={6} lg={4} key={resource.id} className="mb-4">
              <Card className="resource-card h-100">
                <div className="resource-image-wrapper">
                  <img 
                    src={resource.image} 
                    alt={resource.name}
                    className="resource-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="resource-title">{resource.name}</Card.Title>
                  <div className="resource-info">
                    <div className="info-item">
                      <FaList className="info-icon" />
                      <Badge bg="success">{resource.type}</Badge>
                    </div>
                    <div className="info-item">
                      <FaHashtag className="info-icon" />
                      <span>Quantity: {resource.quantity}</span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <Link to={"/community/resource/edit"}>
                      <Button variant="success" className="me-2 w-100 submit-btn">Edit</Button>
                    </Link>
                     <Link to={"/community/resource/edit"}>
                      <Button variant="success" className="me-2 w-100 submit-btn">Delete</Button>
                    </Link></div>
                    
                   
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
}

export default CommunityResourseView;
