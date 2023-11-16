import React from 'react'
import '../../../components/css/ChapterCss/NegrosOcChap.css'

export default function NegrosOcChap({props}) {
  return (
    <div className='negrosOc-containter'>
      <h1>NEGROS OCCIDENTAL CHAPTER (1994)</h1>
      <h3>( Negros Occidental – Bacolod City / San Carlos )</h3>
      <div className='negrosOc-content'>
        <div className='negrosOc-info'>
          <p><span>Office :</span> Rm. 522 Medical Arts Bldg, Riverside North Drive, Bacolod City</p>
          <p><span>Secretariat :</span> Ms. Agnes thru  +639086936056</p>
          <p><span>Email :</span> pcpnegrosoccidental@gmail.com</p>
        </div>
        <div className='negrosOc-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span>	Philippine College of Physicians Negros Occidental Chapter</p>
          <p><span>Bank/Branch : </span> 	China Bank North Drive, Bacolod</p>
          <p><span>Account No. : </span> 	1610638612</p>
        </div>
        {props.map((officers) => (
        <div className='negrosOc-officers' key={officers.id}>
            <div className='negrosOc-main-table'>
              <h4>OFFICERS</h4>
              <table className='negrosOc-officer-table'>
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
                  <div className='negrosOc-board'>
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
