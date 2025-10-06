import React from "react";
import Counter from "./Components/Counter.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import ContactForm from "./Components/ContactForm.jsx";
import TodoList from "./Components/TodoList.jsx";
import FunctionalUpdate from "./Components/FunctionalUpdate.jsx";


function App() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Soal 1:</h1>
      <Counter />
      <h1>Soal 2:</h1>
      <UserProfile/>
      <h1>Soal 3:</h1>
      <ContactForm/>
      <h1>Soal 4:</h1>
      <TodoList/>      
      <h1>Soal 5:</h1>
      <FunctionalUpdate/>
    </main>
  );
}

export default App;
