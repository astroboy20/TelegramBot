import React from "react";
import Button from "../Button/Button";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (item, total) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "No items in cart" : ""}
      <br /> <span className="">Total Price: ${totalPrice.toFixed(2)}</span>
      <Button
        title={`${cartItems.length === 0 ? "Order Item" : "Checkout"} `}
        type={"checout"}
        disable={cartItems.length === 0 ? true : false}
      />
    </div>
  );
};

export default Cart;
