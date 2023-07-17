import React from 'react'
import './Product.scss'
import { Button, Card } from 'react-bootstrap'
import Rating from '../../SideFilters/Rating'

const Product = ({product}) => {

  console.log(product);

  return (
    <div className="product">
      <Card>
        <Card.Img variant='top' src={product.image} alt={product.name}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            <span>$ {product.price.split('.')[0]}</span>
            {product.fastDelivery?(<div>Fast Delivery</div>):(<div>4 days delivery</div>)}
            <Rating rating={product.ratings} clickDisabled={true}/>
            <div className="product-card-buttons">
              <Button variant='danger'>Remove From Cart</Button>
              <Button disabled={!product.inStock}>{!product.inStock ? "Out of Stock":"Add To Cart"}</Button>
            </div>
            
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product