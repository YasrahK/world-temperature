import React from "react";

export default function CurrentTemperature(props){
    function showFahrenheit(event){
        event.preventDefault();
        props.setUnit("fahrenheit");
    }
    function showCelcius(event){
        event.preventDefault();
        props.setUnit("celcius");
    }
    function fahrenheit(){
        return(props.celcius *9)/5+32;
    }
    if (props.unit === "celcius") {
    return(
        <div className="CurrentTemperature">
        <div className="float-left">
        <span className="TempToday"> {Math.round(props.celcius)} </span>
        <span className="unit"> °C | <a href="/" onClick={showFahrenheit}>°F
        </a>
        </span>
        </div>
        </div>
        )
    } else {
        return(
        <div className="CurrentTemperature">
        <div className="float-left">
        <span className="TempToday"> {Math.round(fahrenheit())} </span>
        <span className="unit"><a href="/" onClick={showCelcius} > °C </a> | °F 
        </span>
        </div>
        </div>
        )
        }
    }