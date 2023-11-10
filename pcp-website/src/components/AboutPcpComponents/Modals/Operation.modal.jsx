
import Modal from 'react-bootstrap/Modal';
import "../../css/AboutCss/Operation.modal.css";


export default function OrgGlanceModal(props) {
  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header 
            closeButton 
            className='operation-header'
        >
        
        </Modal.Header>
        <Modal.Body className='operation-modal-body'>
            <h4><span>OPERA</span>TIONS AND <span>HIGHLIGHTS</span> OF <span>ACT</span>IVITIES</h4>
            <p>
            The College operates on a fiscal year basis (June 1st to May 31st of the following year) and is run by a 
            full-time staff of eleven.  The nine members of the Board of Regents are elected each year.  
            There are thirty standing and ad hoc committees that are responsible for the implementation 
            of the goals and objectives of the College.  All members of the Board serve as 
            Regent Coordinator of one or more committees.  The entirety of the organization, 
            its tasks, goals and direction is best described by its Mission and Vision, i.e.:<br/>
            <br/>
            The Philippine College of Physicians is the premier organization in internal medicine in the 
            Philippines, composed of competent and caring internist-physicians that 
            shall lead in giving the country the highest standards in medical diagnosis, treatment, prevention and service through:<br/>
            <br/>
            &nbsp;&nbsp;&nbsp;a. continuing medical education and training of its members and future members;<br/>
            &nbsp;&nbsp;&nbsp;b. a practical environment that promotes ethical, high quality, cost-effective care;<br/>
            &nbsp;&nbsp;&nbsp;c. stimulus, advise and incentives to researchers;<br/>
            &nbsp;&nbsp;&nbsp;d. timely communication and advice to health agencies, government or non-governmental organizations;<br/>
            &nbsp;&nbsp;&nbsp;e. advice and leadership in health matters of importance.<br/>
            <br/>
            Organization's Publications<br/>
            <br/>
            &nbsp;&nbsp;&nbsp;a. Philippine Journal of Internal Medicine.  Frequency: every two months<br/>
            &nbsp;&nbsp;&nbsp;b. The Filipino Internist Newsletter.  Frequency: every four months<br/>
            &nbsp;&nbsp;&nbsp;c. Membership Directory.  Online<br/>
            &nbsp;&nbsp;&nbsp;d. PCP Profile.  Frequency: every year<br/>
            <br/>
            Scientific Activities * (format ranges between update lectures, clinico-pathologic conferences,
            consensus conferences, panel discussions; speakers may be local authorities and/or overseas lecturers)<br/>
            <br/>
            Metro Manila - average of eight (8) meetings<br/>
            All scientific activities are awarded corresponding CME units by the Philippine Medical Association and the PCP.  
            The CME units are in fulfillment of requirements for membership in good standing and renewal of professional license.<br/>
            <br/>
            Annual Convention<br/>
            frequency: once a year in May (3-4 day scientific sessions and college convocation)<br/>
            average attendance: 5,500 delegates<br/>
            <br/>
            Midyear Convention<br/>
            frequency: once a year - between September - November<br/>
            average attendance: 2,000 delegates<br/>
            <b>*Hosted by a PCP chapter on rotation.</b><br/>
            </p>
        </Modal.Body>
        <Modal.Footer>
          <button 
            onClick={props.onHide}
            className='operation-modal-btn'
          >
            Close
          </button>
        </Modal.Footer>
    </Modal>
  );
}