import React from 'react'

export default function NWestMinChap({props}) {
  return (
    <div className='nwMin-containter'>
      <h1>NORTHWESTERN MINDANAO CHAPTER (02/21/2010)</h1>
      <h3>( Misamis Occidental – Ozamis / Oroquieta; Zamboanga del Norte – Dipolog / Dapitan;    Zamboanga del Sur – Pagadian )</h3>
      <div className='nwMin-content'>
        <div className='nwMin-info'>
          <p><span>Office :</span> Nasiad Medical Clinic, V. Cerilles St., Santiago District, Pagadian City 7016</p>
          <p><span>Contact Person :</span>  Dr. Genevieve A. Doble, President</p>
          <p><span>Email :</span> pcpnorthwestmin@gmail.com</p>
        </div>
        <div className='nwMin-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians Northwestern Mindanao Pagadian Clustet</p>
          <p><span>Bank/Branch : </span> 	BPI-Pagadian Branch</p>
          <p><span>Account No. : </span> 	2193-1320-09</p>
        </div>
        {props.map((officers) => (
          <div className='nwMin-officers' key={officers.id}>
            <div className='nwMin-main-table'>
              <h4>OFFICERS</h4>
              <table className='nwMin-officer-table'>
                <tr>
                  <th>President : </th>
                  <td>{officers.president}</td>
                </tr>
                <tr>
                  <th>Vice President : </th>
                  <td>{officers.vicePresident}</td>
                </tr>
                <tr>
                  <th>Vice President Dipolog Cluster : </th>
                  <td>{officers.vicePresidentDipolog}</td>
                </tr>
                <tr>
                  <th>Vice President Ozamiz Cluster : </th>
                  <td>{officers.vicePresidentOzamiz}</td>
                </tr>
                <tr>
                  <th>Vice President Pagadian Cluster : </th>
                  <td>{officers.vicePresidentPagadian}</td>
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
                  <div className='nwMin-board'>
                    <td>{officers.boardTrustees}</td>
                    <td>{officers.boardTrustees1}</td>
                    <td>{officers.boardTrustees2}</td>
                    <td>{officers.boardTrustees3}</td>
                    <td>{officers.boardTrustees4}</td>
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
