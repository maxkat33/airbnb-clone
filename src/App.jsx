import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'

import data from './data.js'

const App = () => {
  const cards = data.map((item)=> {
    return (
      <Card
        key={item.id}
        title={item.title} 
        price={item.price}  
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location} 
          />
    )  
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='cards-container'>
        {cards}
      </div>
    </div>
  )
}

export default App