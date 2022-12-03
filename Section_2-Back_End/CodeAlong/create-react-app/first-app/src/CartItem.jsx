import React from "react";
import "./CartItem.css";

const CartItem = ({ name, img, price, quantity }) => {
  return (
    <div className="CartItem">
      <h4 className="CartItem-title">{name}</h4>
      <img className="CartItem-img" src={img} alt=""></img>
      <ul>
        <li>Price: ${price}</li>
        <li>Quantity: {quantity}</li>
        <li>Subtotal: ${price * quantity}</li>
      </ul>
    </div>
  );
};

export default CartItem;
