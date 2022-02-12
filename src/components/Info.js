import React from 'react'

function Info() {
  return (
    <>
      <div className='image-container'>
        <img src='images/prof.jpg' />
      </div>
      <h3 className='prof-name'> Glenn Malalis </h3>
      <h4 className='prof-position'> Frontend Developer </h4>
      <h5 className='prof-site'> glenn.malalis</h5>
      <div className="btns-container">
          <button className='email-btn'> <i class="fas fa-envelope"></i> Email </button>
          <button className='linkedin-btn'> <i class="fab fa-linkedin"></i> LinkedIn</button>
      </div>
    </>

  )
}

export default Info