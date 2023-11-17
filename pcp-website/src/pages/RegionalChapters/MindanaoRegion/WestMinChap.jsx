import React from 'react'

export default function WestMinChap({props}) {
  return (
    <div className='chapters-containter'>
      <h1>WESTERN MINDANAO CHAPTER (2001)</h1>
      <h3>( Basilan – Isabela de Basilan / Lamitan / Ipil; Tawi-tawi – Bongao; Sulu – Jolo / Patikul / Talipao )</h3>
      <div className='chapters-content'>
        <div className='chapters-info'>
          <p><span>Office :</span> ZCMS Building, Sta. Maria, Zamboanga City 7000</p>
          <p><span>Secretariat :</span>  Ms. Kathrina Mae D. Umbong / Mobile no.:  +639558133077</p>
          <p><span>Email :</span> pcpwesternmindanaochapter@gmail.com</p>
        </div>
        <div className='chapters-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians Western Mindanao Chapter Inc.</p>
          <p><span>Bank/Branch : </span> 	PNB</p>
          <p><span>Savings Account No. : </span> 	4165 1001 8158</p>
          <p><span>Current  Account No. : </span> 4165 7000 2935</p>
        </div>
        {props.map((officers) => (
          <div className='chapters-officers' key={officers.id}>
            <div className='chapters-main-table'>
              <h4>OFFICERS</h4>
              <table className='chapters-officer-table'>
                <tr>
                  <th>President : </th>
                  <td>{officers.president}</td>
                </tr>
                <tr>
                  <th>Vice President : </th>
                  <td>{officers.vicePresident}</td>
                </tr>
                <tr>
                  <th>Secretary : </th>
                  <td>{officers.secretary}</td>
                </tr>
                <tr>
                  <th>Treasurer : </th>
                  <td>{officers.treasurer}</td>
                </tr>
                <tr>
                  <th>Board of Trustees : </th>
                  <div className='chapters-board'>
                    <td>{officers.boardTrustees}</td>
                    <td>{officers.boardTrustees1}</td>
                    <td>{officers.boardTrustees2}</td>
                    <td>{officers.boardTrustees3}</td>
                    <td>{officers.boardTrustees4}</td>
                    <td>{officers.boardTrustees5}</td>
                    <td>{officers.boardTrustees6}</td>
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
