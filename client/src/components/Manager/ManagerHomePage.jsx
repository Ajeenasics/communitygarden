import React from 'react'
import ManagerHomeNav from './ManagerHomeNav'
import "../../assets/css/Manager.css"
import "../../assets/tropical image.jpg"
import iamge1 from "../../assets/soil.jpg"

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ManagerHomePage() {
  return (
    <div className='manager-home-page'>
    <ManagerHomeNav/>
    {/* Hero Banner */}
          <section className="Manager-section  text-white text-center d-flex align-items-center justify-content-center">
            <div className="overlay"></div>
            <div className="content">
              <h1>Welcome Back, Gardener!</h1>
              <p>Let’s grow something beautiful together.</p>
              {/* <Link to="/gardening-details" className="btn btn-light mt-3">Explore Your Garden</Link> */}
            </div>
          </section>
                {/* Hero Section */}
      
      {/* Services Section */}
      <section className="services-section">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="landscaping-design">
                <img 
                  src={iamge1} 
                  alt="Landscape Worker" 
                  className="img-fluid rounded mb-4"
                  width="400"
                  height="400"
                />
                {/* ... existing landscaping content ... */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="lawn-maintenance">
                <img 
                  src={iamge1} 
                  alt="Lawn Maintenance" 
                  className="img-fluid rounded mb-4"
                  width="400"
                  height="400"
                />
                {/* ... existing lawn maintenance content ... */}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* ... existing welcome content ... */}
            </div>
            <div className="col-md-6">
              <img 
                src={iamge1} 
                alt="Professional Gardener" 
                className="img-fluid rounded shadow"
                width="400"
                height="400"
              />
            </div>
          </div>
        </Container>
      </section>


    </div>
     

    
      


  )
}

export default ManagerHomePage
