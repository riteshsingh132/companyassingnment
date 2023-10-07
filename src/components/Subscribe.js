import React from 'react'
import "./Subscribe.css"

import vector from "../assests/Vector.png"
import vectorright from "../assests/vectorright.png"
function Subscribe() {
    return (
        <>
            <div className='subsCribeBox'>
                <div>
                </div>
                <div className='row'>
                    <div>
                <img src={vector} className='vector'/>
                <img src={vectorright} className='vectorRight'/>
                        <h1>Subscribe to get updates on exciting offers & deals</h1>
                    </div>
                </div>
                <div className="inputButtonwrapper d-flex">
                    <input placeholder='Enter Your Email' className='form-control'/>
                    <button className=''>Subscribe</button>
                </div>


            </div>
                   


        </>
    )
}

export default Subscribe