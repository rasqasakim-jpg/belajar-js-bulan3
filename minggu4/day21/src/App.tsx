import React from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh",}}>
      <h3>Soal 2:</h3>
      <Counter />
      <br />
      <TodoList />
      <br />
      <h3>Soal 3:</h3>
      <UserList />
    </div>
  );
}
