import React from 'react';
import  { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { FaUpload } from 'react-icons/fa';

import '../../assets/css/ResourseStyling.css';
import CommunityResourceNav from './CommunityResourceNav';
import { Link } from 'react-router-dom';
function CommunityResourseAdd() {
   
     
     const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    content: ''
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

   

 

  return (
    <div>
    <CommunityResourceNav/>
         <Container className="add-resource-container">
      <Card className="resource-card">
        <Card.Header className="bg-success text-white">
          <h3 className="text-center mb-0">Add New Resource</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* Image Upload Section */}
            <div className="image-upload-section">
              <div 
                className="image-preview-container"
                onClick={() => document.getElementById('resourceImage').click()}
              >
                {preview ? (
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="preview-image"
                  />
                ) : (
                  <div className="upload-placeholder">
                    <FaUpload className="upload-icon" />
                    <p>Click to Upload Image</p>
                  </div>
                )}
                <input
                  type="file"
                  id="resourceImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
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

           

            

            <Link to={"/community/resourseview"}><Button 
              type="submit" 
              variant="success" 
              className="w-100 submit-btn"
            >
              Add Resource
            </Button></Link>
          </Form>
        </Card.Body>
      </Card>
    </Container>


    </div>
  )
}

export default CommunityResourseAdd
