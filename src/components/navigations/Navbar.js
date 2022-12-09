import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import './Navbar.scss';

import Dropdown from 'react-bootstrap/Dropdown';
import { HiMenu } from "react-icons/hi";
import { RiAccountCircleLine } from "react-icons/ri";


const NavLink = styled(Link)`
    &.active {
        color: #fff;
        font-weight: bold;
        border-radius: 0 0 10px 10px;
    }

    @media screen and (max-width: 960px) {
        &.active {
            color: #fff;
        }
    }

`;


const Navbar = () => {

    // bg color change on scroll
    const [bgcolor, setBgColor] = useState(false);
    const changeBgColor = () => {
        if (window.scrollY >= 80) {
            setBgColor(true)
        } else {
            setBgColor(false)
        }
    }
    window.addEventListener('scroll', changeBgColor);


    // mobile nav
    const [showmenu, setShowMenu] = useState(false);
    const handleCloseMenu = () => setShowMenu(false);
    const handleShowMenu = () => {
        if (showmenu === true) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }


    return (
        <>

            {/* <nav className="wrap-navbar"> */}
            <nav className={bgcolor ? "wrap-navbar nav-bgcolor" : "wrap-navbar"}>

                {/* <NavMenu > */}


                <div className="navbar-container">
                    
                    <div className="logo-container">
                        <a href='/' className="navbar-logo" target='_parent'>
                            <img src="/cqihan.png" alt="Autopit"/>
                        </a>
                    </div>

                    {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}> */}
                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-links' target='_top'>
                                home
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/#about-me' className='nav-links' target='_top'>
                                about me
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/#working-experience' className='nav-links' target='_top'>
                                working experience
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/#skills' className='nav-links' target='_top'>
                                Contact Us
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/#portfolio' className='nav-links' target='_top'>
                                portfolio
                            </NavLink>
                        </li>
                    </ul>

                    <div className="nav-account">

                        <div className="nav-mob-menu">
                            <div className='mob-menu-item'>
                                <HiMenu className="menu-icon-burger" onClick={handleShowMenu}/>
                            </div>

                        </div>
                    </div>
                   

                </div> {/*  close navbar-container */}
                {/* </NavMenu> */}

            </nav>
        </>

    )

};

export default Navbar;