import React from "react";
import Weather from "./Weather";
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
   
        <div className="WeatherApp">
        <form className="searchEngine">
           <div className="row">
             <div className="col-6">
               <input type="search" className="form-control" autoFocus="on" placeholder="Enter a place..."/>
               </div>
               <div className="col-3">
           <input type="submit" value="search" className="btn btn-primary w-250" /></div>
           <div className="col-3">
           <input type="button" value="📍" className="btn btn-primary w-100" /></div>
           </div>
         </form>
         <Weather />
        </div>
        </div>
      <footer className="mt-5">
        <p>
          💻 Open-source code by Yasrah Kapadia
        </p>
      </footer>
      </div>
  );
}


