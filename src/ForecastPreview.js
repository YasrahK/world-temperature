import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastPreview.css";
import Time from "./Time";
export default function ForecastPreview(props) {
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
      <Time time={new Date((props.data.dt + props.timezone) * 1000)} />
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
      <hr />
    </div>
  );
}