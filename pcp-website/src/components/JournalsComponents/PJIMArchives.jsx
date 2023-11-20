import React from 'react'
import DataTable from 'react-data-table-component';
import '../css/JournalsCss/PJIMArchives.css'


export default function PJIMArchives() {
    const columns = [
        {
            name: 'Title',
            id: 'title',
            selector: row => row.title,
            sortable: true,
            style: {
                fontSize: '15px'
            }
        },
        {
            name: 'Action',
            id: 'action',
            selector: row => row.action,
        }
    ]

    const data = [
        {
            id: 1,
            title: "Phil. Journal of Internal Medicine (Vol.61 No.3)",
            action: <a href='https://pcp.org.ph/index.php/pjim/current-issue'>Learn More</a>
        },
        {
            id: 2,
            title: "Phil. Journal of Internal Medicine (Vol.61 No.2)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1473-phil-journal-of-internal-medicine-vol-61-no-2'>Learn More</a>
        },
        {
            id: 3,
            title: "Phil. Journal of Internal Medicine (Vol.61 No.1)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1387-phil-journal-of-internal-medicine-vol-61-no-1'>Learn More</a>
        },
        {
            id: 4,
            title: "Phil. Journal of Internal Medicine (Vol.60 No.4)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1351-phil-journal-of-internal-medicine-vol-60-no-4'>Learn More</a>
        },
        {
            id: 5,
            title: "Phil. Journal of Internal Medicine (Vol.60 No.3)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1332-phil-journal-of-internal-medicine-vol-60-no-3'>Learn More</a>
        },
        {
            id: 6,
            title: "Phil. Journal of Internal Medicine (Vol.60 No.2)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1325-phil-journal-of-internal-medicine-vol-60-no-2'>Learn More</a>
        },
        {
            id: 7,
            title: "Phil. Journal of Internal Medicine (Vol.60 No.1)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1289-phil-journal-of-internal-medicine-vol-60-no-1'>Learn More</a>
        },
        {
            id: 8,
            title: "Phil. Journal of Internal Medicine (Vol.59 No.4)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1267-phil-journal-of-internal-medicine-vol-59-no-4'>Learn More</a>
        },
        {
            id: 9,
            title: "Phil. Journal of Internal Medicine (Vol.59 No.3)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1251-phil-journal-of-internal-medicine-vol-59-no-3'>Learn More</a>
        },
        {
            id: 10,
            title: "Phil. Journal of Internal Medicine (Vol.59 No.2)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1245-phil-journal-of-internal-medicine-vol-59-no-2'>Learn More</a>
        },
        {
            id: 11,
            title: "Phil. Journal of Internal Medicine (Vol.59 No.1)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1203-phil-journal-of-internal-medicine-vol-59-no-1'>Learn More</a>
        },
        {
            id: 12,
            title: "Phil. Journal of Internal Medicine (Vol.58 No.4)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1177-phil-journal-of-internal-medicine-vol-58-no-4'>Learn More</a>
        },
        {
            id: 13,
            title: "Phil. Journal of Internal Medicine (Vol.58 No.3)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1169-phil-journal-of-internal-medicine-vol-58-no-3'>Learn More</a>
        },
        {
            id: 14,
            title: "Phil. Journal of Internal Medicine (Vol.58 No.1)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1094-phil-journal-of-internal-medicine-vol-58-no-1'>Learn More</a>
        },
        {
            id: 15,
            title: "Phil. Journal of Internal Medicine (Vol.57 No.4)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1070-phil-journal-of-internal-medicine-vol-57-no-4'>Learn More</a>
        },
        {
            id: 16,
            title: "Phil. Journal of Internal Medicine (Vol.57 No.3)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1037-phil-journal-of-internal-medicine-vol-57-no-3'>Learn More</a>
        },
        {
            id: 17,
            title: "Phil. Journal of Internal Medicine (Vol.57 No.2)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1027-phil-journal-of-internal-medicine-vol-57-no-2'>Learn More</a>
        },
        {
            id: 18,
            title: "Phil. Journal of Internal Medicine (Vol.57 No.1)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/1020-phil-journal-of-internal-medicine-vol-57-no-1'>Learn More</a>
        },
        {
            id: 19,
            title: "Phil. Journal of Internal Medicine (Vol.56 No.4)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/997-phil-journal-of-internal-medicine-vol-56-no-10'>Learn More</a>
        },
        {
            id: 20,
            title: "Phil. Journal of Internal Medicine (Vol.56 No.3)",
            action: <a href='https://pcp.org.ph/index.php/pjim/p-j-i-m-archives/988-phil-journal-of-internal-medicine-vol-56-no-9'>Learn More</a>
        },
    ]

  return (
    <div className='pjimArch-container'>
        <div className='pjimArch-wrapper'>
            <DataTable
                columns={columns}
                data={data}
                pagination
                fixedHeader
            >
                
            </DataTable>
        </div>
    </div>
  )
}
