import React from 'react'
import { useNavigate } from 'react-router-dom'
import'./Congratulations.css'
function Congratulations() {
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
    <h1 class="hero__title">Congratulations, Mahdy!
</h1>
    <p class="hero__text">
    From one host to another: Welcome. Thank you for sharing your home and helping give our guests amazing experiences.

    </p>
    <div className='button'>
    <button class="btn theme_btn button_hover" onClick={() => navigate("/Price")}>
    the previous
    </button>
    <button class="btn theme_btn button_hover " onClick={() => navigate("/")}>
    Next
    </button>
    </div>
  </div>
</section>

</>
  )
}


export default Congratulations