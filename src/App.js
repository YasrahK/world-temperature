import React from "react";
import './App.css';
import headerImage from "./images/headerimage.png";
function App() {
  return (
    <div className="App">
      <header>
        <img src={headerImage} alt="Haapy World" /> 
        <h1>What temperature is it ?</h1>
      </header>
      <div className="container">
    
      </div>
    </div>
  );
}

export default App;
