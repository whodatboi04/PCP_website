
import Modal from 'react-bootstrap/Modal';
import '../../css/MembershipCss/Benefits.modal.css'

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
            className='benefits-header'
        >
            <Modal.Title 
                id="contained-modal-title-vcenter"
                className='benefits-title'
            >
                
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='benefits-modal-body'>
            <h2>Benefits</h2>
            <p>
                <i>
                A bonafide member of the Philippine College of Physicians is automatically entitled to the 
                following benefits offered to each member in good standing with the College :
                </i>
            </p>
            <p>
                <b>
                    PHILIPPINE JOURNAL OF INTERNAL MEDICINE (PJIM)
                </b>
            </p>
            <p>Published online every two months, subscription to this journal is INCLUDED WITH YOUR PAYMENT OF THE ANNUAL MEMBERSHIP FEE.</p>
            <p>
                <b>
                    PCP NEWSLETTER
                </b>
            </p>
            <p>
                Published every quarter, the PCP newsletter contains announcements of future activities and relevant 
                information on developments concerning medical education, accreditation and other services. COMPLIMENTARY TO ALL MEMBERS. 
            </p>
            <p>
                <b>
                    ANNUAL CONVENTION (held every May)
                </b>
            </p>
            <p>
                This  annual  gathering  of  doctors  in  the  field of internal medicine and its clinical 
                subspecialties has an average attendance of 5,500 delegates: REGISTRATION IS INCLUDED IN THE ANNUAL DUES. 
            </p>
            <p>
                <b>
                    MIDYEAR CONVENTION
                </b>
            </p>
            <p>
                Since the college operates on a fiscal year, the midyear convention is usually held  between  September and November of every year and is hosted by a chapter on a rotation basis. 
                This occasion brings together PCP members and doctors nationwide and gives the chapter a chance to 
                play host outside of the national office. Members are also able to make  up of their absence if they missed the annual convention in May :  REDUCED REGISTRATION FEES. 
            </p>
            <p>
                <b>
                    SCIENTIFIC MEETINGS (for Metro Manila members)
                </b>
            </p>
            <p>
                A total of 5-8 scientific meetings/symposia are organized yearly for the benefit of Metro Manila members, 
                which features scientific updates and other controversial topics for continuing medical education: REGISTRATION FEES NOT REQUIRED. 
            </p>
            <p>
                <b>
                    CHAPTER/REGIONAL POSTGRADUATE COURSES
                </b>
            </p>
            <p>
                Chapter/provincial members are likewise given the opportunity to keep abreast of 
                medical developments through postgraduate courses organized by PCP chapters: REDUCED REGISTRATION FEES. 
            </p>
            <p>
                <b>
                    PCP MATCHING PROGRAMS/PLACEMENTS FOR RESIDENTS/TRAINEES/AFFILIATE MEMBERS 
                </b>
            </p>
            <p>
                Through close coordination with PCP-accredited training institutions nationwide, the Accreditation  
                Committee can facilitate the placements of resident-trainees in training institutions best suited to their needs. 
                It can likewise assist training institutions with vacancies for lateral entries and graduates in need of fellowship training positions. 
            </p>
            <p>
                <b>
                    PCP ASSISTANCE PROGRAM
                </b>
            </p>
            <p>
                Through available resources, it provides financial assistance to chapters in times of calamity.  
                The other assistance extended by the College for PCP Fellows is the Death and Disability Benefit Plan (DDBP) which took effect in June, 1993.
            </p>
            <p>
                <b>
                    PCP EXTERNAL RELATIONS COMMITTEE
                </b>
            </p>
            <p>
                The College realizes the urgent need to have proper representation in the Senate/House of Representatives and other governmental agencies in matters affecting the profession of medicine. 
                This Committee seeks to ensure an awareness of legislation and other public policies specifically in areas concerning internal medicine and the medical profession.
                The College has also taken part in the ongoing drive for preventive health care in the community through medical lectures held in collaboration with other non-medical organizations.       
            </p>
            <p>
                <b>
                    PCP PASA Clinic
                </b>
            </p>
            <p>
                The College is offering the PCP-PASA Clinic (Physicians Assistance to Start-up A Clinic).  
                Every year five qualified PCP members may avail of a P50,000.00 grant to start up their own clinic.  
                Requirements for application may be obtained from the Secretariat.
            </p>
        </Modal.Body>
        <Modal.Footer>
        <button 
            onClick={props.onHide}
            className='benefits-modal-btn'
        >
            Close
        </button>
        </Modal.Footer>
    </Modal>
  );
}