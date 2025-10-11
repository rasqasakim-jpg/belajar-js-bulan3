import FetchLoadingError from "./components/FetchLoadingError";
import FetchPost from "./components/FetchPost";
import FetchUserAbort from "./components/FetchUserAbort";
import FetchUserAxios from "./components/FetchUserAxios";
import FilteredUsers from "./components/FilteredUsers";


export default function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h3>Soal 1:</h3>
      <FetchPost/>
      <h3>Soal 2:</h3>
      <FetchUserAxios/>
      <h3>Soal 3:</h3>
      <FetchLoadingError/>
      <h3>Soal 4:</h3>
      <FetchUserAbort/>
      <h3>Soal 5:</h3>
      <FilteredUsers/>

    </div>
  )
}