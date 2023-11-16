import React from 'react'
import '../../../components/css/ChapterCss/NegrosOrChap.css'

export default function NegrosOrChap({props}) {
  return (
    <div className='negrosOr-containter'>
      <h1>NEGROS ORIENTAL CHAPTER (2006)</h1>
      <h3>( Negros Oriental – Dumaguete / San Jose; Siquijor – Siquijor / Lazi )</h3>
      <div className='negrosOr-content'>
        <div className='negrosOr-info'>
          <p><span>Office :</span> c/o Siliman University Medical Hospital, Aldecoa Road, Dumaguete City  6200</p>
          <p><span>Secretariat :</span> Sir Larry  thru 0917-3002593</p>
          <p><span>Email :</span> pcpnegrosoriental@gmail.com</p>
        </div>
        <div className='negrosOr-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span>	Philippine College of Physicians-Negros Oriental Chapter</p>
          <p><span>Bank/Branch : </span> 	China Bank , Dumaguete City</p>
          <p><span>Account No. : </span> 	198 093 201 9</p>
        </div>
        {props.map((officers) => (
        <div className='negrosOr-officers' key={officers.id}>
            <div className='negrosOr-main-table'>
              <h4>OFFICERS</h4>
              <table className='negrosOr-officer-table'>
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
                  <div className='negrosOr-board'>
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
