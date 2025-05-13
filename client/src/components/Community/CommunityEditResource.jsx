import React from "react";
import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FaEdit, FaImage } from "react-icons/fa";
import "../../assets/css/ResourseStyling.css";
import CommunityResourceNav from "./CommunityResourceNav";
import { Link } from "react-router-dom";

function CommunityEditResource() {
  const [formData, setFormData] = useState({
    title: "Existing Title",
    category: "gardening",
    description: "Existing Description",
    content: "Existing Content",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("/existing-image.jpg");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <CommunityResourceNav />
      <Container className="edit-resource-container">
        <Card className="edit-card">
          <Card.Header className="bg-success text-white">
            <h3 className="text-center mb-0">
              <FaEdit className="me-2" />
              Edit Resource
            </h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <div className="image-edit-section">
                <div className="current-image-container">
                  <img
                    src={preview}
                    alt="Current Resource"
                    className="current-image"
                  />
                  <div className="image-overlay">
                    <label htmlFor="resourceImage" className="change-image-btn">
                      <FaImage className="me-2" />
                      Change Image
                    </label>
                    <input
                      type="file"
                      id="resourceImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      hidden
                    />
                  </div>
                </div>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Resource Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter resource title"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Resourse Type</Form.Label>
                <Form.Select required>
                  <option value="">Select category</option>
                  <option value="gardening">Gardening Tips</option>
                  <option value="tools">Tools Guide</option>
                  <option value="seasonal">Seasonal Guide</option>
                  <option value="plants">Plant Care</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Resource Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter resource Quantity"
                  required
                />
              </Form.Group>

              <div className="button-group">
                <Link to={"/community/resourseview"}>
                  <Button variant="success" type="submit">
                    Update Resource
                  </Button>
                </Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CommunityEditResource;
