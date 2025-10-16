import React from "react";
import ToggleText from "./components/ToggleText";
import ToggleSwitch from "./components/ToggleSwitch";

import PostData from "./components/PostData";
import CounterToggleComponent from "./components/CounterToggleComponent";
import FormComponent from "./components/FormComponent";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeButton from "./components/ThemeButton";


export default function App() {
  return (
    <div className="body" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h3>Soal 1:</h3>
      <h1>custom hook useToggle</h1>
      <ToggleText/>
      <ToggleSwitch/>

      <h3>Soal 2:</h3>
      <PostData/>

      <h3>Soal 3:</h3>
      <h1>Hook komposisi</h1>
      <CounterToggleComponent/>

      <h3>Soal 4:</h3>
      <h1>Custom hook useForm</h1>
      <FormComponent/>

      <h3>Soal 5:</h3>
      <ThemeProvider>
        <ThemeButton/>      
      </ThemeProvider>
    </div>
  )
}