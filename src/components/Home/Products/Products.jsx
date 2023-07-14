import React, { useContext } from 'react'
import './Products.scss'
import Cart from '../../../context/Context'
import Product from './Product/Product'

const Products = () => {
  const {state:{products}} = useContext(Cart)

  return (
    <div className='product-container'>
      {products.map((product ) => {
        return <Product product={product}/>
      })}
    </div>
  )
}

export default Products