import React from 'react'
// import heroImage from "../assests/image1.png"
import "./Hero.css"
import heroImage from "../assests/image1.png"
function Hero() {
  return (
    <>
    <div className='heropage'>
      <img src={heroImage} loading='lazy' alt='heroimg'/>
    </div>

    </>
  )
}

export default Hero