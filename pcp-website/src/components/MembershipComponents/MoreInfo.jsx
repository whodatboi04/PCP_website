import React, {useState} from 'react'
import '../css/MembershipCss/MoreInfo.css'
import updateForm from "../img/MembershipImage/update-form.png"
import { FaLocationArrow } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'
import { AiOutlineRight, AiOutlineRightCircle } from 'react-icons/ai'
import Membership from '../img/MembershipImage/IRR-comtee-member.png'
import AssistanceProg from '../img/MembershipImage/IRR-assistance-prog.png'
import ExamRef from '../MembershipComponents/Modals/ExamRef.modal'
import ModalForms from '../MembershipComponents/Modals/AppForms.modal'


export default function MoreInfo() {
  const [modalShow, setModalShow] = useState(false);
  const [modalForms, setModalForms] = useState(false);

  return (
    <div className='moreInfo-container'>
        <h1>MORE INFORMATION</h1>
        <div className='moreInfo-wrapper'>
            <div className='info-content'>
                <div className='update-wrapper'>
                  <img src={updateForm} alt='Member Information Update Form' />
                  <h2>Member Information Update Form </h2>
                  <a href='#'>Update or add new data <FaLocationArrow className='update-icon'/></a>
                </div>
                <div className='info-payment-form'>
                  <h2>Dues and Fees</h2>
                  <h3><span>Annual Convention Payment Form</span> <FaLocationArrow className='payment-icon'/></h3>
                  <p>* You may need Acrobat Reader to open the files</p>
                  <a href='#'>Download here <BsDownload className='dl-payment-icon'/></a>
                </div>
                <div className='info-application-form'>
                  <h2>Application Forms</h2>
                  <h3>Fellows <FaLocationArrow className='application-icon'/></h3>
                  <div className='diplomate-forms'>
                    <a href='https://pcp.org.ph/images/Membership/EndorsementLetter-for-PCPFellowship.pdf'>
                      <AiOutlineRight/>Sample Template of Endoresment
                    </a>
                    <a href='#'>
                      <AiOutlineRight/>Fellow Application Form
                    </a>
                    <a href='#'>
                      <AiOutlineRight/>Civic & Chapter Activities
                    </a>
                    <h3>Diplomate <FaLocationArrow className='application-icon'/></h3>
                    <a href='https://pcp.org.ph/images/PSBIM/2021/07042020-PSBIM-CODE-OF-PROCEDURES.pdf'>
                      <AiOutlineRight/>PSBIM Code of Procedures
                    </a>
                    <a href='https://pcp.org.ph/index.php/application-form-for-psbim'>
                      <AiOutlineRight/>PSBIM Application Form
                    </a>
                    <button 
                      className='exam-ref'
                      onClick={() => setModalShow(true)}
                    >
                      <AiOutlineRight/>PSBIM Examination References
                    </button>
                    {/* PSBIM Examination References Modal */}
                    <ExamRef 
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    <a href='#'>
                      <AiOutlineRight/>PSBIM Examination Fees 2021
                    </a>
                  </div>
              </div>
              <div className='info-dl-forms'>
                  <h2>Downloadable Forms</h2>
                  <p>To download the forms you need, please click on the name of the form</p>
                  <button 
                    onClick={() => setModalForms(true)}
                  >
                    View here 
                    <AiOutlineRightCircle/>
                  </button>
                  {/* Downloadable Application Forms Modal */}
                  <ModalForms 
                    show={modalForms}
                    onHide={() => setModalForms(false)}
                  />
              </div>
            </div>
            <div className='program-wrapper'>
              <div className='info-membership'>
                <img src={Membership} alt='IRR for the Committee on Credentials and Membership' />
                <a href='#'>Download here <BsDownload /></a>
              </div>
              <div className='info-assistance'>
                <img src={AssistanceProg} alt='IRR for the PCP Assistance Program' />
                <a href='#'>Download here <BsDownload/></a>
              </div>
            </div>
        </div>
    </div>
  )
}
