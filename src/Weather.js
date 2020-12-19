import React from "react";
import './Weather.css';

export default function Weather(props){
    return(
        <div className="Weather">
            <h1 className="cityName">
                Chicago
            </h1>
        <h2 className="description"> Cloudy </h2>
        <h3 className="dateTime"> Friday 23:15, 12/19/2020 </h3>
        </div>
    )
}
