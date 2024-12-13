import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Products from "./components/Products";
import Payment from "./components/Payment";
import CartIcon from "./components/CartIcon"; 
import CartPage from "./components/CartPage"; 
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (product.quantity && product.quantity < 0) {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          setCart(cart.map(item => 
            item.id === product.id 
              ? { ...existingProduct, quantity: existingProduct.quantity - 1 } 
              : item
          ));
        } else {
          setCart(cart.filter(item => item.id !== product.id)); // Remove item if quantity is 0
        }
      }
    } else {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        setCart(cart.map(item => 
          item.id === product.id 
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 } 
            : item
        ));
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    }
  };

  return (
    <Router>
      <div className="App">
        <h1 className="text-center">Shopping Cart</h1>
        <CartIcon cart={cart} /> 
        <div className="container">
          <Routes>
            <Route path="/" element={<Products addToCart={addToCart} cart={cart} />} />
            <Route path="/checkout" element={<Payment cart={cart} />} />
            <Route path="/cart" element={<CartPage cart={cart} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;