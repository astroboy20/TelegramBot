import React, { useState } from "react";
import Button from "../Button/Button";
import "./Card.css";

const Card = ({ food, onAdd, onRemove }) => {
  const [count, setCount] = useState(0);
  const { title, Image, price } = food;

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    onAdd(food);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev ? prev - 1 : 0));
    onRemove(food);
  };
  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title} . <span className="card__price">{price}</span>
      </h4>
      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
