import React from 'react'
import Location from "./Location"
import "../css/HomeCss/Contact.css"
import {CiMobile2} from "react-icons/ci"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {IoLocationOutline} from "react-icons/io5"

export default function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-wrapper'>
        <h1>Contacts</h1>
        <div className='contact-cotent'>
          <div className='contact-form'>
              <h2> Contact Us</h2>
              <div className='form'>
                <input type='text' name='name' placeholder='Full Name' />
                <input type='email' name='email' placeholder='Email' />
                <input type='text' name='number' placeholder='Contact Number' maxLength={11}  />
                <textarea name='message' placeholder='Message' />
                <input type='submit' name='submit' className='submit-btn' />
              </div>
          </div>
          <div className='contact-info'>
              <div className='contacts'>
                <h3>CONTACT INFORMATION</h3>
                <div className='contact-details'>
                  <div className='contact-items'>
                    <CiMobile2 />
                    <p>+63 (917) 866-4866</p>
                  </div>
                  <div className='contact-items'>
                    <BsFillTelephoneFill />
                    <p>(02) 7910-2253</p>
                  </div>
                  <div className='contact-items'>
                    <AiOutlineMail />
                    <p>secretariat@pcp.org.ph</p>
                  </div>
                </div>
              </div>
              <div className='contact-items'>
                <IoLocationOutline />
                <p>
                  Units 2201-2203, 22nd Floor <br/>
                  One San Miguel Ave.Bldg, <br/>
                  San Miguel Ave.cor.Shaw Blvd. Ortigas Center, Pasig City, PHL
                </p>
              </div>
              <div className='location'>
                <Location />
              </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
