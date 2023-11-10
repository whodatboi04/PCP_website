import React, { useState } from 'react';
import '../css/MembershipCss/Membership.css';
import { AiOutlineDown } from 'react-icons/ai';
import MemberModal from '../MembershipComponents/Modals/Member.modal';
import FellowModal from '../MembershipComponents/Modals/Fellows.modal';
import DiplomateModal from '../MembershipComponents/Modals/Diplomate.modal';
import BenefitsModal from '../MembershipComponents/Modals/Benefits.modal';
import HBM from '../MembershipComponents/Modals/HowToMember.modal';

export default function Membership() {
  const [showMemberModal, setMemberModalShow] = useState(false);
  const [showFellowModal, setFellowModalShow] = useState(false);
  const [showDiploModal, setDiploModalShow] = useState(false);
  const [showBenefitsModal, setBenefitsModalShow] = useState(false);
  const [showHBMModal, setHBMModalShow] = useState(false);

  return (
    <div className="member-container">
      <div className="member-wrapper">
        <h1>MEMBERSHIP</h1>
        <button
          className="member-btn memBtn"
          onClick={() => setMemberModalShow(true)}
        >
            Member
          <AiOutlineDown className="member-drop-icon" />
        </button>
        {/* Member Button Modal */}
        <MemberModal
          show={showMemberModal}
          onHide={() => setMemberModalShow(false)}
        />
        <button
          className="memBtn"
          onClick={() => setFellowModalShow(true)}
        >
          Fellows
          <AiOutlineDown className="member-drop-icon" />
        </button>
        {/* Fellows Button Modal */}
        <FellowModal
          show={showFellowModal}
          onHide={() => setFellowModalShow(false)}
        />
        <button 
          className="memBtn"
          onClick={() => setDiploModalShow(true)}
        >
          Diplomate 
          <AiOutlineDown className="member-drop-icon" />
        </button>
        {/* Diplomate Button Modal */}
        <DiplomateModal 
          show={showDiploModal}
          onHide={() => setDiploModalShow(false)}
        />
        <button 
          className="memBtn" 
          onClick={() => setBenefitsModalShow(true)}
        >
          Benefits 
          <AiOutlineDown className="member-drop-icon" />
        </button>
        {/* Benefits Button Modal */}
        <BenefitsModal 
          show={showBenefitsModal}
          onHide={() => setBenefitsModalShow(false)}
        />
        <button 
          className="memBtn" 
          onClick={() => setHBMModalShow(true)}
        >
          How to Become a Member 
          <AiOutlineDown className="member-drop-icon" />
        </button>
        {/* How to Become a Member Button Modal */}
        <HBM 
          show={showHBMModal}
          onHide={() => setHBMModalShow(false)}
        />
      </div>
    </div>
  );
}
