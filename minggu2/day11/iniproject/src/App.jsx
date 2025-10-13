import ComponentA from "./components/ComponentA";
import CounterReducer from "./components/CounterReduce";
import Parent from "./components/parent";
import Temperature from "./components/Temperature";
import ThemeButton from "./components/ThemeButton";
import ThemeContent from "./components/ThemeContent";
import { ThemeProvider } from "./components/ThemeContext";


export default function App() {
   const helloMessage = "Hallo everyone"

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h3>Soal 1:</h3>
     <Temperature/> 
     <h3>Soal 2:</h3>
     <ComponentA message={helloMessage} />
     <h3>Soal 3:</h3>
     <Parent />
     <h3>Soal 4:</h3>
     <CounterReducer />
     <h3>Soal 5:</h3>
     <ThemeProvider>
     <div style={{textAlign: "center", padding: "20px"}}>
      <h1>Simple Theme</h1>
      <ThemeButton/>
      <ThemeContent/>
     </div>
     </ThemeProvider>
    </div>
  )
}