import React from 'react'

export default function CentralVisayas({props}) {
  return (
    <div className='chapters-containter'>
      <h1>CENTRAL VISAYAS CHAPTER (1976)</h1>
      <h3>( Cebu – Cebu / Mandaue / Lapu-lapu)</h3>
      <div className='chapters-content'>
        <div className='chapters-info'>
          <p><span>Office :</span>  Cebu Medical Society Bldg., Banilad, Cebu City 6000 (Beside ERUF in front of crossroads center)</p>
          <p><span>Secretariat :</span> Ms. Cora Bacus thru 032-2336168 / 0933-5708274</p>
          <p><span>Email :</span>pcpcvchapter@yahoo.com</p>
        </div>
        <div className='chapters-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians-CEV Chapter</p>
          <p><span>Bank/Branch : </span> BPI, Capitol, Cebu City</p>
          <p><span>Account No. : </span> 	906 100 401 4</p>
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
