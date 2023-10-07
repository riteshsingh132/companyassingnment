import React from 'react'
import menImage from "../assests/mensTshirts.png"
import womenswear from "../assests/womenswear.png"
import winterImg from "../assests/winterCollection.png"
import hoodie from "../assests/hoodie.png"
import poloImg from "../assests/polo.png"
import fullSleeve from "../assests/fullSleeve.png"
import baggy from "../assests/baggy.png"
import winter from "../assests/winter.png"
import womesoffer from "../assests/womensoffer.png"
import bestdeal from "../assests/bestdeal.png"
import trendy from "../assests/trendy.png"


import "./CategoryComp.css"
function CategoryComp() {
    return (
        <div className='catcontainer'>
            <div className='row '>
                <div className='categoryBox'>
                    {/* //1 */}
                    <div className='categorySection'>
                        <div className='catImg'>
                            <img src={menImage} alt='menImg' />
                        </div>
                        <div className='catHeader'>
                            <p>Men's T-Shirts</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='categorySection'>
                        <div className='catImg'>
                            <img src={womenswear} alt='womenswear' />
                        </div>
                        <div className='catHeader'>
                            <p>Women’s Wear</p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='categorySection'>
                        <div className='catImg'>
                            <img src={winterImg} alt='winterImg' />
                        </div>
                        <div className='catHeader'>
                            <p>Winter Collections</p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className='categorySection'>
                        <div className='catImg'>
                            < img src={hoodie} alt='hoodie' />
                        </div>
                        <div className='catHeader'>
                            <p>Hooded T-Shirts</p>
                        </div>
                    </div>
                    {/* 5 */}
                    <div className='categorySection'>
                        <div className='catImg'>
                            <img src={poloImg} alt='poloImg' />
                        </div>
                        <div className='catHeader'>
                            <p>Polo Neck T-Shirts</p>
                        </div>
                    </div>
                    {/* 6 */}
                    <div className='categorySection'>
                        <div className='catImg'>
                            <img src={fullSleeve} alt='fullsleeve' />
                        </div>
                        <div className='catHeader'>
                            <p>Full Sleeves T-Shirts</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* othersection */}
            <div className='offerBoxwrapper'>

                {/* <div className='row'> */}
                <div className='offerBoxFirst'>
                    <div>
                        <img src={baggy} alt='baggy' />
                    </div>
                    <div>
                        <img src={winter} alt='winter' />
                    </div>
                </div>
                {/* </div> */}
                {/* <div className='offerboxSecondSrapper'> */}
                <div className='offerBoxSecond'>
                    <div>
                        < img src={womesoffer} loading='lazy' alt='womensoffer' />
                    </div>
                    <div>
                        <img src={trendy} alt='trendy' />
                    </div>
                    <div>
                        <img src={bestdeal} alt='bestdeal' />
                    </div>

                </div>
                {/* </div> */}

            </div>
        </div>
    )
}

export default CategoryComp