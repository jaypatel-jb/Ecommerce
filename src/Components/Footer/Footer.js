import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
    return (
        <>
            <footer>
                <div className='footercontent'>
                    <div className='Know_us'>
                        <h2>Get to know Us</h2>
                        <div className='links'>

                            <Link>About us</Link>
                            <Link>Careers</Link>
                            <Link>Press Releases</Link>
                        </div>

                    </div>
                    <div className="Connect_us">
                        <h2>Connect With us </h2>
                        <span>
                            <div className='socialmedia'>

                                <Link id='facebook'><Facebook style={{ fontSize: "20px" }} /></Link>
                                <Link id='twitter'><Twitter style={{ fontSize: "20px" }}/></Link>
                                <Link id='instagram'><Instagram style={{ fontSize: "20px" }} /></Link>
                            </div>

                        </span>
                    </div>
                    <div className="make_Money">
                        <h2>Make Money With Us</h2>
                        <div className='links'>
                            <Link>Sell on Website</Link>
                            <Link>Protect and Build Your Brand</Link>
                            <Link>Global Selling</Link>
                            <Link>Become an Affliate</Link>
                            <Link>Advertise Your Products</Link>
                        </div>
                    </div>
                    <div className="Help">
                        <h2>Let Us Help You</h2>
                        <div className='links'>

                            <Link>Your Account</Link>
                            <Link>Returns Center</Link>
                            <Link>Our App</Link>
                            <Link>Help</Link>
                        </div>
                    </div>
                </div>
                {/* <hr id='brtag' /> */}
                {/* <div className="logo_Lenguage">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi iure quae nihil?</p>
                </div> */}

            </footer>
        </>
    )
}

export default Footer
