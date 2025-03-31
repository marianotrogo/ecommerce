import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductList from "./pages/ProductList";
import './App.css'
import Checkout from "./pages/Checkout";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  const [cart, setCart] = useState(() => {
    // Cargar el carrito desde localStorage al iniciar la app
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Guardar en localStorage cada vez que cambie el carrito
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/checkout" element={<Checkout cart={cart}/>}/>
          <Route path="/thank-you" element={<ThankYouPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;