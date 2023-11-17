import React from 'react'


export default function MatapatChap({props}) {
  return (
    <div className='chapters-containter'>
      <h1>MATAPAT CHAPTER</h1>
      <h3>( Makati, Taguig, Pateros )</h3>
      <div className='chapters-content'>
        <div className='chapters-info'>
          <p><span>Office :</span>  IM Departgment, Makati Medical Center, Amorsolo St., Makati City</p>
          <p><span>Secretariat :</span> Ms. Mayette – 8888-999 loc 2733 /  09161025973 / 09224423758</p>
          <p><span>Email :</span>matapat.pcp@gmail.com, mmc_medicine@yahoo.com</p>
        </div>
        <div className='chapters-bank'>
          <h4>Bank Details:</h4>
          <p><span>Account name : </span> Philippine College of Physicians- Matapat Chapter, Inc.</p>
          <p><span>Bank/Branch : </span> BDO Makati Med Ctr Branch</p>
          <p><span>Account No. : </span> 7500003185</p>
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
                  <th>Board of Trustees : </th>
                  <div className='chapters-board'>
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
