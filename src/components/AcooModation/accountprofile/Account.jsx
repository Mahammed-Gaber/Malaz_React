import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import "./Account.css";

function Account() {
  const navigate = useNavigate();

  return (
    <>
      <div className="disc" style={{ marginTop: "150px" }}>
        <p className="" style={{ color: "white", fontSize: "3rem", textAlign: "center" }}>
          Account
        </p>
      </div>

      <div className="card-container d-flex flex-wrap" style={{ justifyContent: "center", gap: "10px", marginTop: "100px", height: "220px" }}>
        <Card className="" style={{ width: "23rem", height: "9rem" }} onClick={() => navigate("/profile")}>
          <i className="fa-solid fa-user" style={{ fontSize: "2rem" }}></i>
          <Card.Body>
            <Card.Title>Personal Information</Card.Title>
            <Card.Text>Provide personal details and how to reach you.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="" style={{ width: "23rem", height: "9rem" }} onClick={() => navigate("/Profilehost")}>
          <i className="fa-solid fa-shield-halved" style={{ fontSize: "2rem" }}></i>
          <Card.Body>
            <Card.Title>Payments</Card.Title>
            <Card.Text>Review payments, returns, coupons, and gift cards.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="" style={{ width: "23rem", height: "9rem" }} onClick={() => navigate("/Yourplace")}>
          <i className="fa-solid fa-house-lock" style={{ fontSize: "2rem" }}></i>
          <Card.Body>
            <Card.Title>Be A Host</Card.Title>
            <Card.Text>Set the default language, currency, and time zone.</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <hr />
    </>
  );
}

export default Account;
