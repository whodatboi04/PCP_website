import React from 'react'
import BoardLawsResearch from '../../components/HomeComponents/BoardLawsResearch'
import {cardBrochureData} from '../../data/HomeData/BoardLawsResearchData'
import "../css/HomeCss/PcpBrochure.css"

function PcpBrochure({PcpBrochureContents}) {
  return (

    <div className='brochure-container'>
        <div class="custom-shape-divider-bottom-1697158596">
            <svg 
                data-name="Layer 1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
            >
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,
                        112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                        class="shape-fill">
                </path>
            </svg>
        </div>
        <div className='brochure-background' >
            {PcpBrochureContents.map((BrochureContent) => (
                <div className='content-wrapper'>
                    <div className='main-content' key={BrochureContent.id}>
                        <div className='brochure-content-left'>
                            <img 
                                src={BrochureContent.img} 
                                alt='Code of Ethics' 
                            />
                            <div className='brochure-context'>
                                <h3>{BrochureContent.title}</h3>
                                <p className='pre-title'>{BrochureContent.preTitle}</p>
                                <p className='text'>
                                {BrochureContent.context}
                                </p>
                            </div>
                        </div>
                        <div className='brochure-content-right'>
                            <img 
                                src={BrochureContent.img2} 
                                alt='What to do in an Emergency?' 
                            />
                            <div className='brochure-context-right'>
                                <h3>{BrochureContent.title2}</h3>
                                <p className='pre-title-right'>
                                    {BrochureContent.preTitle2}
                                </p>
                                <p className='text-right'>
                                    {BrochureContent.context2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}   
        </div>
        {/* PCPBrochure Card Type */}
        <BoardLawsResearch cardItemProps={cardBrochureData} />
    </div>
  )
}

export default PcpBrochure