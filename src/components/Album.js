import React from 'react';
import group50 from "../assests/Group50.jpg"
import group51 from "../assests/Group51.jpg"
import group52 from "../assests/Group52.jpg";
import group53 from "../assests/Group53.jpg";
import group54 from "../assests/Group54.jpg";
import group55 from "../assests/Group55.jpg";
import "./Album.css"

function Album() {
    return (
        <div>

            <div className='albumWrapper'>
                <div className='firstRow gap-10'>
                    {/* <div > */}
                    <div className='parentCard' ><img src={group50} alt='group50'/>
                        <div className='childCard'>
                            <p>Streetwear Collections</p>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className='parentCard' ><img src={group51}  alt='group51'/>
                        <div className='childCard'>
                            <p>Striped T-Shirts</p>
                        </div>
                    </div>

                    <div className='parentCard' ><img src={group52}  alt='group52'/>
                        <div className='childCard'>
                            <p>Round Neck T-Shirts</p>
                        </div>
                    </div>

                </div>

                <div className='firstRow'>
                    <div className='parentCard' ><img src={group53} alt='group54' />
                        <div className='childCard'>
                            <p>Printed T-Shirts</p>
                        </div>
                    </div>
                    <div className='parentCard' ><img src={group54}  alt='group54'/>
                        <div className='childCard'>
                            <p>Oversized T-Shirts</p>
                        </div>
                    </div>

                    <div className='parentCard' ><img src={group55} alt='group54' />
                        <div className='childCard'>
                            <p>Half Sleeves T-Shirts</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Album