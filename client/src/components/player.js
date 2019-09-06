import React from "react";

exoirt default function Player (props) {
    return (
        <div className="player">
            <h2>Name: {props.name}</h2>
            <h4>Country: {props.country}</h4>
            <h4>Searches: {props.searches} </h4>
        </div>
    )
}