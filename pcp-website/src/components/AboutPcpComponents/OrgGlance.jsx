import React from 'react'
import "../css/AboutCss/OrgGlance.css"
import PcpBook from "../img/HomeImage/pcp-book.jpg"
import OrgGlanceModal from './Modals/OrgGlance.modal'

export default function OrgGlance() {
  const [modalShow , setModalShow] = React.useState(false);
  return (
    <div className='org-container'>
        <div className='org-left-wrapper'>
            <div className='org-square'></div>
            <img src={PcpBook} alt='Internal Medicine' />
        </div>
        <div className='org-right-wrapper'>
            <h1>THE <span>ORGANIZATION</span> 
                <br />AT A <span>GLANCE</span>
            </h1>
            <p>
              <i>
                The PCP is the umbrella organization of internists in the <br/>
                Philippines and was organized in 1953. The 3 main <br />
                reasons for its existence are..
              </i>
            </p>
            <button onClick={() => setModalShow(true)}>See More</button>
            {/* Modal */}
            <OrgGlanceModal 
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
        </div>
    </div>
  )
}
