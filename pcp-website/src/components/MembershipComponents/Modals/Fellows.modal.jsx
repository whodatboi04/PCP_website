
import Modal from 'react-bootstrap/Modal';
import '../../css/MembershipCss/Fellow.modal.css'

export default function MemberModal(props) {
  return (
    <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header 
            closeButton 
            className='fellow-header'
        >
            <Modal.Title 
                id="contained-modal-title-vcenter"
                className='fellow-title'
            >
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='fellow-modal-body'>
            <h2>Fellows</h2>
            <p>Candidates for membership as Fellows must fulfill  the following requirements :</p>
            <p>1. He must comply satisfactorily with all the requirements for membership in good standing (as a Diplomate of the College); </p>
            <p>2. He must be qualified as a Diplomate in Internal Medicine and certified accordingly by the Philippine Specialty Board of Internal Medicine (PSBIM);</p>
            <p>3. Compliance with the minimum required number of PCP-CME credit units per year (currently set at 250 PCP-CME units);</p>
            <p>4. Prompt payment of annual membership dues and other financial obligations;</p>
            <p>5. Attendance in 2 consecutive annual and 1 midyear convention/s and business meetings of the College within the 2 year prescription period prior to induction as Fellow; </p>
            <p>
                6. Certification of favorable endorsement of the application for Fellowship by 2 PCP Fellows in good standing.  The Chief of Section of the Subspecialty and/or the 
                Chairman of the Department of Medicine and/or the PCP Chapter President (if belonging to a PCP Chapter) may serve as endorsers of the application; 
            </p>
            <p>7. Completion and/or submission of certification for any of the following requirements:</p>
            <p>Training, Teaching, Research and/or Practice requirements (accomplished during the 2 year prescription period following certification as Diplomate) : </p>
            <p> 7.1 Subspecialty Fellowship Training certificate of completion of subspecialty training to be issued by the Subspecialty Section/Department of </p>
            <p> 
                7.2 Active Participation in Practice certification from the medical director of the PCP-accredited hospital where the Diplomate is affiliated with.  
                If in the province, a certification by the PCP Chapter Secretary/President attesting to this requirement.
            </p>
            <p> 7.3 Active Participation in Teaching certification from the Chairman of the Department of Medicine of the PCP- accredited hospital;</p>
            <p>  7.4 Active Participation in Research certification from the Department of Medicine and/or the Chief of Subspecialty Section if the Diplomate is involved in a Research Fellowship or Program. </p>
            <p>
            The privileges of a Fellow in good standing include the authority to use the letters FPCP (Fellow of the Philippine College of Physicians) in connection 
            with scientific publications, professional and academic functions and professional activities; the right to vote and be voted upon; to hold office; 
            propose and endorse candidates for membership and Fellowship and all other entitlements and benefits that come with Fellowship in the PCP. 
            </p>
            <p><i>Fellows are classified according to Regular Fellows, Life Members, Life Fellows, Fellow Emeritus and Honorary Fellow.</i></p>
            <p>
                <b>Life Membership</b> may be obtained by any Fellow in good standing for at least 5 consecutive years by applying and paying a prescribed fee.  In return, 
                the applicant shall receive a certificate attesting to such status and shall thereafter be exempted from payment of annual membership dues.  
            </p>
            <p>
                <b>Life Fellows</b> refer to Past Presidents of the College, members of the Philippine Specialty Board of Internal Medicine and/or 
                Full Professors of medicine in colleges or schools of medicine duly accredited by the PCP.  A Life Fellow is exempted from paying annual membership dues. 
            </p>
            <p>
                <b>Fellow Emeritus</b> refer to Fellows in good standing for at least ten (10) consecutive years who are automatically elevated to this category upon attaining the age of 70.  
                He is exempted from all membership dues, convention fees and other requirements for active membership but may enjoy all the privileges of a Fellow. 
            </p>
            <p>
                <b>Honorary Fellows</b>. A member of the medical profession who is generally recognized as occupying a position of honor or eminence in the practice of Internal  Medicine or  any  of  its   
                subspecialties  or  in medical research may be conferred an Honorary Fellowship in the College upon the recommendation of the PSBIM, duly approved by the Board of Regents.  
                Honorary Fellows shall have all the privileges of a Fellow but may not vote or hold office and shall have no financial obligations to the College.  
            </p>
            <h3>REQUIREMENTS FOR MEMBERSHIP IN GOOD STANDING (FELLOWS) </h3>
            <p>1. Payment of annual dues and other financial obligations; </p>
            <p>2. Fulfillment of the annual minimum required PCP-CME credit units, currently set at 250 PCP-CME credit units; </p>
            <p>3. Attendance in annual or midyear convention and business meetings.</p>
        </Modal.Body>
        <Modal.Footer>
        <button 
            onClick={props.onHide}
            className='fellow-modal-btn'
        >
            Close
        </button>
        </Modal.Footer>
    </Modal>
  );
}