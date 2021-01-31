import React from "react";
import "./FormattedDate.css";
import Time from "./Time";
export default function FormattedDate(props) {
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

    function localTime(){
        return<Time time={props.date} />
    }

        return(
            <div className="dateFormat"> {month} {date()},{year} {day} <br />
            <p> {localTime()} <small className="localTime"> Local Time </small> </p>
             </div>
        );
}