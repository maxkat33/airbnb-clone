import React from 'react'
// importing the image and using the new variable as the img src worked but this doesn't?
// import KatieZaferesImg from '../../images/katie-zaferes.png' 
import StarImg from '../../images/star.png'

const Card = (props) => {
  return (
    <section className='card'>
        <img src={`../../../images/${props.img}`} className='card--img' />
        <div className='card--metrics'>
            <img src={ StarImg } className='card--star'/>
            <p className='card--rating'>{props.rating} <span>({props.reviewCount}) • {props.location}</span></p>
        </div>
        <h4 className='card--title'>{props.title}</h4>
        <h4><span className='card--cost'>From ${props.price} / </span>person</h4>
    </section>
  )
}

export default Card
