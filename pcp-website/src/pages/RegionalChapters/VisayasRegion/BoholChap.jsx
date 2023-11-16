import React from 'react'
import '../../../components/css/ChapterCss/BoholChap.css'

export default function BoholChap({props}) {
  return (
    <div className='bohol-containter'>
      <h1>BOHOL CHAPTER (2010)</h1>
      <h3>( Tagbilaran / Baclayon )</h3>
      <div className='bohol-content'>
        <div className='bohol-info'>
          <p><span>Office :</span> Tagbilaran Community Hospital M. Parras Street Tagbilaran City Bohol</p>
          <p><span>Secretariat :</span> Ms. Gladiz thru 0933-3670196</p>
          <p><span>Email :</span> pcpbohol2013@gmail.com</p>
        </div>
        <div className='bohol-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians Bohol Chapter</p>
          <p><span>Bank/Branch : </span> Postal Bank, Bohol</p>
          <p><span>Account No. : </span> 0023 002817 271</p>
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
