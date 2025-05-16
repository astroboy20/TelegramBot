import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
import { getData } from "./db/db";

const telegram = window.Telegram.WebApp;
function App() {

  const foods = getData();
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (food) => {
    const exist = cartItems.find((item) => item.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === food.id ? { ...item, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((item) => item?.id === food?.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === food.id ? { ...item, quantity: exist.quantity - 1 } : item
        )
      );
    }
  };

  useEffect(() => {
    telegram.ready();
  }, []);

  const onCheckout = ()=>{
    telegram.MainButton.text = "Pay :)"
    telegram.MainButton.show()
  }
  return (
    <>
      <h1 className="heading">Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {foods.map((food) => (
          <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
        ))}
      </div>
    </>
  );
}

export default App;
