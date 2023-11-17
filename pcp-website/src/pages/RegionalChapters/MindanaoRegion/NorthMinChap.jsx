import React from 'react'

export default function NorthMinChap({props}) {
  return (
    <div className='chapters-containter'>
      <h1>NORTHERN MINDANAO CHAPTER (1982)</h1>
      <h3>( Bukidnon – Malaybalay / Valencia; Camiguin – Mambajao / Sagay; Misamis Oriental – CDO   / Ginoog; Lanao del Norte – Iligan / Kauswagan; Lanao del Sur Marawi )</h3>
      <div className='chapters-content'>
        <div className='chapters-info'>
          <p><span>Office :</span> Maria Reyna Xavier University Hospital, Hayes Street, Cagayan de Oro City 9000</p>
          <p><span>Secretariat :</span> Ms. Ritchie – mobile no.:  +639364506125</p>
          <p><span>Email :</span>  pcpnorthernmindanaochapter@gmail.com</p>
        </div>
        <div className='chapters-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians-Northern Mindanao Chapter</p>
          <p><span>Bank/Branch : </span> 	BPI, Cagayan de Oro</p>
          <p><span>Account No. : </span> 	2013-0042-45</p>
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
