import React from 'react'

export default function SouthMin({props}) {
  return (
    <div className='chapters-containter'>
      <h1>SOUTHERN MINDANAO CHAPTER (1976)</h1>
      <h3>( Davao del Norte – Tagum / Samal / Panao / Compostela / Nabunturan; Davao Oriental –    Mati / Caraga; Davao del Sur – Digos; Davao City – Matina; Maguindanao – Maganoy / Cotabato; North Cotabato – Kidapawan / Makilala / Midsayap / Pigkawayan )</h3>
      <div className='chapters-content'>
        <div className='chapters-info'>
          <p><span>Office :</span> 2nd Floor Annex 1 Building, Davao Doctor’s Hospital, 118 E. Quirino Avenue, Davao City 8000</p>
          <p><span>Secretariat :</span> Ms. Eva Caturza thru 082-2240327 / 0933-4261259</p>
          <p><span>Email :</span>  pcp_davao@yahoo.com</p>
        </div>
        <div className='chapters-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians-Southern Mindanao Chapter</p>
          <p><span>Bank/Branch : </span> 	Metrobank, Quirino Avenue, Davao</p>
          <p><span>Account No. : </span> 	667-7-66703125-3</p>
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
