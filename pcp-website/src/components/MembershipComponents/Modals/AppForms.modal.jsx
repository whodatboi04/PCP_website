
import Modal from 'react-bootstrap/Modal';
import '../../css/MembershipCss/AppForms.modal.css'
import LetterIntentTransfer from '../../img/MembershipImage/Letter_of_Intent_to_Transfer_Chapter_FORM.docx'
import Clearance from '../../img/MembershipImage/ClearanceCertificateTemplate_LocalChapter.docx'
import LetterAcceptance from '../../img/MembershipImage/Letter_of_Acceptance_FORM.docx'
import LetterReactivation from '../../img/MembershipImage/Letter_of_Request_for_Reactivation_of_Membership_Status.docx'
import ReactiveInactive from '../../img/MembershipImage/Template_Letter_for_Reactivation_from_InactiveStatus_of_a_PCP_Member.docx'
import LetterDisability from '../../img/MembershipImage/LetterOfRequest_for_DisabilityBenefitClaim.docx'
import LetterMedAssist from '../../img/MembershipImage/EndorsementLetter_for_MedicalAssistancebyChapterPresident.docx'
import DeathBenefits from '../../img/MembershipImage/LetterOfRequest_for_DeathBenefitClaim.docx'
import DeathBenefitsByChapter from '../../img/MembershipImage/EndorsementLetter_for_MedicalAssistance_as_DeathBenefit_byChapterPresident.docx'

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
            className='app-forms-header'
        >
        </Modal.Header>
        <Modal.Body className='app-forms-modal-body'>
            <h2>Downloadable Forms</h2>
            <p>To download the forms you need, please click on the name of the form with red font.</p>
            <p>1. For <span>Chapter Transfer</span>, the member must do the following:</p>
                <li>
                    Submit a 
                    <a href={LetterIntentTransfer} className='forms-file'> Letter of Intent to Transfer </a>
                    (i.e., addressed to his/her current Chapter President) to the following:
                </li>
            <div className='forms-transfer'>
                <p>
                    I. Local chapter, i.e., where he/she currently belongs to<br/>
                    II. Intended new chapter, i.e., where he/she intends to transfer to<br/>
                    III. PCP National Office (via <a href='mailto:membershipcomsec.pcp@gmail.com' className='via-email'>membershipcomsec.pcp@gmail.com</a>)
                </p>
            </div>
            <li>
                Secure <a href={Clearance} className='forms-file'>Clearance Certificate</a> from local chapter of origin and 
                submit such document to the intended new chapter and to 
                <a href='mailto:membershipcomsec.pcp@gmail.com' className='via-email'> membershipcomsec.pcp@gmail.com</a>;
            </li>
            <li>
                Secure <a href={LetterAcceptance} className='forms-file'>Letter of Acceptance</a> (signed by the Chapter President) 
                from the new chapter and send it to 
                <a href='mailto:membershipcomsec.pcp@gmail.com' className='via-email'> membershipcomsec.pcp@gmail.com</a>.
            </li>
            <p> 2. For the <span>Change of Name</span> in the PCP Membership ID, the member must do the following:</p>
            <li>
                Have the PRC ID changed with the new name prior to requesting a change in name in the PCP Membership ID.
            </li>
            <li>
                Submit a <a href='https://pcp.org.ph/images/Downloads/LetterOfIntent_ForInactiveStatus_ForThoseAbroad.pdf' className='forms-file'>Letter of Request to change name</a> on the PCP Membership ID to the 
                Committee on Credentials & Membership via this email: &nbsp;
                <a href='mailto:membershipcomsec.pcp@gmail.com' className='via-email'>membershipcomsec.pcp@gmail.com</a>.
            </li>
            <li>
                Submit also the copy of the appropriate legal document (i.e., Marriage Certificate OR affidavit of Change of Name).
            </li>
            <p>
                3. For <span>request to have Inactive Status for those who will be going abroad</span> and who will not be 
                able to earn the minimum required PCP CPD credit units per year, the member must do the following:
            </p>
            <li>
                Submit a <a href='https://pcp.org.ph/images/Downloads/LetterOfIntent_ForInactiveStatus_ForThoseAbroad.pdf' className='forms-file'>Letter of Intent to be in Inactive Status</a> to the Committee on 
                Credentials & Membership via this email: &nbsp;
                <a href='mailto:membershipcomsec.pcp@gmail.com' className='via-email'>membershipcomsec.pcp@gmail.com</a>.
            </li>
            <li>
                Pay promptly his/her PCP Annual Dues to avoid being dropped from the rolls of the College.
            </li>
            <p>
                4. For <span>request to have Inactive Status</span> for those who, for some reason, 
                will not be able to earn the minimum required PCP CPD credit units per year, the member must do the following:
            </p>
            <li>
                Submit a <a href='https://pcp.org.ph/images/Downloads/LetterOfIntent_for_Inactive_Status_Template.pdf' className='forms-file'>Letter of Intent to be in Inactive Status</a> to the 
                Committee on Credentials & Membership via this email: &nbsp;
                <a href='mailto:membershipcomsec.pcp@gmail.com' className='via-email'>membershipcomsec.pcp@gmail.com</a>.
            </li>
            <li>
                Pay promptly his/her PCP Annual Dues to avoid being dropped from the rolls of the College.
            </li>
            <p>5. For <span>request to reactivate the membership status</span> of those who have "Inactive Status" in the college, the member may do the following:</p>
            <li>
                Inquire from the PCP National Office for any outstanding arrears to settle the financial obligations.
            </li>
            <li>
                Submit a <a href={LetterReactivation} className='forms-file'>Letter of Request for Reactivation of Membership</a> addressed to the PCP Board of Reqents and send it to the 
                Committee on Credentials & Membership via this email: &nbsp;
                <a href='mailto:membershipcomsec.pcp@gmail.com' className='via-email'>membershipcomsec.pcp@gmail.com</a>.
            </li>
            <p>
                6. To <span>request for reinstatement of membership</span> of those who have been dropped from the 
                rolls of the college (or whose membership has been terminated), the physician must do the following:
            </p>
            <li>
                Inquire from the PCP National Office for any outstanding arrears to settle the financial obligations.
            </li>
            <li>
                Submit a <a href={ReactiveInactive} className='forms-file'>Letter of Request for Reinstatement of Membership</a> addressed to the PCP Board of 
                Reqents and send it to the Committee on Credentials & Membership via this email: &nbsp;
                <a href='mailto:membershipcomsec.pcp@gmail.com' className='via-email'>membershipcomsec.pcp@gmail.com</a>.
            </li>
            <p>7. To <span>request for availment of Disability Benefit</span>, the PCP Diplomate or PCP Fellow must do the following:</p>
            <li>
                Submit a <a href={LetterDisability} className='forms-file'>Letter of Request for financial assistance as Disability Benefit</a> (duly signed by the member) 
                addressed to the President of the local chapter where the claimant is a member of;
            </li>
            <li>Attachments to the letter of request:</li>
            <div className='disablity-benefits'>
                <p>
                    a. Medical Certificate duly signed by the attending physician stating the inclusive date of disability, OR Medical Certificate from the Admitting Hospital where the claimant was confined and
                    diagnosed of the infirmity;
                </p>
                <p>b. Blood examination results, if there are any;</p>
                <p>c. Ancillary diagnostic work-up results, if there are any.</p>
            </div>
            <li>
                An <a href={LetterMedAssist} className='forms-file'>Endorsement Letter of the Chapter President for Disability Benefit</a> to the Chair of the Committee on Credentials & Membership. 
                This letter must be sent to the Committee on Credentials & Membership via this email: &nbsp;
                <a href='mailto:membershipcomsec.pcp@gmail.com' className='via-email'>membershipcomsec.pcp@gmail.com</a>.  
            </li>
            <p>NOTE: The member must be in good standing to avail of the benefit.</p>
            <p>8. To <span>request for availment of Death Benefit</span>, the legal next-of-kin of the PCP Diplomate or PCP Fellow must do the following:</p>
            <li>
                Submit <a href={DeathBenefits} className='forms-file'>Letter of request for financial assistance as Death Benefit</a> (duly signed by the claimant) 
                addressed to the President of the local chapter where the claimant is a member of;
            </li>
            <li>
                Attachments to the Letter of request:
            </li>
            <div className='letter-request'>
                <p>a. Photocopy of the PSA copy of the Death Certificate of the Physician-Member</p>
                <p>
                    b. Proof of relationship to the decedent, i.e., PSA copy of the Marriage Certificate 
                    (if spouse is the claimant); PSA copy of the Birth Certificate (if son/daughter is the claimant); &nbsp;
                    <span className='psa-copy'>
                        PSA copy of the Birth Certificate of  
                        decedent (if parent is the claimant); PSA copy of the Birth Certificates of 
                        the decedent and of the claimant (if sibling is the claimant).
                    </span>
                </p>
                <p>c. Government-issued ID of the claimant</p>
            </div>
            <li>
                An <a href={DeathBenefitsByChapter} className='forms-file'>Endorsement Letter of the Chapter President for Death Benefit</a> to the Chair of the Committee on Credentials & Membership.   
                This letter must be sent to the Committee on Credentials & Membership via this email: &nbsp;
                <a href='mailto:membershipcomsec.pcp@gmail.com' className='via-email'>membershipcomsec.pcp@gmail.com</a>.
            </li>
            <p>NOTE: The member must be in good standing for the claimant to avail of the benefit.</p>
        </Modal.Body>
        <Modal.Footer>
        <button 
            onClick={props.onHide}
            className='app-forms-modal-btn'
        >
            Close
        </button>
        </Modal.Footer>
    </Modal>
  );
}