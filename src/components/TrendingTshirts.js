import React from 'react'
import cartImg1 from "../assests/cartImg1.png"
import cartImg2 from "../assests/cartImg2.png"
import cartImg3 from "../assests/cartImg3.png"
import cartImg4 from "../assests/cartImg4.png"
import cartImg5 from "../assests/cartImg5.png"
import addtoCart from "../assests/addtoCart.png"
import heartIcon from "../assests/heartIcon.png"
import shareIcon from "../assests/shareIcon.png"
import cartImg6 from "../assests/cartImg6.png"
 
// import cartImg5 from "../assests/cartImg5.png"
// import cartImg5 from "../assests/cartImg5.png"
import "./TrendingTshirts.css"
function TrendingTshirts() {
  return (
    <>
      <div className='cartWrapper'>
        <div className='trendingBox'>
          <div className='line'></div>
          <div><h1>Trending T-Shirts</h1></div>
          <div className='line'></div>
        </div>


        <div className='row' style={{ marginBottom: "48.11px" }}>
          {/* 1st product */}

          <div className='col-3'>
            <div className='row'>
              <div className='mergeIcon' style={{ position: "relative", display: "inline-block" }}>
                <img src={cartImg1} alt='cartImg1' style={{ width: "100%", height: "auto" }} />
                <div className='iconwrapper'>
                  <a><img src={addtoCart} /></a>
                  <a><img src={heartIcon} /></a>
                  <a><img src={shareIcon} /></a>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='produtcTitle'>
                <p>Men Henley Neck Full Sleeve Red Wine</p>
              </div>
              <div className='priceWrapper'>
                <div className=''>₹399</div>
                <div className=''>₹1299</div>
              </div>
              <div className=''>
                <div className='sizeWrapper'>
                  <div><p>S</p></div>
                  <div><p>M</p></div>
                  <div><p>L</p></div>
                  <div><p>XL</p></div>
                  <div><p>XXL</p></div>
                </div>
              </div>
            </div>

          </div>

          {/* <div className='col-3'> */}

          {/* </div>/ */}

          {/* 2nd product row */}
          <div className='col-3'>
            <img src={cartImg2} alt='cartImg2' />
            <div className='produtcTitle'>
              <p>Men Henley Neck Full Sleeve Red Wine</p>
            </div>
            <div className='priceWrapper'>
              <div className=''>₹399</div>
              <div className=''>₹1299</div>
            </div>
            <div className=''>
              <div className='sizeWrapper'>
                <div><p>S</p></div>
                <div><p>M</p></div>
                <div><p>L</p></div>
                <div><p>XL</p></div>
                <div><p>XXL</p></div>
              </div>
            </div>
          </div>

          {/* 3rd */}

          <div className='col-3'>
            <img src={cartImg3} alt='cartImg3' />
            <div className='produtcTitle'>
              <p>Men Henley Neck Full Sleeve Red Wine</p>
            </div>
            <div className='priceWrapper'>
              <div className=''>₹399</div>
              <div className=''>₹1299</div>
            </div>
            <div className=''>
              <div className='sizeWrapper'>
                <div><p>S</p></div>
                <div><p>M</p></div>
                <div><p>L</p></div>
                <div><p>XL</p></div>
                <div><p>XXL</p></div>
              </div>
            </div>
          </div>

          {/* 4th */}
          <div className='col-3'>
            <img src={cartImg4} alt='cartImg4' />
            <div className='produtcTitle'>
              <p>Men Henley Neck Full Sleeve Red Wine</p>
            </div>
            <div className='priceWrapper'>
              <div className=''>₹399</div>
              <div className=''>₹1299</div>
            </div>
            <div className=''>
              <div className='sizeWrapper'>
                <div><p>S</p></div>
                <div><p>M</p></div>
                <div><p>L</p></div>
                <div><p>XL</p></div>
                <div><p>XXL</p></div>
              </div>
            </div>
          </div>

        </div>

        {/* 2nd row */}
        <div className='row' style={{ marginBottom: "48.11px" }}>
          {/* 1st product */}
          <div className='col-3'>
            <img src={cartImg5} alt='cartImg5' />
            <div className='produtcTitle'>
              <p>Men Henley Neck Full Sleeve Red Wine</p>
            </div>
            <div className='priceWrapper'>
              <div className=''>₹399</div>
              <div className=''>₹1299</div>
            </div>
            <div className=''>
              <div className='sizeWrapper'>
                <div><p>S</p></div>
                <div><p>M</p></div>
                <div><p>L</p></div>
                <div><p>XL</p></div>
                <div><p>XXL</p></div>
              </div>
            </div>
          </div>

          {/* 2nd product row */}
          <div className='col-3'>
            <img src={cartImg2} alt='cartImg2' />
            <div className='produtcTitle'>
              <p>Men Henley Neck Full Sleeve Red Wine</p>
            </div>
            <div className='priceWrapper'>
              <div className=''>₹399</div>
              <div className=''>₹1299</div>
            </div>
            <div className=''>
              <div className='sizeWrapper'>
                <div><p>S</p></div>
                <div><p>M</p></div>
                <div><p>L</p></div>
                <div><p>XL</p></div>
                <div><p>XXL</p></div>
              </div>
            </div>
          </div>

          {/* 3rd */}

          <div className='col-3'>
            <img src={cartImg3} alt='cartImg3' />
            <div className='produtcTitle'>
              <p>Men Henley Neck Full Sleeve Red Wine</p>
            </div>
            <div className='priceWrapper'>
              <div className=''>₹399</div>
              <div className=''>₹1299</div>
            </div>
            <div className=''>
              <div className='sizeWrapper'>
                <div><p>S</p></div>
                <div><p>M</p></div>
                <div><p>L</p></div>
                <div><p>XL</p></div>
                <div><p>XXL</p></div>
              </div>
            </div>
          </div>

          {/* 4th */}
          <div className='col-3'>
            <img src={cartImg6} alt='cartImg4' />
            <div className='produtcTitle'>
              <p>Men Henley Neck Full Sleeve Red Wine</p>
            </div>
            <div className='priceWrapper'>
              <div className=''>₹399</div>
              <div className=''>₹1299</div>
            </div>
            <div className=''>
              <div className='sizeWrapper'>
                <div><p>S</p></div>
                <div><p>M</p></div>
                <div><p>L</p></div>
                <div><p>XL</p></div>
                <div><p>XXL</p></div>
              </div>
            </div>
          </div>

        </div>

        <div className='borderbtn'>
          <button className='btnbox'>VIEW ALL</button>
        </div>
      </div>

    </>
  )
}

export default TrendingTshirts