import React from 'react'
import "./Sales.css";
import diamond1 from "../assests/diamond1.png"
import helpline from "../assests/helpline.png"
import quality from "../assests/quality.png"
import safePayment from "../assests/safe Payment.png"
import daysReturn from "../assests/7day return.png"
import elipse from "../assests/Ellipse27.png"
import elipseright from "../assests/Ellipse39.png"
import discount from "../assests/discount1.png"
import Album from './Album';
import Subscribe from './Subscribe';
function Sales() {
    return (
        <>

            <div className='saleWrapper d-flex'>
                <div className='salesCardfirst'>
                    <div className='imageWrapper'><img src={diamond1} /></div>
                    <h2>Hurry Up</h2>
                    <h1>85% OFF</h1>
                    <h4>Sale</h4>
                    <button>SHOP NOW</button>
                </div>
                <div className='salesCardfirst discount'>
                <div className='imageWrapper'><img src={discount} /></div>
                    <h2>Hurry Up</h2>
                    <h1>85% OFF</h1>
                    <h4>Sale</h4>
                    <button>SHOP NOW</button>
                </div>
            </div>


            <div style={{ width: "1366px", margin: "0 auto", position: "relative" }}>
                <img src={elipseright} style={{ width: "109px", position: "absolute", left: "1257px" }} />
                {/* Rest of your content */}
            </div>


            <div className='services'>

                {/* <div> */}
                <img src={elipse} style={{ position: "absolute", margin: "70px 0 0 0" }} />
                {/* </div> */}
                {/* <div> */}
                {/* </div> */}



            <div className='servicesItem d-flex ' >
                    {/* <div> */}
                    {/* </div> */}
                    <div className='sideBorder col'><img src={daysReturn} /></div>
                    <div className='sideBorder col'><img src={quality} /></div>
                    <div className='sideBorder col'><img src={safePayment} /></div>
                    <div className='col'><img src={helpline} /></div>
                </div>
            </div>

            <Subscribe/>
            
        </>
    )
}

export default Sales