import React from 'react'
import '../css/HomeCss/PcpBrochure.css'

export default function ({PcpBrochureContents}) {

  return (
    <div className='brochure-container'>
        {PcpBrochureContents.map((BrochureContent) => (
            <div className='brochure-wrapper'>
                <div className='brochure-row' key={BrochureContent.id}>
                    <img src={BrochureContent.image} />
                    <div className='brochure-content'>
                        <h3>{BrochureContent.title}</h3>
                        <p>{BrochureContent.context}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
