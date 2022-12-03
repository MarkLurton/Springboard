import logo from "./logo.svg";
import items from "./items";
import Alert from "./Alert";
import moreItems from "./moreItems";
import ShoppingCart from "./ShoppingCart.jsx";
//import { add, multiply } from "./helpers.js";
//import data, { meow } from "./cats";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <Alert variant="success">
        <h1>Welcome Back</h1>
      </Alert>
      <Alert variant="danger">
        <h1>OH NO!</h1>
      </Alert>
      <ShoppingCart items={items} username="Carly" />
      <ShoppingCart items={moreItems} username="Rusty" />
    </div>
  );
}

export default App;
