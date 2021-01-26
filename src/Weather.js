import React, { useState } from "react";
import './Weather.css';
import WeatherCard from "./WeatherCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";


export default function Weather(props){
  const[city, setCity]= useState(props.defaultCity); //unless you don't change the state from null its will show loading
  const[weatherInfo, setWeatherInfo]= useState({searched:false});

  function handleResponse(response){
    console.log(response.data);
    setWeatherInfo({
      date: new Date (response.data.dt*1000),
      timezoneDifference: response.data.timezone,
      timezone: new Date(Date.now() +response.data.timezone*1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
     
      searched:true
    });
  }

  function search(){
    const apiKey=`5fc324aaf951a7a1b818994b70c47e36`
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  
    axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleCityChange(event){
    setCity(event.target.value)
  }

  function showPosition(position){
    let latitude= position.coords.latitude;
    let longitude= position.coords.longitude;
    const apiKey= `5fc324aaf951a7a1b818994b70c47e36`
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  }


function getCurrentLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition)
}

  let form = (
  <div className="searchEngine row">
  <div className="col-10">
     <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
         <input type="search" className="form-control" autoFocus="on" placeholder="Enter a place..." onChange={handleCityChange}/>
         </div>
         <div className="col-3">
     <input type="submit" value="search" className="btn btn-primary w-250" />
     </div>
       </div>
   </form>
   </div>
   <div className="col-2">
     <button className="btn btn-info" title="Geolocation" onClick={getCurrentLocation}><FontAwesomeIcon icon="compass" spin /></button>
   </div>
  </div> 
  );
  if (weatherInfo.searched){
    return(
      <div className="Weather">
        {form}
        <WeatherCard data={weatherInfo} />
      </div>

    );
} else {
    search();
    return(
      <div className="Weather col">
        Loading... 
      </div>
        
    );
}
}
