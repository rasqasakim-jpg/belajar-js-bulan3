import React, { useState, Suspense } from "react";
import Parent from "./components/Parent";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import ParentWithoutCallback from "./components/ParentWithoutCallback";
import ParentWithCallback from "./components/ParentWithCallback";
import FastComponent from "./components/FastComponent";
import MediumComponent from "./components/MediumComponent";
import SlowComponent from "./components/SlowComponent";


const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3>Soal 1:</h3>
      <Parent />

      <h3>Soal 2 (useMemo):</h3>
      <ExpensiveCalculation />

      <h3>Soal 3 (useCallback):</h3>
      <ParentWithoutCallback />
      <ParentWithCallback />
      <br />

      <h3>Soal 4:</h3>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1> Code Splitting & Lazy Loading</h1>

        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>

        <hr />

        <Suspense fallback={<h3>Loading Halaman...</h3>}>
          {renderPage()}
        </Suspense>
      </div>
      <h3>Soal 5:</h3>
      <FastComponent />
      <MediumComponent />
      <SlowComponent />
    </div>
  );
}
