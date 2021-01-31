import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastPreview(props) {

function hours(){
    let date =new Date(props.data.dt*1000);
    let hours= date.getHours();
    return `${hours}:00`
}


function temperature() {
    if(props.unit==="°C"){
        return `${Math.round(props.data.main.temp)}°C`
    } else{
        return `${Math.round(props.data.main.temp* 9/5 +32)}°F`
    }
  }
    return(
        <div className="ForecastPreview col">
        
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        {temperature()}
        </div>
        
    );
}