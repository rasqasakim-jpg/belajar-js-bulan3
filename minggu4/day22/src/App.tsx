import React from "react";
import FocusInput from "./components/FocusInput";
import ScrollBox from "./components/ScrollBox";
import AppContent from "./components/AppContent";
import UserListContainer from "./components/UserListWithLoading";
import MouseTracker from "./components/MouseTracker";
import MousePositionText from "./components/MousePositionText";
import MouseCircle from "./components/MouseCircle";


const App: React.FC = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h3>Soal 1:</h3>
      <div style={{border: "2px solid", borderRadius: "10px", padding: "20px"}}>
      <FocusInput />
      <ScrollBox />
      </div>
      <h3>Soal 2:</h3>
      <div style={{border: "2px solid", borderRadius: "10px", padding: "20px"}}>
      <AppContent />
      </div>
      <br />
      <br />
      <br />
      <h3>Soal 3:</h3>
      <div style={{border: "2px solid", borderRadius: "10px", padding: "20px"}}>
      <h2>Custom Higher-Order Component (HOC)</h2>
      <p>Menambah fitur loading tanpa ubah komponen aslinya</p>
      <UserListContainer/>
      </div>
      <br />
      <br />
      <br />
      <h3>Soal 4:</h3>
      <div style={{border: "2px solid", borderRadius: "10px", padding: "20px"}}>
      <h2>Render Props Pattern</h2>
      <MouseTracker render={({x, y}) => <MousePositionText x={x} y={y} />}/>
      <MouseTracker render={({x, y}) => <MouseCircle x={x} y={y}/>} />
      </div>
    </div>
  );
}

export default App;