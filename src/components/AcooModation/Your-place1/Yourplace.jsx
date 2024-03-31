import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Yourplace.css'
function Yourplace() {
  const navigate =useNavigate()

  return (
    <>
<section class="hero">
  <video
    className="hero__video"
    autoPlay
    loop
    muted
    crossOrigin="anonymous"
    playsInline
    preload="auto"
    style={{ objectFit: "cover" }}
  >
    <source src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high" />
  </video>

  <div class="hero__content">
    <h1 class="hero__title">Tell us about your residence</h1>
    <p class="hero__text">
      At this point, we'll ask you what type of property you have and whether guests will be booking the entire listing or just a room.
      Next, you will tell us the location and the number of guests that can be received.
    </p>

    <div className='button'>
    <button class="btn theme_btn button_hover" onClick={() => navigate("/Account")}>
    the previous
    </button>
    <button class="btn theme_btn button_hover " onClick={() => navigate("/Structure")}>
    Next
    </button>
    </div>
  </div>
</section>

</>
  )
}


export default Yourplace