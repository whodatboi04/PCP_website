import React, {useRef,useEffect, useState} from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';
import logoImage from './img/HomeImage/Logo-header.png';
import {FaTimes} from 'react-icons/fa';
import {FaAngleDown} from 'react-icons/fa';
import "./css/Navbar.css";
import { NavLink, useLocation } from 'react-router-dom';


function Navbar() {

    const navRef = useRef();
    const [navScrolled, setNavbar] = useState(false);
    const { pathname } = useLocation();
    const [logoMobile, setLogoMobile] = useState(false);

    const isMobile = () => window.innerWidth <= 1331;
    
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    const showMobileLogo = () => {
        setLogoMobile(isMobile());
    };
    
    //To Show logo if reponsive was executed
    window.addEventListener('resize', showMobileLogo);
    
    const changeNavBackground = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1330) {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    } else {
        // If the window width is below 1330px, ensure navScrolled is false
        setNavbar(false);
    }
};

    useEffect(() => {
        window.addEventListener('scroll', changeNavBackground);
        return () => {
            window.removeEventListener('scroll', changeNavBackground);
        };
    }, []);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "instant"});
    }, [pathname]);
    
  return (
        <header>
            {/* Navigation Bar */}
            {logoMobile && (
                <img
                    src={logoImage}
                    alt="Philippine College of Physicians"
                    className="logo-mobile"
                />
            )}
            <nav ref={navRef} className={navScrolled ? 'main-nav act' : 'main-nav'}>
                 {/* PCP logo header */}
                <img 
                    src={logoImage}   
                    alt='Philippine College of Physicians' 
                />
                    <ul className={navScrolled ? 'navbar act' : 'navbar'}>
                            <NavLink 
                                to="/" 
                                className='nav-items'
                                onClick={showNavbar}
                            >
                                Home
                            </NavLink>
                            <NavLink 
                                to="/AboutPcp" 
                                className='nav-items'
                                onClick={showNavbar}
                            >
                                About PCP
                            </NavLink>
                            <NavLink 
                                to="/Membership" 
                                className='nav-items'
                                onClick={showNavbar}
                            >
                                Membership
                                <FaAngleDown size={10}/>
                            </NavLink>
                            <NavLink 
                                to="/Chapters" 
                                className='nav-items'
                            >
                                Chapters
                                <FaAngleDown size={10}/>
                            </NavLink>
                            <NavLink 
                                to="/Journals" 
                                className='nav-items'
                                onClick={showNavbar}
                            >
                                Journals
                                <FaAngleDown size={10}/>
                            </NavLink>
                            <NavLink 
                                to="/Newsletter" 
                                className='nav-items'
                                onClick={showNavbar}
                            >
                                Newsletter
                                <FaAngleDown size={10}/>
                            </NavLink>
                            <NavLink 
                                to="/HMO" 
                                className='nav-items'
                                onClick={showNavbar}
                            >
                                HMO'S
                                <FaAngleDown size={10}/>
                            </NavLink>
                            <NavLink 
                                to="/Contacts" 
                                className='nav-items'
                                onClick={showNavbar}
                            >
                                Contact
                                <FaAngleDown size={10}/>
                            </NavLink>
                            <a 
                                href='https://pcponlinestore2023.company.site/' 
                                className='nav-items'
                            >Online Store</a>
                            <a 
                                href='https://www.facebook.com/pcpofficialpage' 
                                className='icons'>
                                    <FaFacebookF/>
                            </a>
                            <a 
                                href='https://twitter.com/pcp1953' 
                                className='icons'>
                                    <FaTwitter/>
                            </a>
                            <a 
                                href='https://www.linkedin.com/company/philippine-college-of-physicians' 
                                className='icons'>
                                    <FaLinkedinIn/>
                            </a>
                            {/* User Account Login icon */}
                            <a 
                                href='#' 
                                className='icons'>
                                    <FaUserAlt/>
                            </a>
                    </ul>
                    {/* Exit Button */}
                    <button 
                    className='nav-btn exit-menu' 
                    onClick={showNavbar}>
                            <FaTimes />
                    </button>
            </nav>

            {/* Menu Button */}
            <button 
            className='nav-btn menu-button' 
            onClick={showNavbar}
            >
                    <FaBars />
            </button>

        </header>
    );
}

export default Navbar;
