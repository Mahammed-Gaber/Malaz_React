import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Floorplan.css'
function Floorplan () {
  const navigate = useNavigate()
  return (
    <>
      <br />
      <div className='container my-5'>
        <div className='row  d-flex justify-content-between align-self-start'>
          <div className='col-md-3  d-flex  flex-column align-items-center '>
            {/* <input type="number" /> */}
            <h3
              className='fs-1  bg-dark text-white rounded-circle  text-center  '
              style={{ lineHeight: '150px', width: '200px', height: '200px' }} >
                 <i className="fa-solid fa-circle-dollar-to-slot"style={{ fontSize:"200px" }} ></i></h3>
            <button
              type='button'
              className='btn-secondary'
              style={{
                width: '80px',
                borderRadius: '50px',
                border: 'none',
                padding: '5px',
                backgroundColor: '#52D0FE',
                color: 'whitesmoke'
               
              }} >price</button>
          </div>
          <div className='col-md-8'>
            <h3 style={{ color: 'white' }}>
              {' '}
              Give us some key information about your listing
            </h3>
            <h5 style={{ color: 'white' }}>
              {' '}
              Give us some key information about your listing
            </h5>
            {/* make cards start */}
            <div className='container overflow-hidden'>
              <div className='row gy-4 d-flex justify-content-between'>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>Guests</div>
                </div>
                  <input type="number" style={{ right:"10px" }} />
{/* /////////////////////////////////// */}
                <br />
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>bedrooms</div>
                </div>

                <input type="number" style={{ right:"10px" }} />
{/* /////////////////////////////////// */}
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>bed</div>
                </div>
                <input type="number" style={{ right:"10px" }} />
{/* /////////////////////////////////// */}
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>Bathrooms</div>
                </div>
                <input type="number" style={{ right:"10px" }} />
{/* //////////////////////////////////// */}
                {/* <button
                  style={{
                    // width: '80px',
                    borderRadius: '50px',
                    border: 'none',
                    padding: '5px',
                    backgroundColor: '#D4A20E',
                    color: 'whitesmoke'
                  }}
                  to='Createprofile'
                  className='btn btn- btn-lg'
                  onClick={() => navigate('#')}
                >
                  Update Profile
                </button> */}
              </div>
            </div>
            <br />
            <div className='button'>
              <button
                class='btn theme_btn button_hover'
                onClick={() => navigate('/PrivacyType')}
              >
                the previous
              </button>
              <button
                class='btn theme_btn button_hover '
                onClick={() => navigate('/Instantbook')}
              >
                Next
              </button>
            </div>

            {/* make cards end*/}
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default Floorplan
