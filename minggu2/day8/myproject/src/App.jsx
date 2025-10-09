import React from "react";
import LoginStatus from "./components/LoginStatus.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import StatusMessage from "./components/StatusMessage.jsx";
import ListShopping from "./components/ListShopping.jsx";


function App() {
  return (
    <main style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h3>Soal 1</h3>
      <LoginStatus />
      <h3>Soal 2</h3>
      <WelcomeMessage />
      <h3>Soal 3</h3>
      <StatusMessage />
      <h3>Soal 4 & 5</h3>
      <ListShopping />
    </main>
  );
}
export default App;