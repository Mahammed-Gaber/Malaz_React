import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import './Instantbook.css'
function Instantbook () {
  const navigate = useNavigate()

  return (
    <>
      <div className='disc' style={{ marginTop: '150px' }}>
        <p
          className=''
          style={{ color: 'white', fontSize: '3rem', textAlign: 'center' }}
        >
          Select how you will confirm reservations
        </p>

        {/* Navigation buttons (unchanged) */}

        <hr />
      </div>

      <div
        className='card-container d-flex flex-column'
        style={{
          justifyContent: 'center',
          marginTop: '100px',
          alignItems: 'center' /* Vertical centering */,
          width: '100%' /* Full width for consistent centering */
        }}
      >
        {/* Stacked cards for personal information and payments */}
        <Card
          style={{ width: '30rem', height: '10rem' }}
          onClick={() => navigate('/profile')}
        >
          <i className='fa-solid fa-bolt' style={{ fontSize: '2rem' }}></i>
          <Card.Body>
            <Card.Title>Use instant booking</Card.Title>
            <Card.Text>Guests can book automatically.</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '30rem', height: '10rem' }}
          onClick={() => navigate('/Profilehost')}
        >
          <i
            className='fa-solid fa-square-envelope'
            style={{ fontSize: '2rem' }}
          ></i>
          <Card.Body>
            <Card.Title>Approve or reject requests</Card.Title>
            <Card.Text>Guests must submit a reservation request. .</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <hr />
      <div className='button'>
    <button class="btn theme_btn button_hover" onClick={() => navigate("/Floorplan")}>
    the previous
    </button>
    <button class="btn theme_btn button_hover " onClick={() => navigate("/Price")}>
    Next
    </button>
    </div>
    </>
  )
}

export default Instantbook
