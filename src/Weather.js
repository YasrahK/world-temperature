import React, { useState } from "react";
import './Weather.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios"

export default function Weather(props){
  const[city, setCity]= useState(null);
  const[weatherInfo, setWeatherInfo]= useState({searched:false});

  function handleResponse(response){
    setWeatherInfo({
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

  function handleSUbmit(event){
    event.preventDefault();
    search();
  }

function handleResponse(response){
  console.log(response.data);
  setWeatherInfo(true);

}

function handleCityChange(event){
  setCity(event.target.value)
}

function showPosition(position){
  let latitude= position.coord.latitude;
  let longitude= position.coords.longitude;
  const apiKey= `5fc324aaf951a7a1b818994b70c47e36`
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(showPosition)
}

function getCurrentLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition)
}

  let form = (
  <div className="searchEngine row">
  <div className="col-10">
     <form onSubmit={handleSUbmit}>
          <div className="row">
            <div className="col-9">
         <input type="search" className="form-control" autoFocus="on" placeholder="Enter a place..." onChange={handleCityChange}/>
         </div>
         <div className="col-3">
     <input type="submit" value="search" className="btn btn-primary w-250" /><
       /div>
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
  
      </div>

    );
} else {
    search();
    return(
      <div className="Weather col">
        <FontAwesomeIcon icon="spinner" pulse size={"3x"} />
      </div>
        
    );
}
}
