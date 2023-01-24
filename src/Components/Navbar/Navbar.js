import React from 'react'
import '../Mainhader/Mainhader.css'
import Mainlogo from '@mui/icons-material/PetsSharp';
import { NavLink } from 'react-router-dom';
import { GrClose } from 'react-icons/gr'
import { AiOutlineMenu } from 'react-icons/ai'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react';
import { Badge, Button } from '@mui/material';
import { IoLogoSlack } from 'react-icons/io';
function Navbar() {
    let [menubtn, setmenubtn] = useState(false)
    let [Searchbtn, setSearchbtn] = useState(false)
    window.addEventListener('scroll', onscroll)
    function onscroll() {
        document.querySelector('.navbar').classList.toggle('toggle', window.scrollY > 0)
    }
    function btnclick() {
        menubtn ? setmenubtn(false) : setmenubtn(true)
    }
    function searchbtn() {
        Searchbtn ? setSearchbtn(false) : setSearchbtn(true)
    }
    // RxStitchesLogo
    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className="logo">
                        <IoLogoSlack />
                        
                    </div>
                    <div className='searchbox'>
                        {Searchbtn ? <input type="search" id="search" /> : null}
                        <BiSearchAlt onClick={searchbtn} />

                    </div>
                    <div className={menubtn ? "navlinks" : 'closebtn'}>
                        <ul className='ullist'>
                            <li ><NavLink className='listli' to={'/'}>HOME</NavLink></li>
                            <li ><NavLink className='listli' to={'/Shop'}>SHOP</NavLink></li>
                            <li><NavLink className='listli' to={'/Blog'}>BLOG</NavLink></li>
                            <li ><NavLink className='listli' to={'/Pages'}>PAGES</NavLink></li>
                            <li  ><NavLink className='listli' to={'/Contact'}>CONTACT</NavLink></li>

                            <Button variant='contained' id='Login_btn'>Login</Button>
                            <NavLink to={'/Cart'}>
                                <Badge badgeContent={100} color="primary">
                                    <ShoppingCartIcon  color="action" />
                                </Badge>
                            </NavLink>

                        </ul>
                        <GrClose id='closeIcon' onClick={btnclick} />
                    </div>

                    <AiOutlineMenu id='menu' onClick={btnclick} />
                </nav>
            </header>
        </>
    )
}

export default Navbar
