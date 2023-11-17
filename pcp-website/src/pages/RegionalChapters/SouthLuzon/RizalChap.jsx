import React from 'react'

export default function RizalChap({props}) {
  return (
    <div className='chapters-containter'>
        <h1>RIZAL CHAPTER (2010)</h1>
        <h3>( Cainta / Taytay / Antipolo )</h3>
        <div className='chapters-content'>
        <div className='chapters-info'>
            <p><span>Office :</span> Clinica Antipolo Hospital and Wellness Center Lot4, Sen. Lorenzo, Sumulong Memorial Circle, Brgy Dela Paz, Antipolo City, Rizal</p>
            <p><span>Secretariat :</span> Dr. Ma. Clarinda Florianne D. Lopez</p>
        </div>
        <div className='chapters-bank'>
            <h4>Bank Details:</h4>
            <p><span>Account name : </span> Philippine College of Physicians-Rizal Chapter</p>
            <p><span>Bank/Branch : </span> 	MVSM Pililia Branch, Rizal</p>
            <p><span>Account No. : </span> 51037024</p>
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
                    <th>Pro : </th>
                    <td>{officers.pro}</td>
                </tr>
                <tr>
                    <th>Board of Trustees : </th>
                    <div className='chapters-chapters-board'>
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
