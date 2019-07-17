import React from "react";

export default function Header( props) {
    return (
        <div className="header">
            <h1> {props.title} </h1>     
            <h2>{props.date}</h2>
            <p>{props.explanation}</p>
            <p>{props.NasaData}</p>
            <p>{props.mediatype}</p>   
        </div>
        
        
    )
}