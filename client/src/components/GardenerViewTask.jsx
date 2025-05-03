import React from 'react'
import '../assets/css/garderner.css'
import GardenerHomeNav from './GardenerHomeNav'
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { useState } from 'react';


function GardenerViewTask() {
  const [tasks] = useState([
    {
      id: 1,
      title: "Rose Garden Maintenance",
      type: "Maintenance",
      area: "Rose Section",
      priority: "High",
      status: "In Progress",
      assignedTo: "John Smith",
      dueDate: "2024-03-20",
      estimatedduration:" 5 days",
      description: "Regular maintenance of rose garden including pruning and fertilizing",
      image: "/images/rose-garden.jpg"
    },
    {
      id: 2,
      title: "Lily Garden Planting",
      type: "Planting",
      area: "Lily Section",
      priority: "Medium",
      status: "Pending",
      assignedTo: "Jane Doe",
      dueDate: "2024-03-25",
      estimatedduration:" 3 days",
      description: "Plant new lily bulbs in the designated area",
      image: "/images/lily-garden.jpg"
    },
    {
      id: 3,
      title: "Tulip Garden Weeding",
      type: "Weeding",
      area: "Tulip Section",
      priority: "Low",
      status: "Completed",
      assignedTo: "Alice Johnson",
      dueDate: "2024-03-15",
      estimatedduration:" 2 days",
      description: "Remove weeds from the tulip garden to promote healthy growth",
      image: "/images/tulip-garden.jpg"
    },

  ]);



  return (

     <div>
    <div className="garden-task-container">
      <GardenerHomeNav/>
      <div className="task-header-section text-center mt-5">
        <h2>Garden Tasks Overview</h2>
       
      </div>

      <Row xs={1} md={2} lg={3} className="task-grid-container flex-direction: row; ">
        {tasks.map((task) => (
          <Col key={task.id}  className="task-grid-item">
            <Card className="task-card-wrapper">
              <div className="task-image-container">
                {task.image ? (
                  <Card.Img 
                    src={task.image} 
                    className="task-image"
                    alt={task.title}
                  />
                ) : (
                  <div className="image-placeholder">
                    <i className="bi bi-image"></i>
                    <p>No image available</p>
                  </div>
                )}
                <div className="image-upload-overlay">
                  <label className="upload-button">
                    <i className="bi bi-camera"></i>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, task.id)}
                      className="file-input"
                    />
                  </label>
                </div>
              </div>

              <Card.Body className="task-content">
               
                <h3 className="task-title">{task.title}</h3>
                <div className="task-info">
                <div className="info-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>{task.area}</span>
                  </div>
                  <div className="info-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>{task.type}</span>
                  </div>
                  </div>

                <div className="task-info">
                  
                  <div className="info-item">
                    <i className="bi bi-person"></i>
                    <span>{task.assignedTo}</span>
                  </div>
                  <div className="info-item">
                    <i className="bi bi-calendar"></i>
                    <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                  </div>
                  <div className="info-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>{task.estimatedduration}</span>
                  </div>
                  
                </div>
                

                <p className="task-description">{task.description}</p>

                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>

     </div>

  
  )
}

export default GardenerViewTask
