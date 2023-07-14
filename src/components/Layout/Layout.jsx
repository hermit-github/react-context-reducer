import React, { useReducer } from 'react'
import Header from '../Header/Header'
import Cart from '../../context/Context'
import { faker } from '@faker-js/faker';
import { cartReducer } from '../../context/Reducers';

const Layout = (props) => {

    const products = [...Array(20)].map(() => ({
        id:faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.url(),
        inStock:faker.number.int({max:10,min:0}),
        fastDelivery:true,
        ratings:faker.number.int({max:5,min:0})
    }))

    const initialState = {
      products:products,
      cart:[]
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)


  return (
    <>
        <Cart.Provider value={{state,dispatch}}>
            <Header/>
            {props.children}
        </Cart.Provider>
        
    </>
  )
}

export default Layout