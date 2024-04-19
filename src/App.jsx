import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";

function App() {
  const [calculatedResults, setCalculatedResults] = useState([])

  function handler() {
    setCalculatedResults(e);
  }

  return (
    <>
      <Header />
      <Inputs setResults={handler} />
      <Results results={calculatedResults} />
    </>
  )
}

export default App
