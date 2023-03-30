import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  // console.log(props.product);
  const { id, img, name, seller, price, ratings } = props.product;
  const handlerToClick = props.handlerToClick;

  return (
    <div className="product">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <h6>Price: ${price}</h6>
      <p>Manufacturer: {seller}</p>
      <p>Ratings: {ratings}</p>
      <button
        className="btn-cart"
        onClick={() => handlerToClick(props.product)}
      >
        Add To Cart <FontAwesomeIcon icon={faShoppingCart}/>
      </button>
    </div>
  );
};

export default Product;
