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
import { Link } from 'react-router-dom';


function Navbar() {

    const navRef = useRef();
    const [navScrolled, setNavbar] = useState(false);

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    const changeNavBackground = () => {
        if(window.scrollY >= 100){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBackground);
        return () => {
            window.removeEventListener('scroll', changeNavBackground);
        };
    }, []);

    
  return (
        <header>
            {/* Navigation Bar */}
            <nav ref={navRef} className={navScrolled ? 'main-nav active' : 'main-nav'}>
                 {/* PCP logo header */}
                <img 
                    src={logoImage}   
                    alt='Philippine College of Physicians' 
                />
                    <ul className={navScrolled ? 'navbar active' : 'navbar'}>
                            <Link 
                                to="/" 
                                className='nav-items'
                            >
                                Home
                            </Link>
                            <Link 
                                to="/AboutPcp" 
                                className='nav-items'
                            >
                                About PCP
                            </Link>
                            <Link 
                                to="/Membership" 
                                className='nav-items'
                            >
                                Membership
                                <FaAngleDown size={10}/>
                            </Link>
                            <Link 
                                to="/Chapters" 
                                className='nav-items'
                            >
                                Chapters
                                <FaAngleDown size={10}/>
                            </Link>
                            <Link 
                                to="/Journals" 
                                className='nav-items'
                            >
                                Journals
                                <FaAngleDown size={10}/>
                            </Link>
                            <Link 
                                to="/Newsletter" 
                                className='nav-items'
                            >
                                Newsletter
                                <FaAngleDown size={10}/>
                            </Link>
                            <Link 
                                to="/HMO" 
                                className='nav-items'
                            >
                                HMO'S
                                <FaAngleDown size={10}/>
                            </Link>
                            <Link 
                                to="/Contact" 
                                className='nav-items'
                            >
                                Contact
                                <FaAngleDown size={10}/>
                            </Link>
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
            onClick={showNavbar}>
                    <FaBars />
            </button>

        </header>
    );
}

export default Navbar;
