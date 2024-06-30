import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
// import Offers from './Components/Offers/Offers'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      {/* <Offers/> */}
      <NewsLetter />
    </div>
  )
}

export default Shop;

