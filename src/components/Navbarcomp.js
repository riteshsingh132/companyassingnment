import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hamICon from "../assests/hamIcon.png";
import callIcon from "../assests/callIcon.png";
import searchIcon from "../assests/search.png";
import wishIcon from "../assests/wishlistIcon.png";
import profileIcon from "../assests/profileIcon.png";
import cartIcon from "../assests/cartIcon.png";
import "./Navbarcomp.css"

function Navbarcomp() {
    return (
        <>
            <div className='navwrapper'>
                {/* <div> */}
                <div className='topBox bg-dark'>
                    <div className='topBoxText'>
                        <p>Welcome to Our Store Hiscraves</p>
                    </div>
                    <div className='callText d-flex '>
                        <p><img src={callIcon} /></p>
                        <p>Call Us: 1234567890</p>
                    </div>
                {/* </div> */}
                </div>
                <Navbar className="navbox  position-sticky bg-light">
                    <div className='container-fluid d-flex'>
                        <div className='imgIcon'>
                            <img src={hamICon} alt='hamIcon' />
                        </div>
                        <div>
                            <Navbar.Brand className='navbarbrand position-relative' href="#home">Logo Here</Navbar.Brand>
                        </div>
                        <div className='iconWrapper d-flex'>
                            <img className='menuIcon' src={searchIcon} alt='searchicon' />
                            <img className='menuIcon' src={wishIcon} alt='wishIcon' />
                            <img className='menuIcon' src={profileIcon} alt='profile' />
                            <img className='menuIcon' src={cartIcon} alt='profile' />
                        </div>
                    </div>
                </Navbar>
            </div>
        </>
    )
}

export default Navbarcomp