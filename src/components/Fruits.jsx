import React from "react";
import Detail from "./Detail"

function Fruit(props) {
    return (
        <div>
            <div>
                <h2>{props.id}</h2>
                <h2>{props.name}</h2>
            </div>
            <img src={props.link} alt={`This is a ${props.name}`} />
            <Detail expire={props.expire} color={props.color} />
        </div>
    )
}

export default Fruit;