import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastPreview.css";


export default function ForecastPreview(props) {

function hours(){
  let date = new Date(Date.now() + props.data.dt * 1000);
  let hours= date.getHours();
  return`${hours}:00`;
}

  function temperature() {
    if (props.unit === "celcius") {
      return `${Math.round(props.data.main.temp_min)} | 
        ${Math.round(props.data.main.temp_max)}°C`;
    } else {
      return `${Math.round(
        (props.data.main.temp_min * 9) / 5 + 32
      )} | ${Math.round((props.data.main.temp_max * 9) / 5 + 32)}°F`;
    }
  }
  return (
    <div className="ForecastPreview col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
      <hr />
    </div>
  );
}