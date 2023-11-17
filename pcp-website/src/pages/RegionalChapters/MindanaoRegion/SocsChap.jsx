import React from 'react'

export default function SocsChap({props}) {
  return (
    <div className='chapters-containter'>
      <h1>SOCSKSARGEN CHAPTER (01/16/2010)</h1>
      <h3>( South Cotabato – General Santos / Koronadal; Sultan Kudarat – Takurong / Lebak / Isulan / Esperanza;  Sarangani )</h3>
      <div className='chapters-content'>
        <div className='chapters-info'>
          <p><span>Office :</span> General Santos Doctor’s Hospital, General Santos City</p>
          <p><span>Secretariat :</span> Dr. Amor A. Rosete, President</p>
          <p><span>Email :</span>  amor_rosete@yahoo.com</p>
        </div>
        <div className='chapters-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians Socsksargen Chapter Inc.</p>
          <p><span>Bank/Branch : </span> 	BPI Santiago GenSan City</p>
          <p><span>Account No. : </span> 	9340007058</p>
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
