// src/components/CartDisplay.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartDisplay() {
  const { cart, totalPrice, removeItem, clearCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
        background: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
        🛒 Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              padding: "6px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button
              onClick={() => removeItem(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "3px 6px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              x
            </button>
          </div>
        ))
      )}

      <h3 style={{ marginTop: "15px", textAlign: "right" }}>
        Total: ${totalPrice}
      </h3>

      {cart.length > 0 && (
        <button
          onClick={clearCart}
          style={{
            width: "100%",
            padding: "8px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}
