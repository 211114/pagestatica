import React from 'react'
import '../../assets/Styles/CardService.css'


function CardService({title, paragraph, img}) {
  return (
    <div className='cardService'>
        <div className='box-service'>
            <img src={img} alt="" />
        </div>

        <h4>{title}</h4>
        <p>{paragraph}</p>
    </div>
  )
}

export default CardService