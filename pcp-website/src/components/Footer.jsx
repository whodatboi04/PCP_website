import React from 'react'
import LogoFooter from "../components/img/HomeImage/Logo-header.png"
import {CiMobile3} from "react-icons/ci"
import {BsTelephone} from "react-icons/bs"
import {LiaFacebookF} from "react-icons/lia"
import {AiOutlineTwitter, AiFillInstagram, AiOutlineMail} from "react-icons/ai"
import {ImYoutube2} from "react-icons/im"
import {FaLinkedinIn} from "react-icons/fa"
import "./css/Footer.css"


export default function Footer() {
  return (
    <>
        <footer>
            <div className='footer-wrapper'>
                <img 
                    src={LogoFooter} 
                    alt='Philippine College of Physicians'
                />
                <div className='footer-info'>
                    <h2>Pasig City Philippines</h2>
                    <p><CiMobile3/>+63 (917) 866-4866</p>
                    <p><BsTelephone/>(02) 7910-2253</p>
                    <p><AiOutlineMail/>secretariat@pcp.org.ph</p>
                    <p className='copyright'>
                        Copyright © 2023 
                        <span> Philippine College of Physicians. </span>
                        All rights reserved.
                    </p>
                </div>
                <div className='footer-icons'>
                    <a href="https://www.facebook.com/pcpofficialpage"><LiaFacebookF /></a>
                    <a href='https://twitter.com/pcp1953'><AiOutlineTwitter /></a>
                    <a href='https://www.instagram.com/philippinecollegeofphysicians/?hl=en'><AiFillInstagram /></a>
                    <a href='https://www.youtube.com/@philippinecollegeofphysicians'><ImYoutube2 /></a>
                    <a href='https://www.linkedin.com/company/philippine-college-of-physicians/'><FaLinkedinIn /></a>
                </div>
            </div>
        </footer>
    </>
  )
}
