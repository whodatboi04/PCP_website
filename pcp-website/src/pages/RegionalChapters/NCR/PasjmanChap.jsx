import React from 'react'

export default function PasjmanChap({props}) {
  return (
    <div className='chapters-containter'>
      <h1>PASJMAN CHAPTER</h1>
      <h3>( Pasig, San Juan, Mandaluyong )</h3>
      <div className='chapters-content'>
        <div className='chapters-info'>
          <p><span>Office :</span>  IM Department, Cardinal Santos Memorial Hospital, Wilson Street, Greenhills, San Juan</p>
          <p><span>Secretariat :</span> Berna Fernandez  - 0977 031 3708</p>
          <p><span>Email :</span>atdytanmd@yahoo.com, pasjmanpcp2010@yahoo.com</p>
        </div>
        <div className='chapters-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Phil College of Physicians Pasjman Chapter, Inc.</p>
          <p><span>Bank/Branch : </span> 	Union Bank</p>
          <p><span>Account No. : </span> 001730000128</p>
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
