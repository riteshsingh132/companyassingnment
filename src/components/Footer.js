import React from 'react'
import "./Footer.css";
import footer from "../assests/footer.png"

function Footer() {
  return (
    <>
      <div className='footerWrapper'>
        <div>
          
           <img src={footer} alt='footer'/>
          
        </div>
      </div>

    </>
  )
}

export default Footer