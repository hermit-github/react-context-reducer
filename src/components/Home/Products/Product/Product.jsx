import React, { useContext } from "react";
import "./Product.scss";
import { Button, Card } from "react-bootstrap";
import Rating from "../../SideFilters/Rating";
import Cart from "../../../../context/Context";

const Product = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(Cart);


  return (
    <div className="product">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            <span>$ {product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={product.ratings} clickDisabled={true} />
            <div className="product-card-buttons">
              {cart.some((p) => p.id === product.id) ? (
                <Button variant="danger" onClick={() => {
                  dispatch({
                    type:"REMOVE_FROM_CART",
                    payload:product
                  })
                }}>Remove From Cart</Button>
              ) : (
                <Button disabled={!product.inStock} onClick={() => {
                  dispatch({
                    type:"ADD_TO_CART",
                    payload:product
                  })
                }}>
                  {!product.inStock ? "Out of Stock" : "Add To Cart"}
                </Button>
              )}
            </div>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
