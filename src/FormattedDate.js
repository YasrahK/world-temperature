import React from "react";
import "./FormattedDate.css";
export default function FormattedDate(props) {
        
        let hours= props.date.getHours();
        if(hours<10){
            hours=`0${hours}`;
        }
        let minutes = props.date.getMinutes();
        if(minutes<10){
            minutes= `0${minutes}`;
        }

        const days=["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[props.date.getDay()];

    const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month= months[props.date.getMonth()]

    let year=props.date.getFullYear();

    function date(){
        let dateNumber = props.date.getDate();
        if (dateNumber ===1 || dateNumber === 21) {
            return `${dateNumber}st`;
        } else {
            if(dateNumber === 2 || dateNumber === 22) {
                return `${dateNumber}nd`;
            } else {
                if(dateNumber === 3 || dateNumber ===23) {
                    return `${dateNumber}rd`;
                } else {
                    return `${dateNumber}th`;
                }
            }
        }
    }

        return(
            <div className="dateFormat"> {month} {date()},{year} {day} <br />
             <small className="localTime"> {hours}:{minutes} Local Time </small>
             </div>
        );
}