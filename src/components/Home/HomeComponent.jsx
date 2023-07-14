import React from 'react'
import './HomeComponent.scss'
import SideFilters from './SideFilters/SideFilters'
import Products from './Products/Products'

const HomeComponent = () => {
  return (
    <div className='home'>
      <SideFilters/>
      <Products/>
    </div>
  )
}

export default HomeComponent