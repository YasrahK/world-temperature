import React from "react";
import Weather from "./Weather"; 
import "./Fontawesome";

import './App.css';
import headerImage from "./images/globe.png";
export default function App() {
  return (
    <div className="App">
         <div className="container">  
      <header>
        <img src={headerImage} alt="Hapy World" /> 
        <h1>What temperature is it ?</h1>
      </header>
   
        <div className="WeatherApp row">
          <div className="col">
            <Weather defaultCity="Chicago"/>
          </div>
          <div className="col">
            <Weather defaultCity="London"/>
          </div>
          <div className="col">
            <Weather defaultCity="Karachi"/>
          </div>
          <div className="col">
            <Weather defaultCity="Malaysia"/>
          </div>
          <div className="col">
            <Weather defaultCity="Bali"/>
          </div>
          <div className="col">
            <Weather defaultCity="Istanbul"/>
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


