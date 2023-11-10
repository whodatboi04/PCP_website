import React from 'react'
import "../../../components/css/ChapterCss/BicolChap.css"

export default function BicolChap({props}) {
  return (
    <div className='bicol-containter'>
        <h1>BICOL CHAPTER (2000)</h1>
        <h3>( Albay – Legaspi / Daraga / Bacacay / Tabaco;  Camarines Norte – Daet / Talisay; Camarines Sur – naga </h3>
        <h3>/ Pili / Iriga;  Catanduanes – Virac / Baras;  Masbate – Masbate /   Claveria;  </h3>
        <h3>Sorsogon – Sorsogon / Bulusan )</h3>
        <div className='bicol-content'>
        <div className='bicol-info'>
            <p><span>Office :</span>  27 P1 Brgy. 41, Bogtong, Legazpi City, Albay 4500</p>
            <p><span>Secretariat :</span>  Dr. Abigail Teodora F. Tosoc-Abonal, President</p>
            <p><span>Email :</span>pcpbicol@yahoo.com.ph</p>
        </div>
        <div className='bicol-bank'>
            <h4>Bank Details:</h4>
            <p><span>Account name : </span> Philippine College of Physicians Bicol Chapter</p>
            <p><span>Bank/Branch : </span> 	BDO-Naga Branch</p>
            <p><span>Account No. : </span> 189-005-895-3</p>
        </div>
        {props.map((officers) => (
        <div className='bicol-officers' key={officers.id}>
            <div className='bicol-main-table'>
                <h4>OFFICERS</h4>
                <table className='bicol-officer-table'>
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
                    <div className='bicol-chapters-board'>
                        <td>{officers.boardTrustees}</td>
                        <td>{officers.boardTrustees1}</td>
                        <td>{officers.boardTrustees2}</td>
                    </div>
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
