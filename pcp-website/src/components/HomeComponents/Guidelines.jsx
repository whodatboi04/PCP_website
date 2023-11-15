import React, { useRef, useEffect, useState } from 'react';
import Bylaws from '../img/HomeImage/By-laws-image.jpg';
import Research from '../img/HomeImage/research-image.jpg';
import { SlBookOpen } from "react-icons/sl";
import '../css/HomeCss/Guidelines.css';

export default function Guidelines() {
    return (
        <div className='guide-container'>
            <div className='guide-wrapper'>
                <div className='guide-content'>
                    <div className='guide-fade'>
                        <div className='guide-fade-wrapper'>
                            <img src={Bylaws} alt='Amended By-Laws' />
                                <div className='guide-overlay'>
                                    <a className='guide-circle-icon'>
                                        <SlBookOpen className='guide-icon' />
                                    </a>
                                </div>
                            <div className='guide-context'>
                                <h3>2021 Amended By-Laws</h3>
                                <a href='https://drive.google.com/file/d/19Xnu6OIsCuxmD-AVKZiiiQJIoV26ichp/view'>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='guide-fade'>
                        <div className='guide-fade-wrapper'>
                            <img src={Research} alt='Amended By-Laws' />
                            <div className='guide-overlay'>
                                <a className='guide-circle-icon'>
                                    <SlBookOpen className='guide-icon' />
                                </a>
                            </div>
                            <div className='guide-context'>
                                <h3>PCP RESEARCH GUIDELINES</h3>
                                <a href='https://pcp.org.ph/images/Research/Revised-ResComm-Manual-June272020-compressed.pdf'>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
