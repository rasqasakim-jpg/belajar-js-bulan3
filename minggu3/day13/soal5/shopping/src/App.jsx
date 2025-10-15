import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import CartDisplay from "./components/CartDisplay";

export default function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h3>Soal 5:</h3>
    <CartProvider>
      <h1>Shopping cart with context API </h1>
      <ProductList/>
      <CartDisplay/>
    </CartProvider>
    </div>
  )
}