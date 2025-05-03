import React from "react";
import "../assets/css/garderner.css";
import GardenerHomeNav from "./GardenerHomeNav";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";



function GardenerViewGarden() {
  const gardens = [
    {
      id: 1,
      name: "Rose Garden",
      region: "East Wing",
      days: "10 days",
     assingedplot :"Plot A1",
      status: "Active",
      mainGardener: "John Smith",
      
      image: ("https://i.pinimg.com/736x/a4/13/66/a413660ff25c31767567079814105326.jpg"),
      description:
        "A Rose garden designed to attract people and butterflies alike. It features a variety of roses, including hybrid teas, floribundas, and climbing roses. The garden is designed to be a peaceful retreat, with winding paths and seating areas for visitors to enjoy the beauty of the flowers.",


    },
    {
      id: 2,
      name: "Lily Garden",
      region: "West Wing",
      days: "10 days",
      assingedplot :"Plot A2",
      status: "Active",
      mainGardener: "Jane Doe",

      image: ("https://i.pinimg.com/736x/c6/16/d1/c616d183f10f54793be770c59c84d734.jpg"),
      description:  " A Lily garden that is perfect for visitors who love the fragrance and beauty of lilies. The garden features a variety of lilies, including oriental lilies, asiatic lilies, and hybrid lilies. The garden is designed to be a serene and tranquil space, with winding paths and seating areas for visitors to enjoy the beauty of the flowers."
    },
      
      {
        id: 3,
        name: "Tulip Garden",
        region: "North Wing",
        days: "10 days",
        assingedplot :"Plot A3",
        status: "Active",
        mainGardener: "Alice Johnson",
  
        image: ("https://i.pinimg.com/736x/99/4e/67/994e6709dfe83288d3ff4f57442a2412.jpg"),
        description:
          "A Tulip garden that is a feast for the eyes. The garden features a variety of tulips, including Darwin hybrids, Triumph tulips, and fringed tulips. The garden is designed to be a vibrant and colorful space, with winding paths and seating areas for visitors to enjoy the beauty of the flowers.",
      },  
  ];
  return (
    <div>
      <GardenerHomeNav />
      <div className="garden-view-container">
        <Row xs={1} md={2} lg={3} className="g-4">
          {gardens.map((garden) => (
            <Col key={garden.id}>
              <Card className="garden-card-container">
                <div className="garden-image-wrapper">
                  <Card.Img
                    variant="top"
                    src={garden.image}
                    className="garden-image"
                  />
                 
                </div>

                <Card.Body>
                  <Card.Title className="garden-title">
                    {garden.name}
                  </Card.Title>

                  <div className="garden-details">
                    <div className="detail-item">
                      <i className="bi bi-geo-alt"></i>
                      <span>{garden.region}</span>
                    </div>
                    
                    <div className="detail-item">
                      <i className="bi bi-rulers"></i>
                      <span>{garden.assingedplot}</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-person"></i>
                      <span>{garden.mainGardener}</span>
                    </div>
                  </div>

                  <Card.Text className="garden-description">
                    {garden.description}
                  </Card.Text>

                

                  {/* <div className="action-buttons">
                    <Button variant="outline-success" className="view-btn">
                      View Details
                    </Button>
                    <Button variant="success" className="manage-btn">
                      Manage Garden
                    </Button>
                  </div> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default GardenerViewGarden;
