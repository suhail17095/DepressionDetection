import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import logo from "./../Images/logo3.png"
function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-center text-center rounded-bottom"   style={{position:"sticky" ,top:"0",zIndex:"1",backgroundColor:"#1DA0F3"}}>
            <Link className="navbar-brand" href="#"><img className='img-fluid img-responsive' src={logo} alt="" style={{width:"5rem",height:"74px"}}/><h5 style={{display:"inline"}}>DepressionDetection</h5></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active mr-5 active">
                        <Link className="nav-link" to="/"> <i class="fa-solid fa-house fa-2x"></i><h6 className='ml-1' style={{display:"inline"}}>Home</h6><span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link className="nav-link" to="/twitter"><i class="fa-brands fa-twitter fa-2x text-light"></i><h6 className='ml-1 text-light' style={{display:"inline"}}>Twitter</h6></Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link className="nav-link" to="/about"><i class="fa-sharp fa-solid fa-address-card fa-2x text-light"></i><h6 className='ml-1 text-light' style={{display:"inline"}}>About Us</h6></Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link className="nav-link" to="/contact"><i class="fa-solid fa-envelope fa-2x text-light"></i><h6 className='ml-1 text-light' style={{display:"inline"}}>Contact Us</h6></Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar;