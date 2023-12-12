import React, { useRef, useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaUserAlt, FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import logoImage from './img/HomeImage/Logo-header.png';
import { NavLink, useLocation } from 'react-router-dom';
import "./css/Navbar.css";
import ChaptersDropItems from '../pages/RegionalChapters/ChaptersDropItems';



function Navbar() {

    const navRef = useRef();
    const [navScrolled, setNavbar] = useState(false);
    const { pathname } = useLocation();
    const [logoMobile, setLogoMobile] = useState(false);
    const [dropdown, setDropdow] = useState(false);

    //If Webpage is less than 1331 width function
    const isMobile = () => window.innerWidth < 1330;
    
    //Show the Burger Navbar menu
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    // Logo for Mobile 
    const showMobileLogo = () => {
        setLogoMobile(isMobile());
    };

    // To Show logo if responsive was executed
    useEffect(() => {
        showMobileLogo(); // Check on initial load
        window.addEventListener('resize', showMobileLogo);
        
        return () => {
            window.removeEventListener('resize', showMobileLogo);
        };
    }, []);
    
    //If window scrolled navbar will be fixed 
    const changeNavBackground = () => {

        if(isMobile()){
            setNavbar(false);
        } else{
            if(window.scrollY >= 100){
                setNavbar(true);
            } else{
                setNavbar(false);
            }
        } 

    };
    
    useEffect(() => {
        window.addEventListener('scroll', changeNavBackground);
        return () => {
            window.removeEventListener('scroll', changeNavBackground);
        };
    }, []);


    //If Navbar was clicked it will go to top instant
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "instant"});
    }, [pathname]);

    //Set Dropdown 
    const onMouseEnter = () => {
        if(isMobile()){
            setDropdow(false);
        }else{
            setDropdow(true);
        }
    };

    const onMouseLeave = () => {
        setDropdow(false);
    }
    
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
                <NavLink
                    to="/"
                    onClick={showNavbar}
                >
                    <img 
                        src={logoImage}   
                        alt='Philippine College of Physicians' 
                    />
                </NavLink>
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
                    </NavLink>
                    <NavLink 
                        to="/Chapters" 
                        className='nav-items'
                        onClick={showNavbar}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        Chapters
                    </NavLink>
                    {dropdown && <ChaptersDropItems/>}
                    <NavLink 
                        to="/Journals" 
                        className='nav-items'
                        onClick={showNavbar}
                    >
                        Journals
                    </NavLink>
                    <NavLink 
                        to="/Newsletter" 
                        className='nav-items'
                        onClick={showNavbar}
                    >
                        Newsletter
                    </NavLink>
                    <NavLink 
                        to="/HMO" 
                        className='nav-items'
                        onClick={showNavbar}
                    >
                        HMO'S
                    </NavLink>
                    <NavLink 
                        to="/Contacts" 
                        className='nav-items'
                        onClick={showNavbar}
                    >
                        Contact
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
                <button 
                    className='nav-btn exit-menu' 
                    onClick={showNavbar}
                >
                    <FaTimes size={20}/>
                </button>
            </nav>
            {/* Menu Button */}
            <button 
                className='nav-btn menu-button' 
                onClick={showNavbar}
            >
                <FaBars size={23} />
            </button>
        </header>
    );
}

export default Navbar;
