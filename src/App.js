import React from "react";
import Weather from "./Weather"; 
import "./Fontawesome";
import AddNewCity from "./AddNewCity"
import './App.css';
import headerImage from "./images/globe.png";


export default function App() {
  return (
    <div className="App">
        <header>
        <img src={headerImage} alt="Happy World" /> 
        <h1>What temperature is it?</h1>
      </header>
         <div className="container">  
    
   
        <div className="WeatherApp row mt-5">
         <div className="col-4">
            <Weather defaultCity="Chicago"/>
          </div>
          <div className="col-4">
            <AddNewCity defaultCity="London"/>
          </div>
          <div className="col-4">
            <AddNewCity defaultCity="Karachi"/>
          </div>
          <div className="col-4">
            <AddNewCity defaultCity="Malaysia"/>
          </div>
          <div className="col-4">
            <AddNewCity defaultCity="Bali"/>
          </div>
          <div className="col-4">
            <AddNewCity defaultCity="Istanbul"/>
          </div>
           </div>
           </div>
           <footer>
      Project coded by 
      <a href="https://www.linkedin.com/in/yasrah-kapadia-12841196/" target="_blank" rel="noopener noreferrer"> Yasrah Kapadia </a>and is open-sourced on
      <a href="https://github.com/YasrahK/world-temperature" target="_blank" rel="noopener noreferrer"> Git-hub</a>
    </footer>
      </div>
    
    
  );
}


