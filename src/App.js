import React from "react";
import Weather from "./Weather";
import AddNewCity from "./AddNewCity";
import './App.css';
import headerImage from "./images/globe.png";
function App() {
  return (
    <div className="App">
        <div className="container">
      <header>
        <img src={headerImage} alt="Hapy World" /> 
<h1>What temperature is it ?</h1>
      </header>
    
      <div className="citiesWeather row">
        <div className="col">
         <Weather />
        </div>
        <div className="col">
         <AddNewCity defaulltCity="New York"/>
        </div>
        <div className="col">
          3
        </div>
        <div className="col">
          4
        </div>
        <div className="col">
          5
        </div>
        <div className="col">
          6
        </div>
      </div>

      <footer className="mt-5">
        <p>
          💻 Open-source code by Yasrah Kapadia
        </p>
      </footer>
      </div>
    </div>
  );
}

export default App;
