// src/App.jsx
import React from "react";
import { UserProvider } from "./context/UserContext";
import UserProfile from "./components/UserProfile";
import AuthButtons from "./components/AuthButtons";

import { ThemeProvider } from "./context/ThemeContext";
import ThemedButton from "./components/ThemeButton";
import ThemedCard from "./components/ThemeCard";
import ThemedText from "./components/ThemeText";

import { LanguageProvider } from "./context/LanguageContext";
import { NotificationProvider } from "./context/NotificationContext";
import Header from "./components/Header";

import { UserProvider1 } from "./context/UserContext1";
import AuthButton from "./components/AuthButton";
import UserProfil from "./components/UserProfil";

import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import CartDisplay from "./components/CartDisplay";

export default function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h3>Soal 1:</h3>
      <UserProvider>
        <h1>User Context Example</h1>
        <AuthButtons />
        <UserProfile />
      </UserProvider>

      <h3>Soal 2:</h3>
<ThemeProvider>
  <h1>Full Global Theme App</h1>
  <ThemedButton />
  <ThemedText />
  <ThemedCard />
</ThemeProvider>



      <h3>Soal 3:</h3>
      <LanguageProvider>
        <NotificationProvider>
          <Header />
        </NotificationProvider>
      </LanguageProvider>

      <h3>Soal 4:</h3>
      <UserProvider1>
        <h1>User context + custom hook</h1>
        <AuthButton />
        <UserProfil />
      </UserProvider1>

      <h3>Soal 5:</h3>
      <CartProvider>
        <h1>Shopping cart with context API</h1>
        <ProductList />
        <CartDisplay />
      </CartProvider>
    </div>
  );
}
