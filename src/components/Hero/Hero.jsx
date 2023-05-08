import React from 'react'
import PhotoGrid from '../..//images/photo-grid.png'

const Hero = () => {
  return (
    <section className='hero'>
        <img src={ PhotoGrid } id='photo-grid' />
        <div className='hero-text'>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activites led by one-of-a-kind hosts -all without leaving home.</p>
        </div>
    </section>
  )
}

export default Hero