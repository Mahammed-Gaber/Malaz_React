import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'; // Import Card component
import './Structure.css'
function Structure() {
  const navigate = useNavigate()

  return (
    <>
      <div className="disc" style={{ marginTop: "150px" }}>
        <p
          className=""
          style={{ color: "white", fontSize: "2rem", textAlign: "center" }}
        >
          Which of the following best describes your residence

        </p>

        {/* Use buttons for navigation with onClick handlers */}
        
        
        <hr />
      </div>

      <div
        className="card-container d-flex flex-wrap"
        style={{
          justifyContent: "center",
          gap: "10px",
          marginTop: "100px",
          height: "220px",
        }}
      >
        <Card
          style={{ width: "23rem", height: "9rem" }}
          onClick={() => navigate("/profile")}
        >
          <i className="fa-solid fa-house" style={{ fontSize: "2rem" }}></i>
          <Card.Body>
            <Card.Title>house</Card.Title>
            {/* <Card.Text>Provide personal details and how to reach you.</Card.Text> */}
          </Card.Body>
        </Card>
        <Card
          style={{ width: "23rem", height: "9rem" }}
          onClick={() => navigate("/Profilehost")}
        >
          <i className="fa-solid fa-building-user" style={{ fontSize: "2rem" }}></i>
          <Card.Body>
            <Card.Title>apartment</Card.Title>
            {/* <Card.Text>Review payments, returns, coupons, and gift cards.</Card.Text> */}
          </Card.Body>
        </Card>
        <Card
          style={{ width: "23rem", height: "9rem" }}
          onClick={() => navigate("/Yourplace")}
        >
          <i className="fa-solid fa-parachute-box" style={{ fontSize: "2rem" }}></i>
          <Card.Body>
            <Card.Title>hut</Card.Title>
            {/* <Card.Text>Set the default language, currency, and time zone.</Card.Text> */}
          </Card.Body>
        </Card>
      </div>
      <hr />

      {/* Added button for creating a profile */}
      {/* <button className="btn btn-primary btn-lg" onClick={() => navigate("/Createprofile")}>
        next
      </button> */}
       <div className='button'>
    <button class="btn theme_btn button_hover" onClick={() => navigate("/Yourplace")}>
    the previous
    </button>
    <button class="btn theme_btn button_hover " onClick={() => navigate("/PrivacyType")}>
    Next
    </button>
    </div>
    </>
  );
}

export default Structure;
