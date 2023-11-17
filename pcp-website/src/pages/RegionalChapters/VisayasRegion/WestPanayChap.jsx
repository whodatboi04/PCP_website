import React from 'react'

export default function WestPanayChap({props}) {
  return (
    <div className='chapters-containter'>
      <h1>Western Visayas-Panay Chapter (1994)</h1>
      <h3>( Antique – San Jose / Tibiao; Guimaras – Jordan; Iloilo – Iloilo / Alimodian )</h3>
      <div className='chapters-content'>
        <div className='chapters-info'>
          <p><span>Office :</span>  Iloilo Medical Society Building, E. Lopez St., La Paz, Iloilo City </p>
          <p><span>Secretariat :</span> Ms. Elizabeth Lucas | Contact no: 09297423398</p>
          <p><span>Email :</span>  pcpwesternvisayaschap@gmail.com</p>
          <p><span>Facebook :</span> https://www.facebook.com/pcp.panay.5</p>
        </div>
        <div className='chapters-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span>		Philippine College of Physicians-WV-Panay Chapter</p>
          <p><span>Bank/Branch : </span> 	BPI Solis Street, Iloilo City</p>
          <p><span>Account No. : </span> 	9245-9228-81</p>
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
