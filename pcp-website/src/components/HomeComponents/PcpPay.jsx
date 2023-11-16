import React from 'react'
import '../css/HomeCss/PcpPay.css'
import ForumCovid19Banner from "./ForumCovid19"
import { ForumCovidData } from '../../data/HomeData/ForumCovidData';

function PcpPay() {
  return (
    <div className='pcpPay-container'>
        <div className='content-wrapper'>
            <div className='pcpPay-wrapper'> 
                <div className='pcpPay-logo'>
                    <div className='circle'></div>
                    <h1>PCP<span>PAY</span></h1>
                </div>
                <h3>PCP Online Payment System</h3>
                <h2>PCP MEMBER PAY (ANNUAL DUES / PSBIM/ OTHERS)</h2>
                <div className='pcppay-btn'>
                    <a href='https://pay.pcp.org.ph/pcp-member-pay'>
                        <button>
                            Click Here
                        </button>
                    </a>
                </div>
            </div>
            <div className='covid-forum-wrapper'>
                <ForumCovid19Banner ForumCovid={ForumCovidData} />
            </div>
        </div>
    </div>
  );
}

export default PcpPay