import React from 'react'
import "../css/HomeCss/BoardLawsResearch.css"

function BoardLawsResearch({cardItemProps}) {
  return (
    <div className='brochure-card-container'>
        {cardItemProps.map((cardItem) => (
            <div className='brochure-card-items' key={cardItem.id}>
                {/* <img 
                    src={cardItem.image} 
                    alt='PCP-CPD Board Resolution' 
                /> */}
                <h3>{cardItem.title}</h3>
                <p>{cardItem.preTitle}</p>
                <a>
                    <button>
                        Read More
                    </button>
                </a>
            </div>
        ))}
    </div>
  )
}


export default BoardLawsResearch