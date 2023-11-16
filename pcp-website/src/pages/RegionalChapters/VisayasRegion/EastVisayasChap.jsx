import React from 'react'
import '../../../components/css/ChapterCss/EastVisayas.css'

export default function EastVisayasChap({props}) {
  return (
    <div className='evisayas-containter'>
      <h1>EASTERN VISAYAS CHAPTER (2006)</h1>
      <h3>( Biliran – Naval / Biliran; Eastern Samar – Borongan; Leyte – Tacloban; Northern Samar –    Catarman / Capul; Western Samar – Catbalogan / Calbayog; Southern Leyte – Maasim / Bontoc )</h3>
      <div className='evisayas-content'>
        <div className='evisayas-info'>
          <p><span>Office :</span> Room 14 OPD Building, Divine Word University Hospital, Tacloban City, 6500 Leyte</p>
          <p><span>Secretariat :</span> Ms. Kathy - Contact no: 09275557852</p>
          <p><span>Email :</span> pcpeasternvisayas@gmail.com</p>
        </div>
        <div className='evisayas-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span>	Philippine College of Physicians-Eastern Visayas Chapter</p>
          <p><span>Bank/Branch : </span> 	BPI, Justice Romualdez, Tacloban City</p>
          <p><span>Account No. : </span> 	112 101 780 2</p>
        </div>
        {props.map((officers) => (
        <div className='evisayas-officers' key={officers.id}>
            <div className='evisayas-main-table'>
              <h4>OFFICERS</h4>
              <table className='evisayas-officer-table'>
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
                  <div className='evisayas-board'>
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
