import React from 'react'

export default function CapizAklanChap({props}) {
  return (
    <div className='bohol-containter'>
      <h1>CAPIZ-AKLAN CHAPTER (2009)</h1>
      <h3>(Aklan – Kalibo / Banga;  Capiz – Roxas City / Puntaverde / Panay / Tapaz )</h3>
      <div className='bohol-content'>
        <div className='bohol-info'>
          <p><span>PCP Office Capiz:</span> C/O   THE HEALTH CENTRUM HOSPITAL, TEODORICA AVENUE, BANICA, ROXAS CITY  5800</p>
          <p><span>Secretariat :</span> MRS. ROBEL RUEDA –0975-9970411</p>
        </div>
        <div className='bohol-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> PHILIPPINE COLLEGE OF PHYSICIANS   </p>
          <p><span>Bank/Branch : </span> BPI ROXAS PLARIDEL, ROXAS CITY</p>
          <p><span>Checking Account : </span> 1103-402138</p>
          <p><span>Savings Account : </span> 001103379055PHIL.</p>
        </div>
        <hr/>
        <div className='bohol-info'>
          <p><span>Office CAPIZ:</span> C/O PANAY HEALTH CARE MPC HOSPITAL, BGY. ESTANCIA, KALIBO, AKLAN</p>
          <p><span>Secretariat :</span> MS. ROBEL RUEDA –0975-9970411</p>
          <p><span>Email:</span> ruedasrobel@gmail.com</p>
        </div>
        <div className='bohol-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> PHILIPPINE  COLLEGE  OF PHYSICIANS  CAPIZ-AKLAN  CHAPTER  INC.</p>
          <p><span>Bank/Branch : </span> BDO KALIBO</p>
          <p><span>Checking Account : </span> 005580178612</p>
        </div>
        {props.map((officers) => (
          <div className='bohol-officers' key={officers.id}>
            <div className='bohol-main-table'>
              <h4>OFFICERS</h4>
              <table className='bohol-officer-table'>
                <tr>
                  <th>President : </th>
                  <td>{officers.president}</td>
                </tr>
                <tr>
                  <th>Vice President-Capiz : </th>
                  <td>{officers.vicePresidentCapiz}</td>
                </tr>
                <tr>
                  <th>Vice President-Aklan : </th>
                  <td>{officers.vicePresidentAklan}</td>
                </tr>
                <tr>
                  <th>Secretary : </th>
                  <td>{officers.secretary}</td>
                </tr>
                <tr>
                  <th>Asst. Secretary : </th>
                  <td>{officers.Asstsecretary}</td>
                </tr>
                <tr>
                  <th>Treasurer : </th>
                  <td>{officers.treasurer}</td>
                </tr>
                <tr>
                  <th>Asst. Treasurer : </th>
                  <td>{officers.Assttreasurer}</td>
                </tr>
                <tr>
                  <th>Board of Trustees : </th>
                  <div className='bohol-board'>
                    <td>{officers.boardTrustees}</td>
                    <td>{officers.boardTrustees1}</td>
                    <td>{officers.boardTrustees2}</td>
                  </div>
                </tr>
                <tr>
                  <th>Immediate Past President :</th>
                  <td>{officers.pastPresident}</td>
                </tr>
              </table>
            </div>
          </div>
        ))}  
      </div>
    </div>
  )
}
