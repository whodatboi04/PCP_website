import React from 'react'
import { FaFolderOpen } from 'react-icons/fa6'
import '../css/HMOCss/FormsQuestions.css'
import { FaArrowCircleRight } from "react-icons/fa";

export default function FormsQuestions() {
  return (
    <div className='formsQ-container'>
        <div className='formsQ-wrapper'>
            <div className='forms-moa'>
                <h1>FORMS</h1>
                <div className='forms-moa-wrapper'>
                    <a href='https://drive.google.com/drive/folders/1Ds6kIdvAZzYz_TAhA5Uok0GFJt1TDIZK'><FaFolderOpen/> AHMOPI</a>
                    <a href='https://drive.google.com/drive/folders/1hybY3OMilIdiB-WzfbuEoDWHkgxboWqz'><FaFolderOpen/> PAHMOC</a>
                </div>  
            </div>
            <div className='FAQ-wrapper'>
                <h2>Frequently Asked Questions (FAQ)</h2>
                <div className='FAQ-btn'>
                    <button><FaArrowCircleRight /> HOW TO APPLY FOR PCP - AHMOPI AND PAHMOC</button>
                    <button><FaArrowCircleRight /> PROCESS TO SUBMIT A COMPLAINT FORM</button>
                    <button><FaArrowCircleRight /> HOW LONG DOES IT TAKE FOR MY APPLICATION TO BE APPROVED ?</button>
                </div>
                
            </div>
        </div>

    </div>
  )
}
