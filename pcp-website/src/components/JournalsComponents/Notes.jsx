import React from 'react'
import '../css/JournalsCss/Notes.css'
import { FaLocationArrow } from "react-icons/fa6";

export default function Notes() {
  return (
    <div className='notes-container'>
        <div className='notes-bg'>
            <div className='notes-card-items-bg'>
                <div className='notes-card-items'>
                    <div className='notes-items-header'>
                        <h2>NOTES</h2>
                        <div className='notes-circles'>
                            <div className='n-circles1'></div>
                            <div className='n-circles2'></div>
                            <div className='n-circles3'></div>
                        </div>
                    </div>
                    <div className='n-line'></div>
                    <div className='notes-contents'>
                        <div className='notes-content-wrapper'>
                            <a href='https://pcp.org.ph/images/PJIM/Instructions_to_Authors_-_Updated_02262018.pdf'><FaLocationArrow size={15} />Instruction to Authors</a>
                            <a href='https://www.icmje.org/recommendations/'>
                            <FaLocationArrow size={15} />Recommendations for the Conduct,
                                Reporting, Editing, <br/> and Publication of 
                                Scholarly Work in Medical Journals
                            </a>
                            <a href='https://pcp.org.ph/files/Abstract/10282014_INSTRUCTIONS_FOR_SUBMITTING_AN_ABSTRACT_2014-2015.pdf'><FaLocationArrow size={15} />Instructions for Submitting an Abstract</a>
                            <a href='https://pcp.org.ph/files/Abstract/10282014_Structured_Abstracts_2014-2015.pdf'><FaLocationArrow size={15} />Structured Abstracts</a>
                        </div> 
                    </div>
                </div>
                <div className='notes-card-items notes-right'>
                    <div className='notes-items-header'>
                        <h2>DISCLAIMER</h2>
                        <div className='notes-circles'>
                            <div className='n-circles1'></div>
                            <div className='n-circles2'></div>
                            <div className='n-circles3'></div>
                        </div>
                    </div>
                    <div className='n-line'></div>
                    <div className='notes-content-wrapper'>
                        <div className='notes-contents'>
                            <p>
                                The Philippine Journal of Internal Medicine (PJIM) is a copyrighted publication of the Philippine College of Physicians (PCP). PCP is the publisher and the owner of the 
                                copyright of all the articles published in the PJIM. Anyone using the PJIM Online Journal may browse, search, retrieve and view any article, and may store or print single copies of individual articles, 
                                solely for the user's own use. If any published article is used for reference, proper citation should be made. For information about requesting permission to reuse content from PJIM, 
                                send an email to <a href='mailto:philjournalofinternalmedicine@gmail.com' className='notes-mail'>philjournalofinternalmedicine@gmail.com.</a>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
  )
}
