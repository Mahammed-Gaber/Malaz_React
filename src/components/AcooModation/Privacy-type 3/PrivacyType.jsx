import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'; // Import necessary Bootstrap components
import './PrivacyType.css'
function PrivacyType() {
  const navigate = useNavigate()


  return (
    <>
    <div className="disc" style={{ marginTop: "150px" }}>
      <p className="" style={{ color: "white", fontSize: "2rem", textAlign: "center" }}>
      What type of housing will be available to guests?

      </p>
      <hr />

      <Row className="justify-content-center"> {/* Center cards horizontally */}
        <Col xs={12} md={6} lg={4}> {/* Adjust grid sizes for responsiveness */}
          <Card
            style={{ width: "100%" }} // Set width to 100% for responsive sizing
            onClick={() => navigate("/profile")}
          >
            <i className="fa-solid fa-house" style={{ fontSize: "2rem" }}></i>
            <Card.Body>
              <Card.Title>Complete residence</Card.Title>
              <Card.Text>Guests get the entire place to themselves.area that may be shared with you or others.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4}> {/* Adjust grid sizes for responsiveness */}
          <Card
            style={{ width: "100%" }} // Set width to 100% for responsive sizing
            onClick={() => navigate("/Profilehost")}
          >
            <i className="fa-solid fa-person-booth" style={{ fontSize: "2rem" }}></i>
            <Card.Body>
              <Card.Title>room</Card.Title>
              <Card.Text>Guests get their own room in the house, as well as access to common areas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4}> {/* Adjust grid sizes for responsiveness */}
          <Card
            style={{ width: "100%" }} // Set width to 100% for responsive sizing
            onClick={() => navigate("/Yourplace")}
          >
            <i className="fa-solid fa-people-roof" style={{ fontSize: "2rem" }}></i>
            <Card.Body>
              <Card.Title>Shared room</Card.Title>
              <Card.Text>Guests sleep in a room or common area that may be shared with you or others.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <hr />
      <div className='button'>
    <button class="btn theme_btn button_hover" onClick={() => navigate("/Structure")}>
    the previous
    </button>
    <button class="btn theme_btn button_hover " onClick={() => navigate("/Floorplan")}>
    Next
    </button>
    </div>
    </div>
  

</>
  
  )
};

export default PrivacyType;
