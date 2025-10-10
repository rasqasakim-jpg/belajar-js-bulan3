import MessageUpdate from "./components/MessageUpdate";
import MultipleEffects from "./components/MultipleEffects";
import SimulatedFetch from "./components/SimulatedFetch";
import UserInfo from "./components/UserInfo";
import WindowSizeTracker from "./components/WindowSizeTracker";

export default function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h3>Soal 1:</h3>
      <MessageUpdate/>  
      <h3>Soal 2:</h3>
      <UserInfo/>  
      <h3>Soal 3:</h3>  
      <WindowSizeTracker/>
      <h3>Soal 4:</h3>
      <MultipleEffects/>
      <h3>Soal 5:</h3>
      <SimulatedFetch/>

    </div>
  )
}