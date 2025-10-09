import React from "react";
import EventHandling from "./components/EventHandling"
import SyntheticEvent from "./components/SyntheticEvent"
import ControlledComponent from "./components/ControlledComponent"
import UncontrolledComponent from "./components/UncontrolledComponent"
import MultipleInputs from "./components/MultipleInputs"


function App() {
  return (
    <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h2>Soal 1</h2>
      <EventHandling />
      <h2>Soal 2</h2>
      <SyntheticEvent />
      <h2>Soal 3</h2>
      <ControlledComponent />
      <h2>Soal 4</h2>
      <UncontrolledComponent />
      <h2>Soal 5</h2>
      <MultipleInputs />
    </div>
  );
}

export default App;
   