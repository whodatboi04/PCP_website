import React from 'react'
import "../../../components/css/ChapterCss/SouthernLuzonChap.css"

export default function SouthernLuzonChap({props}) {
  return (
    <div className='southernL-containter'>
        <h1>SOUTHERN LUZON CHAPTER (1976)</h1>
        <h3>( Aurora – Baler / Maria Aurora; Batangas – Batangas / Lemery / Lipa / Calatagan; Cavite – Imus / Baccor / Dasmariñas;  Laguna – San Pablo / Sta. Cruz / Alaminos; Marinduque – Boac /</h3>    
        <h3>Santa Cruz; Occidental Mindoro – Mamburao / San Jose; Oriental Mindoro – Calapan / Puerto Galera;  Palawan – Puerto Princesa / </h3>    
        <h3>Cuyo; Quezon – Lucena / Infanta / Pagbilao / Candelaria;  Romblon – Romblon / Imelda )</h3>
        <div className='southernL-content'>
        <div className='southernL-info'>
            <p><span>Office :</span> Mary Mediatrix Medical Center, MAB, Rm. 100 c/o Dr. Faustino, J.P. Laurel Highway, Lipa City 4217 </p>
            <p><span>Secretariat :</span> Ms. Sheryl thru 09260224693</p>
            <p><span>Email : </span> pcpsl@yahoo.com</p>
        </div>
        <div className='southernL-bank'>
            <h4>Bank Details:</h4>
            <p><span>Account name : </span> Philippine College of Physicians  Southern Luzon Chapter</p>
            <p><span>Bank/Branch : </span> 	BPI, Calamba, Laguna</p>
            <p><span>Account No. : </span> 	845 100 323 3</p>
        </div>
        {props.map((officers) => (
        <div className='southernL-officers' key={officers.id}>
            <div className='southernL-main-table'>
                <h4>OFFICERS</h4>
                <table className='southernL-officer-table'>
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
                    <th>Auditor : </th>
                    <td>{officers.auditor}</td>
                </tr>
                <tr>
                    <th>Board of Trustees : </th>
                    <div className='southernL-chapters-board'>
                        <td>{officers.boardTrustees}</td>
                        <td>{officers.boardTrustees1}</td>
                        <td>{officers.boardTrustees2}</td>
                        <td>{officers.boardTrustees3}</td>
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
