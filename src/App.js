import React from "react";
import Weather from "./Weather"; 
import "./Fontawesome";
import AddNewCity from "./AddNewCity"
import './App.css';
import headerImage from "./images/globe.png";


export default function App() {
  return (
    <div className="App">
         <div className="container">  
      <header>
        <img src={headerImage} alt="Happy World" /> 
        <h1>What temperature is it ?</h1>
      </header>
   
        <div className="WeatherApp row">
          <div className="col">
            <Weather defaultCity="Chicago"/>
          </div>
          <div className="col">
            <AddNewCity defaultCity="London"/>
          </div>
          <div className="col">
            <AddNewCity defaultCity="Karachi"/>
          </div>
          <div className="col">
            <AddNewCity defaultCity="Malaysia"/>
          </div>
          <div className="col">
            <AddNewCity defaultCity="Bali"/>
          </div>
          <div className="col">
            <AddNewCity defaultCity="Istanbul"/>
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


