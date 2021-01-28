import React from "react";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrentTemperature from "./CurrentTemperature";
import "./WeatherCard.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCard(props){
let timezone = props.data.timezone.getHours();

function morning(){
  if (timezone >=5 && timezone < 8){
    return("sunrise")
  } else {
    if( timezone >=8 && timezone < 12){
      return("morning")
    } else {
      if (timezone >=12 && timezone < 18) {
        return("afternoon")
      } else {
        if(timezone >=18 && timezone < 20) {
          return("evening")
        } else {
          return("night")
        }
      }
    }
 }
}
return(
    <div className="WeatherCard">
      <div className="card mt-2 mb-5 ">
        <div className={morning()}>
        <div className="card-body">
                <h1> {props.data.city} </h1>
        <h2 className="description text-capitalize">{props.data.description}</h2>
        <h3> <FormattedDate date={props.data.timezone} /> </h3>
       
        <div className="CurrentWeather row">
             <div className="col-6">
               <div className="clear-fix">
                   <div className="float-left">
                       <WeatherIcon code={props.data.icon}  alt={props.data.description} />
               </div>
             </div>
             <div className="temperatureDisplay">
             <CurrentTemperature celcius={props.data.temperature} />
             </div>
               </div>
             <div className="col-6 weatherAttributes">
               <ul>
                <li className="humid"><FontAwesomeIcon icon="tint"/> Humidity: {props.data.humidity}%  </li>
                <li> <FontAwesomeIcon icon="wind"/> Wind: {Math.round(props.data.wind)}km/hr </li> 
                <li> <FontAwesomeIcon icon="thermometer-full"/> Feels like: {Math.round(props.data.feelsLike)}°</li> 
                 </ul>
             </div>
           
           </div>
           </div>
           </div>
           </div>
           </div>
        
    );

}