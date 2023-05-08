import React from 'react'
import AirbnbLogo from '../../images/airbnb-logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={ AirbnbLogo } alt='Airbnb Logo' className='nav--logo'/>
    </nav>
  )
}

export default Navbar