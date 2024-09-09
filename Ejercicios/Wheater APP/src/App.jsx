// App.js
import { useState } from "react";
import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import Principal from './Components/PronosticActually/Principal';
import Pronostic from "./Components/Pronostic5days/Pronostic";

function App() {
  // Estado para la ciudad
  const [city, setCity] = useState("");

  return (
    <>
      <NavBar setCity={setCity} />
      <Principal city={city} />
      <Pronostic city={city} />

    </>
  );
}

export default App;