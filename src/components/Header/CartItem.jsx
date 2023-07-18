import React, { useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import Cart from '../../context/Context'
import './CartItem.scss'

const CartItem = ({item}) => {

    const {dispatch} = useContext(Cart)

  return (
    <div className="cart-item">
        <img src={item.image} alt="" />
        <div className="cart-item-detail">
            <span>{item.name}</span>
            <span>$ {item.price.split('.')[0]}</span>
        </div>
        <AiFillDelete
            fontSize='20px'
            style={{cursor:'pointer'}}
            onClick={() => {
                dispatch({
                    type:"REMOVE_FROM_CART",
                    payload:item
                })
            }}
        />
    </div>
  )
}

export default CartItem