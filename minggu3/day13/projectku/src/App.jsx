// src/App.jsx
import React from "react";
import { UserProvider } from "./context/UserContext";
import UserProfile from "./components/UserProfile";
import AuthButtons from "./components/AuthButtons";
import { ThemeProvider } from "./context/ThemeContext";
import ThemedButton from "./components/ThemeButton";
import ThemedCard from "./components/ThemeCard";
import ThemedText from "./components/ThemeText";
import { LanguageContext, LanguageProvider } from "./context/LanguageContext";
import { NotificationProvider } from "./context/NotificationContext";
import Header from "./components/Header";
import AuthButton from "./components/AuthButton";
import UserProfil from "./components/UserProfil";
import { UserProvider1 } from "./context/UserContext1";

export default function App() {
  return (
    <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h3>Soal 1:</h3>
    <UserProvider>
      <h1> User Context Example</h1>
      <AuthButtons />
      <UserProfile />
    </UserProvider>
    <h3>Soal 2:</h3>
    <ThemeProvider>
    <div style={{padding: "20px"}}>
      <h2>Theme context example</h2>
      <ThemedButton/>
      <ThemedText/>
      <ThemedCard/>
    </div>
    </ThemeProvider>
    <h3>Soal 3:</h3>
    <LanguageProvider>
      <NotificationProvider>
        <div>
          <Header />
        </div>
      </NotificationProvider>
    </LanguageProvider>
    <h3>Soal 4:</h3>
    <UserProvider1>
    <h1>User context + custom hook</h1>
    <AuthButton/>
    <UserProfil/>
    </UserProvider1>
    </div>
  );
}
