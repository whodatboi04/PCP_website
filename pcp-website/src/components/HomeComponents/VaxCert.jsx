import React from 'react'
import Covid19Image from "../img/HomeImage/Covid19-Vax.png"
import CertClaim from "../img/HomeImage/Certificate-claim.png"
import "../css/HomeCss/VaxCert.css"

function VaxCert() {
  return (
    <>
      <div className='vaxcert-container'>
          <div className='vaxcert-wrapper'>
              <div className='card-item vax-card'>
                  <img 
                    src={Covid19Image} 
                    alt='Covid 19 Vaccines'
                  />
                  <h2>
                    COVID-19 VACCINES: GUIDELINES,<br/>
                      ALGORITHMS & POSITION STATEMENTS
                  </h2>
                  <a href='#'>
                    <button>
                      Read More
                    </button>
                  </a>
              </div>
              <div className='card-item cert-card'>
                <img src={CertClaim} alt='Certificate Claim' />
                <h2>Philippine College of Physicians
                    Certificate Claim 
                    Here
                </h2>
                  <a href='https://pcp-certificate.com/'>
                    <button>
                      Click Here
                    </button>
                  </a>
              </div>
          </div>
      </div>
    </>
  )
}

export default VaxCert