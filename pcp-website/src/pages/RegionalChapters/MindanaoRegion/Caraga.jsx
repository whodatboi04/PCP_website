import React from 'react'

export default function Caraga({props}) {
  return (
    <div className='chapters-containter'>
      <h1>CARAGA CHAPTER(02/06/2010)</h1>
      <h3>( Agusan del Norte – Butuan / Nasipit; Agusan del Sur – Prosperidad; Surigao del Norte –    Surigao City; Surigao del Sur – Tandag / Bislig )</h3>
      <div className='chapters-content'>
        <div className='chapters-info'>
          <p><span>Office :</span>  c/o Dr Josefina M. Lagunzad Clinic Surigao Medical Center, Km 1, Natl. Highway, Surigao City</p>
          <p><span>Contact Person :</span> Dr. Sylvia B. Hangos, President</p>
          <p><span>Email :</span>  sylviahangos@yahoo.com</p>
        </div>
        <div className='chapters-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians-Caraga Chapter</p>
          <p><span>Bank/Branch : </span> 	BPI Surigao</p>
          <p><span>Account No. : </span> 	9381010136</p>
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
                  <th>Vice President - Agusan : </th>
                  <td>{officers.vicePresidentAgusan}</td>
                </tr>
                <tr>
                  <th>Vice President - Surigao : </th>
                  <td>{officers.vicePresidentSurigao}</td>
                </tr>
                <tr>
                  <th>Secretary - Agusan : </th>
                  <td>{officers.secretaryAgusan}</td>
                </tr>
                <tr>
                  <th>Secretary - Surigao : </th>
                  <td>{officers.secretarySurigao}</td>
                </tr>
                <tr>
                  <th>Secretary - Surigao : </th>
                  <td>{officers.secretarySurigao}</td>
                </tr>
                <tr>
                  <th>Treasurer - Agusan : </th>
                  <td>{officers.treasurerAgusan}</td>
                </tr>
                <tr>
                  <th>Treasurer - Surigao : </th>
                  <td>{officers.treasurerSurigao}</td>
                </tr>
                <tr>
                  <th>Board of Trustees - Agusan: </th>
                  <div className='chapters-board'>
                    <td>{officers.boardTrusteesAgusan}</td>
                  </div>
                </tr>
                <tr>
                  <th>Board of Trustees - Surigao: </th>
                  <div className='chapters-board'>
                    <td>{officers.boardTrusteesSurigao}</td>
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
