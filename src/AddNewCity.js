import React, {useState} from "react";
import './AddNewCity.css';
import Weather from "./Weather"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function AddNewCity(props){
const[click, setClick]=useState(false)

    function handleCityCard(event){
        event.preventDefault();
        setClick(true);

    }

    if (click){
        return(
            <div className="AddNewCity">
<Weather defaultCity={props.defaultCity} />
            </div>
        );      
    } else {

    return(
       <div className="AddNewCity col">
           <div className="CityCard">
               <button type="button" title="Add a new place" className="btn btn-light mt-6" onClick={handleCityCard}>
                <FontAwesomeIcon icon="plus" />
               </button>
           </div>
       </div> 
    );
}
} 