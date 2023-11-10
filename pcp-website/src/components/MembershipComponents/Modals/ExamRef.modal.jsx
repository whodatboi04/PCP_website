
import Modal from 'react-bootstrap/Modal';
import '../../css/MembershipCss/ExamRef.modal.css'

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
            className='exam-ref-header'
        >
        </Modal.Header>
        <Modal.Body className='exam-ref-modal-body'>
            <h2>PSBIM Local Guidelines</h2>
            <a href="https://pcp.org.ph/images/PSBIM/2020/guidelines/Diagnosis-Empiric-Management-and-Prevention-of-Community-Acquired-Pneumonia-in-Immunocompetent-Adults-2016-Update_.pdf">
                1. Diagnosis, Empiric Management and Prevention of Community-Acquired Pneumonia in Immunocompetent Adults 2016 Update <br/>
                <br/>
            </a>
            <a href="">
                2. Global Initiative for Asthma – Global Strategy for Asthma Management and Prevention (2020 Update)<br/>
                <br/>
            </a>
            <a href="">
                3. Global Initiative for Chronic Obstructive Lung Disease – Global Strategy for the Diagnosis, Management, and Prevention of Chronic  Obstructive Pulmonary Disease<br/>
                <br/>
            </a>
            <a href="https://pcp.org.ph/images/PSBIM/2020/guidelines/Interim-guidance-clinical-management-of-adult-patients-july2020-1.pdf">
                4.  Interim Guidance on the Clinical Management of Adult Patients with Suspected or Confirmed COVID-19 Infection -Version 3.1 as of   July 20, 2020<br/>
                <br/>
            </a>
            <a href="https://pcp.org.ph/images/PSBIM/2020/guidelines/2014-Clinical-Practice-Guidelines-for-the-Diagnosis-and-Management-of-Patients-with-Coronary-Artery-Disease.pdf">
                5. 2014 PHA Clinical Practice Guidelines for the Diagnosis, and Management of  Coronary Artery Disease<br/>
                <br/>
            </a>
            <a href="https://pcp.org.ph/images/PSBIM/2020/guidelines/2015-CPG-for-the-Management-of-Dyslipidemia-in-the-Phils-Executive-Summary-min.pdf">
                6. 2015 Clinical Practice Guidelines for the Management of Dyslipidemia in the Philippines – Executive Summary<br/>
                <br/>
            </a>
            <a href="">
                7. Clinical Practice Guidelines for the Diagnosis, Treatment, Prevention and Control of Tuberculosis in Adult Filipino - 2016 update<br/>
                <br/>
            </a>
            
        </Modal.Body>
        <Modal.Footer>
        <button 
            onClick={props.onHide}
            className='exam-ref-modal-btn'
        >
            Close
        </button>
        </Modal.Footer>
    </Modal>
  );
}