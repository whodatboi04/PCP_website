import React from 'react'
import "../../../components/css/ChapterCss/ManilaChap.css"

export default function ManilaChap({props}) {
  return (
    <div className='manila-containter'>
      <h1>MANILA CHAPTER</h1>
      <div className='manila-content'>
        <div className='manila-info'>
          <p><span>Office :</span> 3rd Floor, Unit 47, Midland Plaza Condominium, M. Adriatico St., Ermita, Manila</p>
          <p><span>Secretariat :</span> Mr. Robert Jay Rianzares / rjrianzares@gmail.com / (02)8-9079904 or 09171849904</p>
          <p><span>Email :</span>mia2juliana@yahoo.com; pcp.manila@gmail.com, rjrianzares@gmail.com</p>
        </div>
        <div className='manila-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians Manila</p>
          <p><span>Bank/Branch : </span> PNB Savings - PGH Branch</p>
          <p><span>Account No. : </span> 168-31-011-7305</p>
        </div>
        {props.map((officers) => (
          <div className='manila-officers' key={officers.id}>
            <div className='manila-main-table'>
              <h4>OFFICERS</h4>
              <table className='manila-officer-table'>
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
                  <tbody>
                    <td>{officers.boardTrustees}</td>
                    <td>{officers.boardTrustees1}</td>
                    <td>{officers.boardTrustees2}</td>
                    <td>{officers.boardTrustees3}</td>
                    <td>{officers.boardTrustees4}</td>
                    <td>{officers.boardTrustees5}</td>
                    <td>{officers.boardTrustees6}</td>
                  </tbody>
                </tr>
                <tr>
                  <th>Secretary: </th>
                  <td>{officers.secretary}</td>
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
