import React from 'react'
import "../../../components/css/ChapterCss/MarikinaChap.css"

export default function MarikinaChap({props}) {
  return (
    <div className='marikina-containter'>
      <h1>MARIKINA CHAPTER</h1>
      <div className='marikina-content'>
        <div className='marikina-info'>
          <p><span>Office :</span>  Room 712 Medical Arts Building, Marikina Valley Medical Center, Sumulong Highway, Sto. Niño, Marikina City</p>
          <p><span>Secretariat :</span>  Ms. Glory Jedavelle A. Pepito; Contact No. :  +63 915 415 1303 or 8-6822222 loc 1712</p>
          <p><span>Email :</span>  secretariatpcpmarikina@yahoo.com</p>
        </div>
        <div className='marikina-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians Marikina Chapter Inc.</p>
          <p><span>Bank/Branch : </span> MetroBank Sto. Nino, Marikina</p>
          <p><span>Account No. : </span> 	752-373167470-2</p>
        </div>
        {props.map((officers) => (
        <div className='marikina-officers' key={officers.id}>
            <div className='marikina-main-table'>
              <h4>OFFICERS</h4>
              <table className='marikina-officer-table'>
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
